"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface PressItem {
  title: string;
  publication: string;
  url: string;
}

interface SwPressCarouselProps {
  items: PressItem[];
}

export default function SwPressCarousel({ items }: SwPressCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(3); // lg: 3 items
      } else if (window.innerWidth >= 768) {
        setItemsPerView(2); // md: 2 items
      } else {
        setItemsPerView(1); // mobile: 1 item
      }
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  const maxIndex = Math.max(0, items.length - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      const next = prev + itemsPerView;
      return next > maxIndex ? maxIndex : next;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      const next = prev - itemsPerView;
      return next < 0 ? 0 : next;
    });
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.min(index, maxIndex));
  };

  const slideWidth = 100 / itemsPerView;

  return (
    <div className="relative w-full">
      {/* Carousel Container */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * slideWidth}%)`,
          }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="flex justify-center px-2 md:px-4"
              style={{ minWidth: `${slideWidth}%` }}
            >
              <Link
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full max-w-md aspect-square bg-white/60 border border-black backdrop-blur-md shadow-lg p-6 md:p-8 hover:bg-white/20 transition-colors group"
              >
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl md:text-2xl font-cormorant text-black mb-4 group-hover:text-maroon transition-colors">
                      &ldquo;{item.title}&rdquo;
                    </h3>
                  </div>
                  <div className="mt-auto">
                    <p className="text-sm uppercase tracking-widest text-black/60 mb-2">
                      {item.publication}
                    </p>
                    <span className="text-xs text-black/40 group-hover:text-black transition-colors">
                      Read more →
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        disabled={currentIndex === 0}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-black text-white p-3 hover:bg-maroon transition-colors z-10 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Previous slide"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        disabled={currentIndex >= maxIndex}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-black text-white p-3 hover:bg-maroon transition-colors z-10 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Next slide"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-8">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex
                ? "bg-maroon w-8"
                : "bg-black/30 hover:bg-black/50 w-2"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
