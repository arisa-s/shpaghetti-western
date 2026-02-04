"use client";

import { useState } from "react";
import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";

interface TeamMember {
  name: string;
  role: string;
  description: string;
  imageSrc?: string;
}

const director: TeamMember = {
  role: "Writer / Director",
  name: "Jessica Fox",
  imageSrc: "/team/T2 (picture of Jessica Fox).png",
  description:
    "Jessica Fox is a graduate of Prague's National Film School and first worked as a producer for WNET New York on TEXAS RANCH House. Under her company Mythic Images Studios, she directed the FIRST LAST TOUR, a documentary about the Dresden Dolls for iTunes, and BLUEBEARD, a period short that won Woods Hole Film Festival and Boston International Film Festival. Scouted at a festival, she became NASA's storyteller.\n\nAfter a dream of working in a bookshop in Scotland led her to Wigtown, Jessica co-ran PICTO PRODUCTIONS directing commercials and music videos and authored THREE THINGS YOU NEED TO KNOW ABOUT ROCKETS, Waterstone's Book of the Month and Daily Mail's Romantic Memoir of the Year. STELLA, her first feature film—a retelling of Cinderella set in Scotland and starring Gary Lewis—won Best Drama at Tel Aviv International Film Festival, Best Picture at Female Eye Film Festival, and Best Filmmaker at Montreal Independent Film Festival. Currently, her novel is being adapted as a series, WIGTOWN, starring Emma Roberts, and she is directing and executive producing Tricia O'Malley's best-selling novel WILD SCOTTISH with Buzzfeed.",
};

const otherTeamMembers: TeamMember[] = [
  {
    role: "Producer",
    name: "Diana Phillips",
    imageSrc: undefined,
    description:
      "Diana Phillips is an American producer living in London. She spent 12 years in New York producing films such as BAD LIEUTENANT for Abel Ferrara, SMOKE and BLUE IN THE FACE with Wayne Wang and Paul Auster, and JOE'S APARTMENT for MTV. Relocating to London, Diana continued her relationship with Miramax and made BIRTHDAY GIRL with Nicole Kidman, after which she produced ALFIE with Jude Law for Paramount, WILD CHILD for Working Title / Universal, and DEATH AT A FUNERAL directed by Frank Oz. She was also the executive in charge of production at Jim Henson's Creature Shop for two years.\n\nDiana is currently in casting on WENCESLAS SQUARE, a film based upon Arthur Phillips' short story to be directed by Ali Selim (Secret Invasion). Further projects in development include her series WIGTOWN, starring Emma Roberts, and her series JANE, co‑produced with JJ Abrams' BAD ROBOT. In the distribution pipeline is PARK AVENUE, a drama starring Fiona Shaw and Katherine Waterston, written and directed by Gaby Dellal.",
  },
  {
    role: "Producer",
    name: "Francey Grace",
    imageSrc: undefined,
    description:
      "Francey Grace is a film producer based in Los Angeles. She worked as an executive at Groundswell Productions on such movies as MILK, APPALOOSA, and ALL GOOD THINGS. Prior to Groundswell, she collaborated and produced for many years with director Wayne Wang on his films JOY LUCK CLUB, SMOKE, BLUE IN THE FACE, CHINESE BOX, and THE CENTER OF THE WORLD. She was a partner at AMBUSH ENTERTAINMENT, producing films such as THE SQUID AND THE WHALE and THE OH IN OHIO, amongst others.\n\nFrancey is currently developing film and television projects under her Friendly Giant Pictures banner. She has a TV series about the iconic department store Barneys in development with 20th Century and FX. She also has several film projects in various stages of development and pre‑production including DIARY OF A MAD OLD MAN with Wayne Wang directing and starring Fan Bingbing.",
  },
  {
    role: "Composer",
    name: "Rhiannon Giddens",
    imageSrc: "/team/T2 (Picture of Rhiannon Giddens).png",
    description:
      'Rhiannon Giddens has made a singular, iconic career out of stretching her brand of folk music—with its miles‑deep historical roots and contemporary sensibilities—into just about every field imaginable. A two‑time GRAMMY Award and Pulitzer Prize‑winning singer and instrumentalist, MacArthur "Genius" grant recipient, and composer of opera, ballet, and film, Giddens has centered her work around the mission of lifting up people whose contributions to American musical history have previously been overlooked or erased, and advocating for a more accurate understanding of the country\'s musical origins through art.\n\nAs Pitchfork once said, "few artists are so fearless and so ravenous in their exploration"—a journey that has led to NPR naming her one of its 25 Most Influential Women Musicians of the 21st Century and to American Songwriter calling her "one of the most important musical minds currently walking the planet."',
  },
  {
    role: "Associate Producer",
    name: "Charlotte Carey",
    imageSrc: undefined,
    description:
      "Charlotte Carey is an Associate Producer with experience on both sides of the Atlantic. Her credits include TURN IN THE WOUN'D by Abel Ferrara and PARK AVENUE by Gaby Dellal. Currently, she is developing ANGELS IN ASYLUM with Rob Sorrenti.\n\nCharlotte has also worked on some of the biggest franchises in the film industry, such as MISSION IMPOSSIBLE, TOP GUN, and Marvel's recent release, SECRET INVASION.",
  },
];

export default function TeamSection() {
  const [bioOpen, setBioOpen] = useState(false);
  const [activeMember, setActiveMember] = useState<TeamMember | null>(null);

  return (
    <section
      id="team"
      className="relative min-h-screen flex items-center justify-center py-12 sm:py-24 px-4 sm:px-8 md:px-16 lg:px-24 bg-sandy-yellow"
    >
      <div className="max-w-5xl w-full">
        <SectionTitle className="mb-10 sm:mb-16 text-maroon">Team</SectionTitle>

        {/* Director — featured with headshot */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start mb-16 sm:mb-24">
          <div className="shrink-0 w-full max-w-sm md:max-w-xs aspect-3/4 relative rounded overflow-hidden border-2 border-maroon/30 shadow-xl">
            <Image
              src={director.imageSrc!}
              alt={director.name}
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 320px"
              priority
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs uppercase tracking-widest text-maroon/80 mb-1">
              {director.role}
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-cormorant font-bold text-maroon mb-4">
              {director.name}
            </h2>
            <p className="text-sm sm:text-base text-black/90 leading-relaxed mb-4">
              {bioOpen
                ? director.description
                : director.description.slice(0, 320) + "…"}
            </p>
            <button
              type="button"
              onClick={() => setBioOpen((prev) => !prev)}
              className="text-sm font-sf uppercase tracking-widest text-maroon hover:underline"
            >
              {bioOpen ? "Show less" : "Read full bio"}
            </button>
          </div>
        </div>

        {/* Other team — compact list */}
        <div className="border-t border-black/10 pt-8">
          <p className="text-xs uppercase tracking-widest text-black/50 mb-4">
            Also with
          </p>
          <ul className="flex flex-wrap gap-x-8 gap-y-3 sm:gap-y-4">
            {otherTeamMembers.map((member) => (
              <li key={member.name}>
                <button
                  type="button"
                  onClick={() => setActiveMember(member)}
                  className="text-left group"
                >
                  <span className="font-cormorant font-semibold text-black group-hover:text-maroon transition-colors">
                    {member.name}
                  </span>
                  <span className="text-black/60 text-sm ml-1.5 group-hover:text-black/80">
                    — {member.role}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Bio modal for other team members */}
        {activeMember && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-md p-4"
            onClick={() => setActiveMember(null)}
          >
            <div
              className="max-w-2xl w-full max-h-[90vh] bg-white border border-black/20 shadow-2xl relative flex flex-col overflow-hidden rounded"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveMember(null)}
                className="absolute top-3 right-3 z-10 text-black/60 hover:text-black bg-white rounded-full w-8 h-8 flex items-center justify-center border border-black/20"
                aria-label="Close"
              >
                ✕
              </button>
              <div className="overflow-y-auto p-6 md:p-10">
                <p className="text-xs uppercase tracking-widest text-maroon/80 mb-1">
                  {activeMember.role}
                </p>
                <h3 className="text-2xl font-cormorant font-bold text-black mb-4">
                  {activeMember.name}
                </h3>
                <p className="text-sm md:text-base leading-relaxed whitespace-pre-line text-black">
                  {activeMember.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
