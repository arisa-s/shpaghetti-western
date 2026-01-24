import SwTypewriter from "@/components/SwTypewriter";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center py-32 px-8 overflow-hidden">
       <div className="absolute inset-0 bg-maroon" />
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-8 text-center max-w-5xl">
      <Image
        src="/hero.jpg"
        alt="Wild West Adventure"
        width={192}
        height={192}
        priority
        className="object-center object-contain w-36 "
        quality={90}
      />
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-normal leading-tight tracking-wider text-sandy-yellow font-cowboy drop-shadow-2xl">
          Spaghetti Western
        </h1>

        <p className="font-normal leading-relaxed tracking-widest text-white font-sans drop-shadow-lg">
          A Female-Driven,<br/> Delicious Wild West Adventure
        </p>

        <div className="min-h-[80px] flex items-center justify-center">
          <SwTypewriter
            words={["Sun-baked.", "Lawless.", "Unapologetic."]}
            typingSpeed={100}
            deletingSpeed={80}
            delayBetweenWords={2000}
            delayAfterLastWord={4000}
            className="font-normal leading-relaxed tracking-widest text-white font-sans drop-shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

