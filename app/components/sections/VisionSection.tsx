"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Lottie from "lottie-react";
import SwHighlightLink from "@/components/SwHighlightLink";
import SwVideoPlayer from "@/components/SwVideoPlayer";
import arrowAnimation from "@/public/lottie/arrow.json";

export default function VisionSection() {
  const [showArrow, setShowArrow] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const handleHighlightComplete = () => {
    setShowArrow(true);
  };

  // Use Intersection Observer to detect when section enters viewport
  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            // Show arrow after a short delay when section is visible
            setTimeout(() => {
              setShowArrow(true);
            }, 500);
          } else {
            // Reset when section leaves viewport so it can replay
            setIsInView(false);
            setShowArrow(false);
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of section is visible
        rootMargin: "0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="vision" className="min-h-screen flex items-center justify-center py-32 px-8 bg-sandy-yellow">
      <div className=" max-w-8xl w-full flex flex-col lg:flex-row gap-8 lg:gap-16 items-center relative z-10 lg:p-16">
        <div className="text-sm sm:text-base max-w-2xl w-full">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-cowboy text-maroon mb-8">
            A story about pioneering women, funded by pioneering women.
          </h2>
          <p className="text-black mb-4">
            Funded by an international collective of female investors.
          </p>
          <p className="text-black mb-4">
            With the first stage complete, we are armed with a stellar script, production plan and an{" "}
            <SwHighlightLink onAnimationComplete={handleHighlightComplete}>
              original soundtrack by Grammy award-winning Rhiannon Giddens (ft. artist in Beyonce&apos;s Texas Hold &apos;Em).
            </SwHighlightLink>
          </p>
          <p className="text-black mb-6">
            All funded by female investors, entrepreneurs and patrons of the arts, including many who are stepping into film investment for the first time.
          </p>

          {/* CTA to full Vision page */}
          <Link
            href="/vision"
            className="inline-block  underline uppercase hover:text-maroon transition-colors font-bold"
          >
            Read more about our vision
          </Link>
          {/* Hand-drawn arrow animation */}
          <div 
            className={`hidden lg:block w-36 h-40 mt-4 transition-opacity duration-500 ml-auto  mr-24 ${
              showArrow ? "opacity-100" : "opacity-0"
            }`}
            style={{ transform: "scaleX(-1) rotate(-420deg)" }}
          >
            {showArrow && (
              <Lottie
                key={isInView ? "visible" : "hidden"}
                animationData={arrowAnimation}
                loop={false}
                autoplay={true}
              />
            )}
          </div>
        </div>
        <SwVideoPlayer
          src="/trimmed.mp4"
          title="Original Soundtrack Preview"
          className="w-full aspect-video rounded-lg shadow-lg mt-auto"
        />
      </div>
    </section>
  );
}

