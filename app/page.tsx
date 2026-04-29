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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const close = () => setMobileMenuOpen(false);
    mq.addEventListener("change", close);
    return () => mq.removeEventListener("change", close);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [mobileMenuOpen]);

  return (
    <div className="landing-page min-h-screen bg-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 z-50 w-full border-b border-slate-200 bg-white transition-transform duration-300 ${
          showMobileHeader ? "translate-y-0" : "-translate-y-full md:translate-y-0"
        }`}
      >
        <div className="mx-auto max-w-[74rem] px-4 sm:px-6">
          <div className="relative flex h-16 items-center justify-between md:grid md:grid-cols-[1fr_auto_1fr] md:items-center">
            <div className="flex-shrink-0">
              <Link
                href="#home"
                className='font-["ui-sans-serif,system-ui,sans-serif,\\"Apple_Color_Emoji\\",\\"Segoe_UI_Emoji\\",\\"Segoe_UI_Symbol\\",\\"Noto_Color_Emoji\\""] text-xl leading-8 font-bold tracking-tight text-[oklch(0.208_0.042_265.755)] sm:text-2xl'
                onClick={() => setMobileMenuOpen(false)}
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
            <div className="flex shrink-0 items-center justify-end md:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-lg p-2 text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-900"
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-nav-menu"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                onClick={() => setMobileMenuOpen((open) => !open)}
              >
                {mobileMenuOpen ? (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>

            {mobileMenuOpen ? (
              <div
                id="mobile-nav-menu"
                className="absolute top-full right-0 left-0 z-50 border-b border-slate-200 bg-white shadow-[0_12px_24px_rgba(15,23,42,0.08)] md:hidden"
              >
                <div className="mx-auto flex max-w-[74rem] flex-col gap-1 px-4 py-4 sm:px-6">
                  <Link
                    href="#features"
                    className='rounded-lg px-3 py-2.5 font-["ui-sans-serif,system-ui,sans-serif,\\"Apple_Color_Emoji\\",\\"Segoe_UI_Emoji\\",\\"Segoe_UI_Symbol\\",\\"Noto_Color_Emoji\\""] text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-blue-600'
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Features
                  </Link>
                  <Link
                    href="#comparison"
                    className='rounded-lg px-3 py-2.5 font-["ui-sans-serif,system-ui,sans-serif,\\"Apple_Color_Emoji\\",\\"Segoe_UI_Emoji\\",\\"Segoe_UI_Symbol\\",\\"Noto_Color_Emoji\\""] text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-blue-600'
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Solutions
                  </Link>
                  <Link
                    href="#about"
                    className='rounded-lg px-3 py-2.5 font-["ui-sans-serif,system-ui,sans-serif,\\"Apple_Color_Emoji\\",\\"Segoe_UI_Emoji\\",\\"Segoe_UI_Symbol\\",\\"Noto_Color_Emoji\\""] text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-blue-600'
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About
                  </Link>
                  <Link
                    href="#process"
                    className='rounded-lg px-3 py-2.5 font-["ui-sans-serif,system-ui,sans-serif,\\"Apple_Color_Emoji\\",\\"Segoe_UI_Emoji\\",\\"Segoe_UI_Symbol\\",\\"Noto_Color_Emoji\\""] text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-blue-600'
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Process
                  </Link>
                  <div className="mt-2 flex flex-col gap-2 border-t border-slate-200 pt-4">
                    <Link
                      href="#project-cta"
                      className='rounded-lg px-3 py-2.5 font-["ui-sans-serif,system-ui,sans-serif,\\"Apple_Color_Emoji\\",\\"Segoe_UI_Emoji\\",\\"Segoe_UI_Symbol\\",\\"Noto_Color_Emoji\\""] text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-blue-600'
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Log in
                    </Link>
                    <Link
                      href="#project-cta"
                      className="inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_22px_rgba(37,99,235,0.35)] transition-all hover:bg-blue-700"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            ) : null}
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
