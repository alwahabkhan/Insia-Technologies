 "use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import HeroSection from "./components/HeroSection";
import FeatureHighlightsSection from "./components/FeatureHighlightsSection";
import ServicesSection from "./components/ServicesSection";
import TechnologiesSection from "./components/TechnologiesSection";
import ProjectsSection from "./components/ProjectsSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import ContactModal from "./components/ContactModal";
import CustomCursor from "./components/CustomCursor";
import Footer from "./components/Footer";

export default function Home() {
  const [showMobileHeader, setShowMobileHeader] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [navElevated, setNavElevated] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    const updateFromScroll = () => {
      const currentY = window.scrollY;
      const lastY = lastScrollYRef.current;
      const doc = document.documentElement;
      const maxScroll = Math.max(doc.scrollHeight - window.innerHeight, 0);
      const progress =
        maxScroll > 0
          ? Math.min(1, Math.max(0, currentY / maxScroll))
          : 0;
      setScrollProgress(progress);
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
    };

    updateFromScroll();
    window.addEventListener("scroll", updateFromScroll, { passive: true });
    window.addEventListener("resize", updateFromScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", updateFromScroll);
      window.removeEventListener("resize", updateFromScroll);
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
        <div
          className="pointer-events-none absolute left-0 top-0 h-[3px] w-full overflow-hidden"
          aria-hidden
        >
          <div
            className="h-full bg-gradient-to-r from-blue-600 to-purple-600 transition-[width] duration-200 ease-out will-change-[width]"
            style={{ width: `${scrollProgress * 100}%` }}
          />
        </div>
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <div className="flex h-20 items-center justify-between">
            <div className="flex-shrink-0">
              <Link
                href="#home"
                className={`text-2xl font-black uppercase tracking-tight ${
                  navElevated
                    ? "bg-gradient-to-r from-[#1E3D93] via-[#2762EB] to-[#008FBD] bg-clip-text text-transparent"
                    : "text-white drop-shadow-sm"
                }`}
              >
                INSIGNIA
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center gap-9">
                <Link
                  href="#services"
                  className={`text-sm font-medium transition-colors ${
                    navElevated
                      ? "text-slate-900 hover:text-slate-700"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  Services
                </Link>
                <Link
                  href="#technologies"
                  className={`text-sm font-medium transition-colors ${
                    navElevated
                      ? "text-slate-900 hover:text-slate-700"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  Industries
                </Link>
                <Link
                  href="#about"
                  className={`text-sm font-medium transition-colors ${
                    navElevated
                      ? "text-slate-900 hover:text-slate-700"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  About
                </Link>
                <Link
                  href="#contact"
                  className={`text-sm font-medium transition-colors ${
                    navElevated
                      ? "text-slate-900 hover:text-slate-700"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  Contact
                </Link>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <Link
                href="#contact"
                className={`text-sm font-medium transition-colors ${
                  navElevated
                    ? "text-slate-900 hover:text-slate-700"
                    : "text-white/90 hover:text-white"
                }`}
              >
                Log in
              </Link>
              <Link
                href="#contact"
                className="group inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-sky-400 via-cyan-400 to-teal-400 px-6 py-2.5 text-sm font-medium text-slate-900 shadow-[0_6px_20px_rgba(34,211,238,0.45)] transition-shadow hover:shadow-[0_8px_26px_rgba(45,212,191,0.55)]"
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
          {mobileMenuOpen && (
            <div
              id="mobile-navigation-menu"
              className="md:hidden border-t border-slate-200/70 bg-white/95 px-2 pb-4 pt-2 backdrop-blur-md"
            >
              <div className="flex flex-col">
                <Link
                  href="#services"
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-900 transition-colors hover:bg-slate-100"
                >
                  Services
                </Link>
                <Link
                  href="#technologies"
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-900 transition-colors hover:bg-slate-100"
                >
                  Industries
                </Link>
                <Link
                  href="#about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-900 transition-colors hover:bg-slate-100"
                >
                  About
                </Link>
                <Link
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-900 transition-colors hover:bg-slate-100"
                >
                  Contact
                </Link>
                <div className="mt-2 px-3">
                  <Link
                    href="#contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="inline-flex min-h-[42px] w-full items-center justify-center rounded-full bg-gradient-to-r from-sky-400 via-cyan-400 to-teal-400 px-4 text-sm font-medium text-slate-900 shadow-[0_6px_20px_rgba(34,211,238,0.45)] transition-shadow hover:shadow-[0_8px_26px_rgba(45,212,191,0.55)]"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <HeroSection
        onOpenContact={() => setContactModalOpen(true)}
      />

      {/* Trusted By Section */}
      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
          <div className="mx-auto max-w-5xl border-y border-slate-100/90 py-8 md:py-10">
            <p className="text-center text-[9px] font-semibold uppercase tracking-[0.24em] text-slate-500 sm:text-[10px] md:text-[11px]">
              Trusted by Leading Enterprises
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 md:gap-x-12">
              {trustedEnterprises.map((brand) => (
                <span
                  key={brand}
                  className="text-lg font-semibold tracking-tight text-slate-400 sm:text-xl md:text-[1.65rem]"
                >
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
