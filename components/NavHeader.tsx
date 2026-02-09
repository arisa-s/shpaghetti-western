"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

interface NavLinkProps {
  label: string;
  onClick: () => void;
  isInHeroSection: boolean;
  isMobile?: boolean;
}

// Helper function to get text color classes based on hero section state
function getTextColorClasses(isInHeroSection: boolean): string {
  return isInHeroSection
    ? "text-deep-green hover:text-deep-green/80"
    : "text-deep-green hover:text-deep-green/80";
}

function NavLink({
  label,
  onClick,
  isInHeroSection,
  isMobile = false,
}: NavLinkProps) {
  const baseClasses = "transition-colors";
  const colorClasses = getTextColorClasses(isInHeroSection);

  const sizeClasses = isMobile
    ? "block w-full text-left py-2 text-sm uppercase "
    : "text-xs lg:text-sm uppercase ";

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${colorClasses} ${sizeClasses}`}
    >
      {label}
    </button>
  );
}

interface NavItem {
  id: string;
  label: string;
}

export default function NavHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Define navigation items
  const navItems: NavItem[] = [
    { id: "synopsis", label: "Synopsis" },
    { id: "vision", label: "Vision" },
    // { id: "investment", label: "Investment" },
    { id: "team", label: "Team" },
    // { id: "press", label: "Press" },
    // { id: "contact", label: "Contact" },
  ];

  // Define which sections have dedicated pages (only vision and investment)
  const pagesMap: Record<string, string> = {
    vision: "/vision",
    investment: "/investment",
  };

  // Check if we're on homepage to determine nav visibility behavior
  const isHomePage = pathname === "/";

  // Determine if we're in the hero section (homepage and not scrolled)
  const isInHeroSection = isHomePage && !scrolled;

  useEffect(() => {
    // Track scroll position
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      setScrolled(window.scrollY > heroHeight - 100);
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle hash navigation when navigating from other pages
  useEffect(() => {
    if (pathname === "/" && window.location.hash) {
      const sectionId = window.location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [pathname]);

  const handleNavigation = (sectionId: string) => {
    const dedicatedPage = pagesMap[sectionId];

    // Close mobile menu
    setIsMobileMenuOpen(false);

    // If dedicated page exists, always route to it
    if (dedicatedPage) {
      router.push(dedicatedPage);
    } else {
      // If no dedicated page exists
      if (isHomePage) {
        // If on homepage, scroll to section
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // If not on homepage, navigate to homepage with hash
        router.push(`/#${sectionId}`);
      }
    }
  };

  const handleLogoClick = () => {
    // Close mobile menu
    setIsMobileMenuOpen(false);

    if (isHomePage) {
      // If on homepage, scroll to hero section
      const heroElement = document.getElementById("hero");
      if (heroElement) {
        heroElement.scrollIntoView({ behavior: "smooth" });
      } else {
        // Fallback: scroll to top
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      // If not on homepage, navigate to homepage
      router.push("/");
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-300  ${
        isInHeroSection
          ? "bg-white/10 border-b border-white/20"
          : "bg-white/80 border-b border-gray-200"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 md:px-8 py-3">
        <div className="flex items-center justify-between">
          {/* Spacer when logo hidden (in hero); logo on left when scrolled */}
          {/* {isInHeroSection ? (
            <div className="w-6" />
          ) : ( */}
          <button
            onClick={handleLogoClick}
            className="text-lg md:text-xl font-cormorant font-bold text-deep-green transition-colors uppercase"
          >
            Spaghetti Western
          </button>
          {/* )} */}

          {/* Menu button - same on mobile and desktop */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-2 transition-colors ${getTextColorClasses(isInHeroSection)}`}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Navigation links - same dropdown for mobile and desktop when menu open */}
        {isMobileMenuOpen && (
          <ul className="mt-4 space-y-2 pb-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <NavLink
                  label={item.label}
                  onClick={() => handleNavigation(item.id)}
                  isInHeroSection={isInHeroSection}
                  isMobile
                />
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}
