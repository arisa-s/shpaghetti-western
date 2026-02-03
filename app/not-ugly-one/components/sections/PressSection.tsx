import SwPressCarousel from "@/components/SwPressCarousel";
import Image from "next/image";

const pressItems = [
  {
    title: "Plans launched for Scottish 'women only western'",
    publication: "The Herald",
    url: "https://www.heraldscotland.com/news/25198350.plans-launched-scottish-women-western/",
  },
  {
    title: "BBC Scotland talks Spaghetti Western",
    publication: "BBC Scotland",
    url: "https://drive.google.com/file/d/1c2oSOzofXCsUrJewC42yXSKFzfofng0g/view",
  },
  {
    title: "A Spaghetti Western with a difference.",
    publication: "Daily Record",
    url: "https://www.dailyrecord.co.uk/news/local-news/female-led-spaghetti-western-sicilian-35303993",
  },
  {
    title: "How women won the west",
    publication: "DnG",
    url: "https://dng24.co.uk/how-women-won-the-west/",
  },
  {
    title: "Scottish Spaghetti Western film funded and led entirely by women",
    publication: "The National",
    url: "https://www.thenational.scot/culture/25238879.scottish-spaghetti-western-film-funded-led-entirely-women/",
  },
];

export default function PressSection() {
  return (
    <section
      id="press"
      className="relative min-h-screen flex items-center justify-center py-32 px-8 overflow-hidden"
    >
      {/* Background newspaper texture */}
      <Image
        src="/10.jpg"
        alt=""
        fill
        className="object-cover object-center"
        quality={90}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl w-full">
        <h2 className="text-4xl md:text-5xl font-cowboy text-black mb-16 text-center">
          Press
        </h2>
        <SwPressCarousel items={pressItems} />
      </div>
    </section>
  );
}

