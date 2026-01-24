import Image from "next/image";

export default function SynopsisSection() {
  return (
    <section id="synopsis" className="relative min-h-screen flex items-center justify-center py-32 px-8 overflow-hidden">
      {/* Background Image */}
      <Image
        src="/synopsis.jpg"
        alt="Synopsis"
        fill
        className="object-cover object-center"
        quality={90}
      />
      
      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="flex flex-col md:flex-row justify-center relative z-10 gap-12 md:p-16 w-full mt-auto">
        <h2 className="text-4xl md:text-5xl lg:text-9xl font-cowboy text-white mb-8 text-center drop-shadow-2xl">
          Synopsis
        </h2>
        <p className="max-w-2xl ml-auto text-white">
          The film, set in 1881, follows the story of Elena Fardella who leaves Sicily with her hapless husband, Lorenzo, and his dreams of finding fame and fortune in the American West. Day One, Lorenzo dies in a saloon brawl and Elena finds herself stranded in the remote town of Eden in West Texas. She is penniless, left with a wagon full of Italian groceries. Convincing the local Madame that she should be the brothel cook, Elena discovers her calling, her cuisine inspiring all who eat it. However, when a crooked Sheriff threatens her new life, Elena has to use her wit, new friendships and the food she creates to save the town; ultimately finding her true voice and a home where she belongs.
        </p>
      </div>
    </section>
  );
}

