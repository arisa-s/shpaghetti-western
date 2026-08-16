import SwTypewriter from "@/components/SwTypewriter";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="fixed inset-0 z-0 min-h-screen flex items-center justify-center py-32 px-8 overflow-hidden"
    >
      {/* 16:9 poster — top-aligned so title and fire stay in frame on every width */}
      <div className="absolute inset-x-0 top-0 aspect-video max-h-screen">
        <picture className="absolute inset-0 block h-full w-full">
          <source srcSet="/images/hero.avif" type="image/avif" />
          <source
            srcSet="/images/hero.webp 1280w, /images/hero.webp 2560w"
            sizes="100vw"
            type="image/webp"
          />
          <img
            src="/images/hero.webp"
            alt="Spaghetti Western illustrated poster with a rider on horseback overlooking a burning town."
            width={2560}
            height={1680}
            sizes="100vw"
            fetchPriority="high"
            loading="eager"
            decoding="async"
            className="h-full w-full object-cover object-top"
          />
        </picture>
      </div>

      <div className="absolute inset-0 bg-black/40" aria-hidden />
      {/* Content */}
    </section>
  );
}
