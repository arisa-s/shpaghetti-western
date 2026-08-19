import SwTypewriter from "@/components/SwTypewriter";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="fixed inset-0 z-0 h-dvh min-h-dvh w-full flex items-center justify-center overflow-hidden"
    >
      {/* Full-viewport poster */}
      <div className="absolute inset-0">
        <picture className="absolute inset-0 block h-full w-full">
          <source
            media="(max-width: 767px)"
            srcSet="/images/hero-mobile.avif"
            type="image/avif"
          />
          <source
            media="(max-width: 767px)"
            srcSet="/images/hero-mobile.webp"
            type="image/webp"
          />
          <source
            media="(max-width: 767px)"
            srcSet="/images/hero-mobile.jpg"
            type="image/jpeg"
          />
          <source srcSet="/images/hero.avif" type="image/avif" />
          <source srcSet="/images/hero.webp" type="image/webp" />
          <img
            src="/images/hero.jpg"
            alt="Spaghetti Western illustrated poster with a rider on horseback overlooking a burning town."
            width={2560}
            height={1680}
            sizes="100vw"
            fetchPriority="high"
            loading="eager"
            decoding="async"
            className="h-full w-full object-cover object-center md:object-top"
          />
        </picture>
      </div>

      <div className="absolute inset-0 bg-black/40" aria-hidden />
      {/* Content */}
    </section>
  );
}
