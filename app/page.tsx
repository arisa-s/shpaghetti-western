import NavHeader from "@/components/NavHeader";
import HeroSection from "./components/sections/HeroSection";
import SynopsisSection from "./components/sections/SynopsisSection";
import TeamSection from "./components/sections/TeamSection";
import InvestmentSection from "./components/sections/InvestmentSection";
import PressSection from "./components/sections/PressSection";
import VisionSection from "./components/sections/VisionSection";
import ContactSection from "./components/sections/ContactSection";

export default function Home() {
  return (
    <div className="bg-white">
      <NavHeader />
      <HeroSection />
      {/* Content scrolls over the fixed hero; overlay ignores pointer in spacer area so hero button works */}
      <div className="relative z-10 pointer-events-none">
        <div className="min-h-screen" aria-hidden />
        <div className="pointer-events-auto">
          <SynopsisSection />
          <VisionSection />
          <InvestmentSection />
          <TeamSection />
          <PressSection />
          <ContactSection />
        </div>
      </div>
    </div>
  );
}
