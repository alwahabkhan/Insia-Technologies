"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import HeroSection from "./components/HeroSection";
import FeatureHighlightsSection from "./components/FeatureHighlightsSection";
import ServicesSection from "./components/ServicesSection";
import TechnologiesSection from "./components/TechnologiesSection";
import PortfolioProjectsSection from "./components/PortfolioProjectsSection";
import ProjectsSection from "./components/ProjectsSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import ContactModal from "./components/ContactModal";
import CustomCursor from "./components/CustomCursor";
import Footer from "./components/Footer";
import { cn, textStyles } from "./lib/typography";

export default function Home() {
  const [showMobileHeader, setShowMobileHeader] = useState(true);
  const [navElevated, setNavElevated] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSideContactTab, setShowSideContactTab] = useState(true);
  const mobileMenuOpenRef = useRef(false);
  mobileMenuOpenRef.current = mobileMenuOpen;
  const lastScrollYRef = useRef(0);
  const trustedBySectionRef = useRef<HTMLElement>(null);
  const mobileMenuSheetRef = useRef<HTMLDivElement>(null);
  const mobileMenuBodyScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateFromScroll = () => {
      const currentY = window.scrollY;
      const lastY = lastScrollYRef.current;
      setNavElevated(currentY > 16);

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

      const hero = document.getElementById("home");
      if (hero) {
        const { bottom } = hero.getBoundingClientRect();
        setShowSideContactTab(bottom > 0);
      }
    };

    let scrollRaf = 0;
    const runScrollUpdate = () => {
      scrollRaf = 0;
      updateFromScroll();
    };
    const scheduleScrollUpdate = () => {
      if (scrollRaf) return;
      scrollRaf = requestAnimationFrame(runScrollUpdate);
    };
    const onScroll = () => {
      if (mobileMenuOpenRef.current) {
        scheduleScrollUpdate();
      } else {
        updateFromScroll();
      }
    };

    updateFromScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateFromScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateFromScroll);
      if (scrollRaf) cancelAnimationFrame(scrollRaf);
    };
  }, []);

  useEffect(() => {
    const closeMobileMenuOnDesktop = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", closeMobileMenuOnDesktop);
    return () => window.removeEventListener("resize", closeMobileMenuOnDesktop);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileMenuOpen]);

  /** Wheel / touch over mobile menu panel scrolls the page unless the menu body can scroll internally. */
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const sheet = mobileMenuSheetRef.current;
    const bodyScroll = mobileMenuBodyScrollRef.current;
    if (!sheet) return;

    const captureOpts = { passive: false, capture: true } as const;
    const capturePassive = { passive: true, capture: true } as const;

    const innerAllowsScroll = (dy: number) => {
      if (!bodyScroll) return false;
      const { scrollTop, scrollHeight, clientHeight } = bodyScroll;
      const eps = 2;
      const canScrollUp = scrollTop > eps;
      const canScrollDown = scrollTop + clientHeight < scrollHeight - eps;
      return (dy < 0 && canScrollUp) || (dy > 0 && canScrollDown);
    };

    const normalizeWheelDeltaY = (e: WheelEvent) => {
      let dy = e.deltaY;
      switch (e.deltaMode) {
        case WheelEvent.DOM_DELTA_LINE:
          dy *= 16;
          break;
        case WheelEvent.DOM_DELTA_PAGE:
          dy *= window.innerHeight;
          break;
        default:
          break;
      }
      return dy;
    };

    let queuedDy = 0;
    let flushRaf = 0;
    const flushQueuedScroll = () => {
      flushRaf = 0;
      if (queuedDy === 0) return;
      const dy = queuedDy;
      queuedDy = 0;
      const root = document.scrollingElement ?? document.documentElement;
      root.scrollBy({ top: dy, left: 0, behavior: "auto" });
    };
    const queuePageScroll = (dy: number) => {
      if (dy === 0) return;
      queuedDy += dy;
      if (!flushRaf) {
        flushRaf = requestAnimationFrame(flushQueuedScroll);
      }
    };

    const onWheel = (e: WheelEvent) => {
      const dy = normalizeWheelDeltaY(e);
      if (bodyScroll?.contains(e.target as Node) && innerAllowsScroll(dy)) {
        return;
      }
      e.preventDefault();
      queuePageScroll(dy);
    };

    let lastTouchY: number | null = null;
    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) lastTouchY = e.touches[0].clientY;
    };
    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length !== 1 || lastTouchY === null) return;
      const y = e.touches[0].clientY;
      const dy = lastTouchY - y;
      lastTouchY = y;
      if (bodyScroll?.contains(e.target as Node) && innerAllowsScroll(dy)) {
        return;
      }
      e.preventDefault();
      queuePageScroll(dy);
    };
    const onTouchEnd = () => {
      lastTouchY = null;
    };

    sheet.addEventListener("wheel", onWheel, captureOpts);
    sheet.addEventListener("touchstart", onTouchStart, capturePassive);
    sheet.addEventListener("touchmove", onTouchMove, captureOpts);
    sheet.addEventListener("touchend", onTouchEnd, capturePassive);
    sheet.addEventListener("touchcancel", onTouchEnd, capturePassive);
    return () => {
      sheet.removeEventListener("wheel", onWheel, captureOpts);
      sheet.removeEventListener("touchstart", onTouchStart, capturePassive);
      sheet.removeEventListener("touchmove", onTouchMove, captureOpts);
      sheet.removeEventListener("touchend", onTouchEnd, capturePassive);
      sheet.removeEventListener("touchcancel", onTouchEnd, capturePassive);
      if (flushRaf) cancelAnimationFrame(flushRaf);
      if (queuedDy !== 0) {
        const root = document.scrollingElement ?? document.documentElement;
        root.scrollBy({ top: queuedDy, left: 0, behavior: "auto" });
        queuedDy = 0;
      }
    };
  }, [mobileMenuOpen]);

  const services = [
    {
      title: "Web Development",
      description: "Custom web applications and websites built with modern technologies. Responsive, fast, and scalable solutions for your business.",
      icon: "🌐",
      features: ["React, Next.js, Vue.js", "Full-stack Development", "E-commerce Solutions", "Progressive Web Apps"]
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android. Delivering seamless user experiences across all devices.",
      icon: "📱",
      features: ["iOS & Android", "React Native, Flutter", "Native Development", "App Store Optimization"]
    },
    {
      title: "SaaS Projects",
      description: "End-to-end Software as a Service solutions. Scalable cloud-based platforms that grow with your business.",
      icon: "☁️",
      features: ["Cloud Architecture", "Multi-tenancy", "Subscription Management", "API Development"]
    },
    {
      title: "IoT Projects",
      description: "Internet of Things solutions connecting devices and systems. Smart solutions for automation and data collection.",
      icon: "🔌",
      features: ["Device Integration", "Sensor Networks", "Real-time Monitoring", "Edge Computing"]
    },
    {
      title: "AI Chatbots",
      description: "Intelligent conversational AI chatbots that enhance customer service and automate interactions 24/7.",
      icon: "🤖",
      features: ["Natural Language Processing", "Multi-platform Integration", "Custom Training", "Analytics & Insights"]
    },
    {
      title: "Cloud Migration & DevOps",
      description: "Seamless cloud migration and DevOps implementation. Accelerate deployment with CI/CD pipelines and infrastructure as code.",
      icon: "⚡",
      features: ["AWS, Azure, GCP Migration", "CI/CD Pipelines", "Containerization (Docker/K8s)", "Infrastructure as Code"]
    },
    {
      title: "AI Agents",
      description: "Autonomous AI agents that can perform complex tasks, make decisions, and interact with systems intelligently.",
      icon: "🚀",
      features: ["Autonomous Agents", "Task Automation", "Decision Making", "System Integration"]
    }
  ];

  const technologyLogos = [
    { name: "React", path: "/React.png" },
    { name: "Next.js", path: "/Next.js.png" },
    { name: "TypeScript", path: "/TypeScript.png" },
    { name: "JavaScript", path: "/JavaScript.png" },
    { name: "Node.js", path: "/Node.js.png" },
    { name: "Express.js", path: "/Express.png" },
    { name: "Java", path: "/Java.png" },
    { name: "MongoDB", path: "/MongoDB.png" },
    { name: "MySQL", path: "/MySQL.png" },
    { name: "PostgreSQL", path: "/PostgresSQL.png" },
    { name: "Nest.js", path: "/Nest.js.png" },
    { name: "Material UI", path: "/Material UI.png" },
    { name: "Tailwind CSS", path: "/Tailwind CSS.png" },
    { name: "HTML5", path: "/HTML5.png" },
    { name: "CSS3", path: "/CSS3.png" },
    { name: "AWS", path: "/AWS.png" },
    { name: "Vercel", path: "/Vercel.png" },
    { name: "Heroku", path: "/Heroku.png" },
    { name: "Firebase", path: "/Firebase.png" },
    { name: "Git", path: "/Git.png" },
    { name: "GitHub", path: "/GitHub.png" },
    { name: "GraphQL", path: "/GraphQL.png" },
    { name: "Jira", path: "/Jira.png" },
    { name: "Postman", path: "/Postman.png" },
    { name: "VS Code", path: "/Visual Studio Code (VS Code).png" },
    { name: "Vite", path: "/Vite.js.png" },
    { name: "NPM", path: "/NPM.png" },
  ];

  const trustedEnterprises = [
    "Microsoft",
    "Salesforce",
    "AWS",
    "Google Cloud",
    "IBM",
    "Oracle",
  ];

  const navLinkShellClass = textStyles.navLink;
  /** Teal underline on hover — hero nav reference (no pill, text stays white) */
  const navLinkHoverUnderline =
    "relative inline-block after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:z-[1] after:h-px after:origin-left after:scale-x-0 after:bg-[#2dd4bf] after:transition-transform after:duration-200 after:ease-out hover:after:scale-x-100";
  /** Translucent #20394C + soft glow + top highlight behind link on hover */
  const navLinkHoverLamp =
    "rounded-md px-2.5 py-1 transition-[background-color,box-shadow,color] duration-200 ease-out hover:bg-[#20394C]/65 hover:text-white hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_0_14px_2px_rgba(32,57,76,0.45),0_0_28px_5px_rgba(45,212,191,0.18)]";
  /** Mobile menu sheet — matches reference: dark bar + off-white body + pill CTA */
  const mobileMenuLinkClass = cn(
    textStyles.mobileMenuLink,
    "py-5 pl-5 transition-opacity duration-150 hover:opacity-80 active:opacity-70 sm:py-6 sm:pl-6"
  );

  return (
    <div className="min-h-screen bg-white">
      <CustomCursor navElevated={navElevated} />
      <ContactModal
        open={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-[transform,background-color,backdrop-filter,box-shadow,border-color] duration-300 ease-out ${
          showMobileHeader ? "translate-y-0" : "-translate-y-full md:translate-y-0"
        } ${
          navElevated
            ? "bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-[0_2px_12px_rgba(15,23,42,0.04)]"
            : "bg-transparent border-b border-transparent shadow-none"
        }`}
        aria-label="Main"
      >
        <div className="mx-auto max-w-[1280px] px-5 sm:px-6">
          <div className="flex h-20 items-center justify-between">
            <div className="flex-shrink-0">
              <Link
                href="#home"
                className={cn(
                  textStyles.logo,
                  "drop-shadow-sm",
                  navElevated
                    ? "bg-gradient-to-r from-[#1E3D93] via-[#2762EB] to-[#008FBD] bg-clip-text text-transparent"
                    : "text-white"
                )}
              >
                INSIYA
              </Link>
            </div>
            <div className="hidden md:block">
              <div
                className={cn(
                  "ml-10 flex items-center gap-9 font-sans",
                  navLinkShellClass
                )}
              >
                <Link
                  href="#services"
                  className={`${navLinkHoverUnderline} ${navLinkHoverLamp} ${
                    navElevated ? "text-slate-900" : "text-white"
                  }`}
                >
                  Services
                </Link>
                <Link
                  href="#technologies"
                  className={`${navLinkHoverUnderline} ${navLinkHoverLamp} ${
                    navElevated ? "text-slate-900" : "text-white"
                  }`}
                >
                  Industries
                </Link>
                <Link
                  href="#about"
                  className={`${navLinkHoverUnderline} ${navLinkHoverLamp} ${
                    navElevated ? "text-slate-900" : "text-white"
                  }`}
                >
                  About
                </Link>
                <Link
                  href="#contact"
                  className={`${navLinkHoverUnderline} ${navLinkHoverLamp} ${
                    navElevated ? "text-slate-900" : "text-white"
                  }`}
                >
                  Contact
                </Link>
              </div>
            </div>
            <div
              className={cn(
                "hidden items-center gap-6 font-sans md:flex",
                navLinkShellClass
              )}
            >
              <Link
                href="#contact"
                className={`${navLinkHoverUnderline} ${navLinkHoverLamp} ${
                  navElevated ? "text-slate-900" : "text-white"
                }`}
              >
                Log in
              </Link>
              <Link
                href="#contact"
                className={cn(
                  textStyles.btn,
                  "group inline-flex items-center gap-1.5 rounded-[10px] bg-gradient-to-r from-sky-400 via-cyan-400 to-teal-400 px-6 py-2.5 text-text-primary shadow-[0_6px_20px_rgba(34,211,238,0.45)] transition-[transform,box-shadow] duration-200 ease-out hover:scale-[1.03] hover:shadow-[0_8px_26px_rgba(45,212,191,0.55)]"
                )}
              >
                Get Started
                <span aria-hidden className="inline-block translate-x-0 transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </Link>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                className={navElevated ? "text-slate-700" : "text-white"}
                type="button"
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-navigation-menu"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div
          id="mobile-navigation-menu"
          className="pointer-events-none fixed inset-0 z-[100] flex flex-col md:hidden"
          role="dialog"
          aria-modal="true"
          aria-labelledby="mobile-menu-brand"
        >
          <div
            ref={mobileMenuSheetRef}
            className="pointer-events-auto relative z-[1] mx-auto flex w-full max-h-[min(88vh,760px)] shrink-0 flex-col overflow-hidden rounded-none bg-[#f8f9fa] shadow-[0_24px_48px_rgba(15,18,30,0.35)]"
          >
            <div className="flex min-h-[76px] shrink-0 items-center justify-between bg-[#1a1c2c] px-5 py-3 sm:min-h-[84px] sm:px-6 sm:py-4">
              <span
                id="mobile-menu-brand"
                className={cn(textStyles.logo, "text-[21px] leading-none sm:text-[22px]")}
              >
                INSIYA
              </span>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="flex h-11 w-11 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10"
                aria-label="Close menu"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div
              ref={mobileMenuBodyScrollRef}
              className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-7 pb-12 pt-5 sm:px-10"
            >
              <nav aria-label="Mobile" className="max-w-lg font-sans">
                <Link
                  href="#services"
                  onClick={() => setMobileMenuOpen(false)}
                  className={mobileMenuLinkClass}
                >
                  Services
                </Link>
                <Link
                  href="#technologies"
                  onClick={() => setMobileMenuOpen(false)}
                  className={mobileMenuLinkClass}
                >
                  Industries
                </Link>
                <Link
                  href="#about"
                  onClick={() => setMobileMenuOpen(false)}
                  className={mobileMenuLinkClass}
                >
                  About
                </Link>
                <Link
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className={mobileMenuLinkClass}
                >
                  Contact
                </Link>
              </nav>
              <div className="mt-10 flex justify-center px-1">
                <Link
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    textStyles.btn,
                    "inline-flex min-h-[48px] w-full max-w-[280px] items-center justify-center rounded-xl bg-gradient-to-r from-[#00d2ff] to-[#00c9a7] px-8 text-text-primary shadow-[0_10px_28px_rgba(0,180,200,0.38)] transition-[transform,box-shadow] duration-200 ease-out hover:shadow-[0_12px_32px_rgba(0,201,167,0.42)] active:scale-[0.98]"
                  )}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <HeroSection
        onOpenContact={() => setContactModalOpen(true)}
        sideContactTabVisible={showSideContactTab}
      />

      {/* Portfolio — from app/data/projects.ts */}
      <PortfolioProjectsSection />

      {/* Trusted By Section */}
      <section ref={trustedBySectionRef} className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
          <div className="mx-auto max-w-5xl border-y border-slate-100/90 py-8 md:py-10">
            <p className={textStyles.trustedLabel}>
              Trusted by Leading Enterprises
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 md:gap-x-12">
              {trustedEnterprises.map((brand) => (
                <span key={brand} className={textStyles.trustedBrand}>
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights Section */}
      <FeatureHighlightsSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Technologies Section */}
      <TechnologiesSection logos={technologyLogos} />

      {/* Our Projects Section */}
      <ProjectsSection />

      {/* About Section */}
      <AboutSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
