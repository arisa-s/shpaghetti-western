import Image from "next/image";

export default function SynopsisSection() {
  return (
    <section
      id="synopsis"
      className="bg-deep-green space-x-12 relative min-h-screen flex items-center justify-center py-32 px-6 sm:px-8 md:px-16 lg:px-24 overflow-hidden"
    >
      <Image
        src="/ugly/SPAGHETTI WESTERN.png"
        alt=""
        width={1920}
        height={1080}
        className="w-1/2 hidden md:block"
      />

      {/* Content — right half (full width on mobile when image hidden) */}
      <div className="flex flex-col justify-center relative z-10 gap-12 w-full md:w-1/2">
        <div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-cormorant font-bold text-green-superlight tracking-tight">
            Synopsis
          </h2>
        </div>
        <p className="text-justify  sm:text-xl max-w-2xl ml-auto text-green-light font-sf leading-relaxed">
          The film, set in 1881, follows the story of Elena Fardella who leaves
          Sicily with her hapless husband, Lorenzo, and his dreams of finding
          fame and fortune in the American West. Day One, Lorenzo dies in a
          saloon brawl and Elena finds herself stranded in the remote town of
          Eden in West Texas. She is penniless, left with a wagon full of
          Italian groceries. Convincing the local Madame that she should be the
          brothel cook, Elena discovers her calling, her cuisine inspiring all
          who eat it. However, when a crooked Sheriff threatens her new life,
          Elena has to use her wit, new friendships and the food she creates to
          save the town; ultimately finding her true voice and a home where she
          belongs.
        </p>
      </div>
    </section>
  );
}
