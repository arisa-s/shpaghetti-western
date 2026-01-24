import Link from "next/link";
import Image from "next/image";

export default function InvestmentSection() {
  return (
    <section id="investment" className="relative min-h-screen flex flex-col items-center justify-center py-16 md:py-32 px-4 md:px-8 overflow-hidden">
      {/* Background Image */}
      <Image
        src="/paper-texture.jpg"
        alt=""
        fill
        className="object-cover object-center"
        quality={90}
        priority
      />
      
      {/* Content */}
      <div className="relative z-10">
        <div>
          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-7xl font-cowboy text-black mb-6 uppercase tracking-tight">
            Backing the Film
          </h2>

          {/* Quote */}
          <blockquote className="border-l-4 border-maroon pl-4 mb-12">
            <p className="text-lg md:text-xl text-black mb-2">
              &ldquo;I figure if a girl wants to be a legend, she should just go ahead and be one.&rdquo;
            </p>
            <cite className="text-xs text-black/50 uppercase tracking-widest">— Calamity Jane</cite>
          </blockquote>
        </div>
        <div className="max-w-6xl w-full grid md:grid-cols-2 lg:grid-cols-3 gap-0 items-center">
        {/* Image */}
        <div className="col-span-1">
          <Image
            src="/beer.jpg"
            alt="Pioneering women"
            width={192}
            height={192}
            className="object-contain w-48 object-center mx-auto"
          />
        </div>

        {/* Content */}
        <div className="col-span-2 p-8 md:p-16 flex flex-col justify-center max-w-3xl ml-auto">
          {/* Summary */}
          <p className="text-black mb-8 leading-relaxed">
          Spaghetti Western is already one-third funded — and ready to be greenlit. We’re inviting a small group of pioneering women to join us in pushing it across the line and helping redefine how films are funded and made.
<br/><br/>
As an investor, you’ll get a front-row seat to the creative and production process, become part of an intimate community of women shaping this film from the inside, and help blaze a new trail for feminist storytelling in cinema.
          </p>

          {/* CTA */}
          <Link 
            href="/investment"
            className="inline-block bg-maroon text-white uppercase tracking-widest text-sm px-8 py-4 hover:bg-maroon/80 transition-colors w-fit"
          >
            Learn More
          </Link>
        </div>
      </div>
      </div>
    </section>
  );
}

