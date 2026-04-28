 "use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import HeroSection from "./components/HeroSection";
import TrustedBySection from "./components/TrustedBySection";
import FeaturesHighlightSection from "./components/FeaturesHighlightSection";
import StatsBannerSection from "./components/StatsBannerSection";
import HowWeWorkSection from "./components/HowWeWorkSection";
import BuiltForEveryTeamSection from "./components/BuiltForEveryTeamSection";
import ComparisonSection from "./components/ComparisonSection";
import ProvenResultsSection from "./components/ProvenResultsSection";
import EnterpriseSecuritySection from "./components/EnterpriseSecuritySection";
import TestimonialsSection from "./components/TestimonialsSection";
import ProjectCtaSection from "./components/ProjectCtaSection";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";

export default function Home() {
  const [showMobileHeader, setShowMobileHeader] = useState(true);
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      const lastY = lastScrollYRef.current;

      // Always show header near top.
      if (currentY < 24) {
        setShowMobileHeader(true);
      } else if (currentY > lastY) {
        // Scrolling down: hide on mobile.
        setShowMobileHeader(false);
      } else if (currentY < lastY) {
        // Scrolling up: show on mobile.
        setShowMobileHeader(true);
      }

      lastScrollYRef.current = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="landing-page min-h-screen bg-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 z-50 w-full border-b border-slate-200 bg-white transition-transform duration-300 ${
          showMobileHeader ? "translate-y-0" : "-translate-y-full md:translate-y-0"
        }`}
      >
        <div className="mx-auto max-w-[74rem] px-4 sm:px-6">
          <div className="grid h-16 grid-cols-[auto_1fr] items-center md:grid-cols-[1fr_auto_1fr]">
            <div className="flex-shrink-0">
              <Link
                href="#home"
                className='font-["ui-sans-serif,system-ui,sans-serif,\\"Apple_Color_Emoji\\",\\"Segoe_UI_Emoji\\",\\"Segoe_UI_Symbol\\",\\"Noto_Color_Emoji\\""] text-2xl leading-8 font-bold tracking-tight text-[oklch(0.208_0.042_265.755)]'
              >
                INSIA
              </Link>
            </div>
            <div className="hidden items-center justify-center gap-8 md:flex">
              <Link href="#features" className='font-["ui-sans-serif,system-ui,sans-serif,\\"Apple_Color_Emoji\\",\\"Segoe_UI_Emoji\\",\\"Segoe_UI_Symbol\\",\\"Noto_Color_Emoji\\""] text-sm leading-5 font-medium text-slate-700 transition-colors hover:text-blue-600'>
                Features
              </Link>
              <Link href="#comparison" className='font-["ui-sans-serif,system-ui,sans-serif,\\"Apple_Color_Emoji\\",\\"Segoe_UI_Emoji\\",\\"Segoe_UI_Symbol\\",\\"Noto_Color_Emoji\\""] text-sm leading-5 font-medium text-slate-700 transition-colors hover:text-blue-600'>
                Solutions
              </Link>
              <Link href="#about" className='font-["ui-sans-serif,system-ui,sans-serif,\\"Apple_Color_Emoji\\",\\"Segoe_UI_Emoji\\",\\"Segoe_UI_Symbol\\",\\"Noto_Color_Emoji\\""] text-sm leading-5 font-medium text-slate-700 transition-colors hover:text-blue-600'>
                About
              </Link>
              <Link href="#process" className='font-["ui-sans-serif,system-ui,sans-serif,\\"Apple_Color_Emoji\\",\\"Segoe_UI_Emoji\\",\\"Segoe_UI_Symbol\\",\\"Noto_Color_Emoji\\""] text-sm leading-5 font-medium text-slate-700 transition-colors hover:text-blue-600'>
                Process
              </Link>
            </div>
            <div className="hidden items-center justify-end gap-3 md:flex">
              <Link href="#project-cta" className='px-2 py-1 font-["ui-sans-serif,system-ui,sans-serif,\\"Apple_Color_Emoji\\",\\"Segoe_UI_Emoji\\",\\"Segoe_UI_Symbol\\",\\"Noto_Color_Emoji\\""] text-sm leading-5 font-medium text-slate-700 transition-colors hover:text-blue-600'>
                Log in
              </Link>
              <Link
                href="#project-cta"
                className="inline-flex items-center rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_22px_rgba(37,99,235,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-[0_12px_28px_rgba(37,99,235,0.42)]"
              >
                Get Started
              </Link>
            </div>
            <div className="md:hidden">
              <button className="text-slate-700">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <HeroSection />

      {/* Trusted By Section */}
      <TrustedBySection />

      {/* Features Highlight Section */}
      <FeaturesHighlightSection />

      {/* Stats Banner Section */}
      <StatsBannerSection />

      {/* How We Work Section */}
      <HowWeWorkSection />

      {/* Built For Every Team Section */}
      <BuiltForEveryTeamSection />

      {/* Comparison Section */}
      <ComparisonSection />

      {/* Proven Results Section */}
      <ProvenResultsSection />

      {/* About Section */}
      <AboutSection />

      {/* Enterprise Security Section */}
      <EnterpriseSecuritySection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Project CTA Section */}
      <ProjectCtaSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
