import SwTypewriter from "@/components/SwTypewriter";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="fixed inset-0 z-0 min-h-screen flex items-center justify-center py-32 px-8 overflow-hidden"
    >
      {/* Full-bleed cinematic background */}
      <Image
        src="/ugly/SPAGHETTI WESTERN.png"
        alt="Spaghetti Western"
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-black/40" aria-hidden />
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-8 text-center max-w-5xl">
        <h1 className="text-4xl md:text-6xl lg:text-8xl leading-tight tracking-wider text-white font-cormorant font-bold drop-shadow-2xl">
          Spaghetti Western
        </h1>

        <p className="font-normal leading-relaxed tracking-widest text-white font-sf drop-shadow-lg text-lg md:text-xl">
          A Female-Driven,
          <br /> Delicious Wild West Adventure
        </p>

        <div className="min-h-[80px] flex items-center justify-center">
          <SwTypewriter
            words={["Sun-baked.", "Lawless.", "Unapologetic."]}
            typingSpeed={100}
            deletingSpeed={80}
            delayBetweenWords={2000}
            delayAfterLastWord={4000}
            className="font-normal leading-relaxed tracking-widest text-white font-sf drop-shadow-lg"
          />
        </div>

        <Link
          href="/investment"
          className="mt-4 cursor-pointer inline-block bg-maroon text-white font-sf uppercase tracking-widest text-sm px-8 py-4 hover:bg-maroon/90 transition-colors drop-shadow-lg"
        >
          Invest
        </Link>
      </div>
    </section>
  );
}
