"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Lottie from "lottie-react";
import SwHighlightLink from "@/components/SwHighlightLink";
import SwVideoPlayer from "@/components/SwVideoPlayer";
import arrowAnimation from "@/public/lottie/arrow.json";
import Image from "next/image";

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
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="vision"
      className=" relative min-h-screen flex items-center justify-center py-32 px-6 sm:px-8 bg-sandy-yellow"
      aria-labelledby="vision-heading"
    >
      <Image
        src="/ugly/stolenimage4.png"
        alt=""
        fill
        className="object-cover object-center"
        quality={90}
      />

      <div className="max-w-8xl w-full flex flex-col lg:flex-row gap-8 lg:gap-16 items-center relative z-10 lg:p-16">
        <div className="relative text-base sm:text-lg max-w-2xl w-full bg-white/60 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg border border-black/5">
          <Image
            src="/paper-texture.jpg"
            alt=""
            fill
            className="object-cover object-center"
            quality={90}
            priority
          />
          <div className="relative z-10">
            <h2
              id="vision-heading"
              className="text-2xl md:text-3xl lg:text-4xl font-cormorant font-bold text-maroon mb-6 leading-tight"
            >
              A story about pioneering women, funded by pioneering women.
            </h2>
            <p className="text-maroon-dark mb-4 leading-relaxed">
              Funded by an international collective of female investors.
            </p>
            <p className="text-maroon-dark mb-4 leading-relaxed">
              With the first stage complete, we are armed with a stellar script,
              production plan and an{" "}
              <SwHighlightLink onAnimationComplete={handleHighlightComplete}>
                original soundtrack by Grammy award-winning Rhiannon Giddens
                (ft. artist in Beyonce&apos;s Texas Hold &apos;Em).
              </SwHighlightLink>
            </p>
            <p className="text-maroon-dark mb-6 leading-relaxed">
              All funded by female investors, entrepreneurs and patrons of the
              arts, including many who are stepping into film investment for the
              first time.
            </p>
            {/* CTA to full Vision page */}
            <Link
              href="/vision"
              className="inline-block underline underline-offset-4 decoration-2 uppercase hover:text-maroon focus:text-maroon focus:outline-none focus:ring-2 focus:ring-maroon focus:ring-offset-2 rounded transition-colors font-bold text-maroon-dark"
            >
              Read more about our vision
            </Link>
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
