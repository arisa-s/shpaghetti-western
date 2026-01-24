"use client";

import { useState, useRef, useEffect, useLayoutEffect, useCallback } from "react";

interface SwHighlightLinkProps {
  children: React.ReactNode;
  className?: string;
  lineDelay?: number; // Delay between each line animation in ms
  onAnimationComplete?: () => void; // Callback when all line animations complete
}

interface LineInfo {
  words: string[];
  top: number;
}

export default function SwHighlightLink({ 
  children, 
  className = "",
  lineDelay = 100,
  onAnimationComplete,
}: SwHighlightLinkProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [lines, setLines] = useState<LineInfo[]>([]);
  const [animatedLines, setAnimatedLines] = useState<number[]>([]);
  const containerRef = useRef<HTMLSpanElement>(null);
  const measureRef = useRef<HTMLSpanElement>(null);

  // Get text content from children
  const getText = useCallback((): string => {
    if (typeof children === "string") return children;
    if (typeof children === "number") return String(children);
    return "";
  }, [children]);

  // Measure and detect line breaks (useLayoutEffect for synchronous DOM measurement)
  useLayoutEffect(() => {
    const container = containerRef.current;
    const measureSpan = measureRef.current;
    if (!container || !measureSpan) return;

    const text = getText();
    if (!text) return;

    const words = text.split(" ");
    const lineMap = new Map<number, string[]>();

    // Temporarily render words to measure their positions
    measureSpan.innerHTML = "";
    words.forEach((word, index) => {
      const wordSpan = document.createElement("span");
      wordSpan.textContent = word + (index < words.length - 1 ? " " : "");
      measureSpan.appendChild(wordSpan);
    });

    // Group words by their top position (same line)
    const wordSpans = measureSpan.querySelectorAll("span");
    wordSpans.forEach((span, index) => {
      const rect = span.getBoundingClientRect();
      const top = Math.round(rect.top);
      
      if (!lineMap.has(top)) {
        lineMap.set(top, []);
      }
      lineMap.get(top)!.push(words[index]);
    });

    // Convert map to sorted array
    const sortedLines: LineInfo[] = Array.from(lineMap.entries())
      .sort((a, b) => a[0] - b[0])
      .map(([top, words]) => ({ top, words }));

    // Use microtask to avoid synchronous setState warning
    queueMicrotask(() => {
      setLines(sortedLines);
    });
    measureSpan.innerHTML = "";
  }, [children, getText]);

  // Use Intersection Observer to detect when element is in viewport
  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: "0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  // Trigger line-by-line animation after element becomes visible
  useEffect(() => {
    if (isVisible && lines.length > 0) {
      const timers: NodeJS.Timeout[] = [];
      
      lines.forEach((_, index) => {
        const timer = setTimeout(() => {
          setAnimatedLines((prev) => [...prev, index]);
        }, 50 + index * lineDelay);
        timers.push(timer);
      });

      // Call onAnimationComplete after all lines are animated
      // Add 500ms for the last line's animation duration
      if (onAnimationComplete) {
        const completeTimer = setTimeout(() => {
          onAnimationComplete();
        }, 50 + (lines.length - 1) * lineDelay + 150);
        timers.push(completeTimer);
      }
      
      return () => timers.forEach(timer => clearTimeout(timer));
    }
  }, [isVisible, lines, lineDelay, onAnimationComplete]);

  const text = getText();

  return (
    <span
      ref={containerRef}
      className={`relative inline group ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Hidden measurement span */}
      <span
        ref={measureRef}
        className="absolute opacity-0 pointer-events-none"
        style={{ whiteSpace: "pre-wrap" }}
        aria-hidden="true"
      />

      {/* Render lines with staggered animation */}
      {lines.length > 0 ? (
        lines.map((line, lineIndex) => (
          <span
            key={lineIndex}
            className="relative inline"
            style={{
              backgroundImage: "linear-gradient(to right, var(--maroon), var(--maroon))",
              backgroundSize: animatedLines.includes(lineIndex) ? "100% 100%" : "0% 100%",
              backgroundPosition: "left",
              backgroundRepeat: "no-repeat",
              transition: "background-size 0.15s ease-out",
              boxDecorationBreak: "clone",
              WebkitBoxDecorationBreak: "clone",
              padding: "0.1em 0.2em",
              margin: "-0.1em -0.2em",
            }}
          >
            <span
              className="relative z-10 transition-all duration-150 ease-out"
              style={{
                color: animatedLines.includes(lineIndex) ? "var(--sandy-yellow)" : "black",
                transform: isHovered ? "scale(1.02)" : "scale(1)",
                transformOrigin: "left center",
              }}
            >
              {line.words.join(" ")}
              {lineIndex < lines.length - 1 ? " " : ""}
            </span>
          </span>
        ))
      ) : (
        // Fallback while measuring
        <span className="text-black">{text}</span>
      )}
    </span>
  );
}

