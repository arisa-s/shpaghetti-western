"use client";

import { useState, useEffect, useRef, type ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  /** Delay before animation starts (ms) */
  delay?: number;
  /** Direction to slide from */
  direction?: "up" | "down" | "left" | "right" | "none";
  /** Distance to travel (px) */
  distance?: number;
  /** Trigger when this fraction of element is visible (0–1) */
  threshold?: number;
  /** Root margin for intersection (e.g. "0px 0px -80px 0px" to trigger slightly early) */
  rootMargin?: string;
  className?: string;
  /** Duration in ms */
  duration?: number;
}

const directionMap = {
  up: { x: 0, y: 1 },
  down: { x: 0, y: -1 },
  left: { x: 1, y: 0 },
  right: { x: -1, y: 0 },
  none: { x: 0, y: 0 },
};

export default function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
  distance = 48,
  threshold = 0.12,
  rootMargin = "0px 0px -5% 0px",
  className = "",
  duration = 700,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const { x: dx, y: dy } = directionMap[direction];
  const translateX = isVisible ? 0 : dx * distance;
  const translateY = isVisible ? 0 : dy * distance;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: `translate(${translateX}px, ${translateY}px)`,
        transition: `opacity ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
