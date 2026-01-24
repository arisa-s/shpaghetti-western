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

const teamMembers: TeamMember[] = [
  {
    role: "Writer / Director",
    name: "Jessica Fox",
    imageSrc: "/team/T2 (picture of Jessica Fox).png",
    description:
      "Jessica Fox is a graduate of Prague’s National Film School and first worked as a producer for WNET New York on TEXAS RANCH House. Under her company Mythic Images Studios, she directed the FIRST LAST TOUR, a documentary about the Dresden Dolls for iTunes, and BLUEBEARD, a period short that won Woods Hole Film Festival and Boston International Film Festival. Scouted at a festival, she became NASA’s storyteller.\n\nAfter a dream of working in a bookshop in Scotland led her to Wigtown, Jessica co-ran PICTO PRODUCTIONS directing commercials and music videos and authored THREE THINGS YOU NEED TO KNOW ABOUT ROCKETS, Waterstone’s Book of the Month and Daily Mail’s Romantic Memoir of the Year. STELLA, her first feature film—a retelling of Cinderella set in Scotland and starring Gary Lewis—won Best Drama at Tel Aviv International Film Festival, Best Picture at Female Eye Film Festival, and Best Filmmaker at Montreal Independent Film Festival. Currently, her novel is being adapted as a series, WIGTOWN, starring Emma Roberts, and she is directing and executive producing Tricia O’Malley’s best-selling novel WILD SCOTTISH with Buzzfeed.",
  },
  {
    role: "Producer",
    name: "Diana Phillips",
    imageSrc: undefined,
    description:
      "Diana Phillips is an American producer living in London. She spent 12 years in New York producing films such as BAD LIEUTENANT for Abel Ferrara, SMOKE and BLUE IN THE FACE with Wayne Wang and Paul Auster, and JOE’S APARTMENT for MTV. Relocating to London, Diana continued her relationship with Miramax and made BIRTHDAY GIRL with Nicole Kidman, after which she produced ALFIE with Jude Law for Paramount, WILD CHILD for Working Title / Universal, and DEATH AT A FUNERAL directed by Frank Oz. She was also the executive in charge of production at Jim Henson’s Creature Shop for two years.\n\nDiana is currently in casting on WENCESLAS SQUARE, a film based upon Arthur Phillips’ short story to be directed by Ali Selim (Secret Invasion). Further projects in development include her series WIGTOWN, starring Emma Roberts, and her series JANE, co‑produced with JJ Abrams’ BAD ROBOT. In the distribution pipeline is PARK AVENUE, a drama starring Fiona Shaw and Katherine Waterston, written and directed by Gaby Dellal.",
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
      "Rhiannon Giddens has made a singular, iconic career out of stretching her brand of folk music—with its miles‑deep historical roots and contemporary sensibilities—into just about every field imaginable. A two‑time GRAMMY Award and Pulitzer Prize‑winning singer and instrumentalist, MacArthur “Genius” grant recipient, and composer of opera, ballet, and film, Giddens has centered her work around the mission of lifting up people whose contributions to American musical history have previously been overlooked or erased, and advocating for a more accurate understanding of the country’s musical origins through art.\n\nAs Pitchfork once said, “few artists are so fearless and so ravenous in their exploration”—a journey that has led to NPR naming her one of its 25 Most Influential Women Musicians of the 21st Century and to American Songwriter calling her “one of the most important musical minds currently walking the planet.”",
  },
  {
    role: "Associate Producer",
    name: "Charlotte Carey",
    imageSrc: undefined,
    description:
      "Charlotte Carey is an Associate Producer with experience on both sides of the Atlantic. Her credits include TURN IN THE WOUN’D by Abel Ferrara and PARK AVENUE by Gaby Dellal. Currently, she is developing ANGELS IN ASYLUM with Rob Sorrenti.\n\nCharlotte has also worked on some of the biggest franchises in the film industry, such as MISSION IMPOSSIBLE, TOP GUN, and Marvel’s recent release, SECRET INVASION.",
  },
];

export default function TeamSection() {
  const [activeMember, setActiveMember] = useState<TeamMember | null>(null);

  return (
    <section
      id="team"
      className="min-h-screen flex items-center justify-center py-24 px-8 bg-maroon"
    >
      <div className="max-w-6xl w-full">
        <SectionTitle className="mb-24 text-sandy-yellow">Team</SectionTitle>

        {/* Team Grid */}
        <div className="grid gap-6 md:gap-12 lg:gap-16 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <button
              key={member.name}
              onClick={() => setActiveMember(member)}
              className="group aspect-square border-2 border-black bg-white px-6 md:mx-8 lg:mx-12 py-6 text-left flex flex-col justify-between hover:bg-black hover:text-white transition-colors"
            >
              <div>
                {member.imageSrc ? (
                  <div className="mb-4 flex justify-center">
                    <Image
                      src={member.imageSrc}
                      alt={member.name}
                      width={96}
                      height={96}
                      className="w-40 h-40 object-cover border border-black/40"
                    />
                  </div>
                ): (<div className="mb-4 flex justify-center">
                  <div className="w-40 h-40 bg-gray-200"></div>
                </div>)}
                <p className="text-xs uppercase tracking-widest text-black/60 group-hover:text-white/70">
                  {member.role}
                </p>
                <h3 className="mt-3 text-xl font-cowboy tracking-tight">
                  {member.name}
                </h3>
              </div>
              <p className="mt-4 text-xs text-black/60 group-hover:text-white/80">
                Tap to read bio
              </p>
            </button>
          ))}
        </div>

        {/* Modal with glassmorphic effect */}
        {activeMember && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-md"
            onClick={() => setActiveMember(null)}
          >
            <div
              className="max-w-2xl mx-4 bg-white/80 border border-black/20 shadow-2xl p-8 md:p-10 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveMember(null)}
                className="absolute top-3 right-3 text-black/60 hover:text-black"
                aria-label="Close"
              >
                ✕
              </button>
              <p className="text-xs uppercase tracking-widest text-black/60 mb-2">
                {activeMember.role}
              </p>
              <h3 className="text-2xl md:text-3xl font-cowboy text-black mb-4">
                {activeMember.name}
              </h3>
              <p className="text-sm md:text-base leading-relaxed whitespace-pre-line text-black">
                {activeMember.description}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}