import SectionTitle from "@/components/SectionTitle";
import Link from "next/link";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-deep-green min-h-screen flex items-center justify-center py-32 px-8"
    >
      <div className="max-w-4xl w-full">
        <SectionTitle className="mb-12 text-green-superlight">
          Contact
        </SectionTitle>
        <div className="space-y-6 text-center">
          {/* Email */}
          <div>
            <Link
              href="mailto:spaghettiwesternthemovie@gmail.com"
              className="text-sm sm:text-base md:text-2xl text-green-superlight hover:text-maroon transition-colors underline decoration-2 underline-offset-4"
            >
              spaghettiwesternthemovie@gmail.com
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-12">
            <Link
              href="https://www.instagram.com/spaghettiwesternmovie/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm sm:text-base md:text-lg text-green-superlight hover:text-maroon transition-colors uppercase tracking-widest"
            >
              Instagram
            </Link>
            <span className="hidden md:inline text-green-superlight/30">|</span>
            <Link
              href="https://www.linkedin.com/in/spaghetti-western-the-movie-110646350/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm sm:text-base md:text-lg text-green-superlight hover:text-maroon transition-colors uppercase tracking-widest"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
