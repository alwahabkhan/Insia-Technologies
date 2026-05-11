"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import MorphSection from "./MorphSection";

const easeSmooth = [0.25, 0.46, 0.45, 0.94] as const;

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeSmooth,
    },
  },
};

const itemButtons = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeSmooth,
    },
  },
};

type HeroSectionProps = {
  onOpenContact?: () => void;
};

/** Hero copy aligned with reference layout: headline, body, two CTAs */
const HERO_EYEBROW = "";
const HERO_TITLE_WHITE = "Turn Your Data Into";
const HERO_TITLE_ACCENT = "Decisions with AI";
const HERO_DESCRIPTION =
  "INSIA is a no-code AI-powered data platform that connects, cleans, transforms, analyzes, and predicts your business data-helping you make smarter, faster decisions without technical complexity.";
const HERO_PRIMARY_CTA = "Get a Demo";
const HERO_SECONDARY_CTA = "Explore Platform";

export default function HeroSection({ onOpenContact }: HeroSectionProps) {
  return (
    <>
      <MorphSection
        id="home"
        variant="plain"
        className="min-h-screen bg-slate-950"
      >
        <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
          <Image
            src="/images/hero.png"
            alt=""
            fill
            loading="eager"
            sizes="100vw"
            className="object-cover object-center"
          />
          <div
            className="absolute inset-0 bg-slate-950/50"
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-blue-950/45 via-slate-950/50 to-slate-950/85"
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-gradient-to-tr from-cyan-950/20 via-transparent to-blue-950/30"
            aria-hidden
          />
          <div
            className="absolute inset-0 shadow-[inset_0_0_120px_rgba(0,0,0,0.5)]"
            aria-hidden
          />
        </div>

        <div className="relative z-20 mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-[1200px] flex-col px-4 pt-24 sm:px-6 lg:px-8">
          <motion.div
            className="flex flex-1 flex-col justify-center pb-36 md:pb-40"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <header className="pointer-events-auto relative z-20 max-w-3xl">
              {HERO_EYEBROW && (
                <motion.p
                  className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/90"
                  variants={item}
                >
                  {HERO_EYEBROW}
                </motion.p>
              )}
              <motion.h1
                className="mt-10 text-4xl font-bold leading-[1.12] tracking-tight text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.35)] sm:mt-12 md:mt-14 sm:text-5xl md:text-6xl md:leading-[1.08]"
                variants={item}
              >
                <span className="block">{HERO_TITLE_WHITE}</span>
                <span className="mt-1 block bg-gradient-to-r from-cyan-300 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                  {HERO_TITLE_ACCENT}
                </span>
              </motion.h1>
              <motion.p
                className="mt-8 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg md:text-xl"
                variants={item}
              >
                {HERO_DESCRIPTION}
              </motion.p>
              <motion.div
                className="mt-11 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-5"
                variants={container}
              >
                <motion.div variants={itemButtons}>
                  <Link
                    href="#contact"
                    className="inline-flex min-h-[52px] min-w-[200px] items-center justify-center gap-2 rounded-full bg-gradient-to-r from-teal-500 via-cyan-500 to-teal-400 px-10 py-3.5 text-base font-semibold text-white shadow-[0_8px_32px_rgba(45,212,191,0.35)] transition-shadow hover:shadow-[0_12px_40px_rgba(45,212,191,0.5)]"
                  >
                    {HERO_PRIMARY_CTA}
                    <span aria-hidden>→</span>
                  </Link>
                </motion.div>
                <motion.div variants={itemButtons}>
                  <Link
                    href="#services"
                    className="group inline-flex min-h-[52px] min-w-[200px] items-center justify-center gap-2 rounded-full border-2 border-white/45 bg-white/5 px-10 py-3.5 text-base font-semibold text-white backdrop-blur-[2px] transition-colors hover:border-white/80 hover:bg-white/15"
                  >
                    {HERO_SECONDARY_CTA}
                    <span
                      aria-hidden
                      className="transition-transform group-hover:translate-x-0.5"
                    >
                      →
                    </span>
                  </Link>
                </motion.div>
              </motion.div>
            </header>
          </motion.div>

          <div
            className="pointer-events-none absolute bottom-5 left-1/2 flex -translate-x-1/2 flex-col items-center justify-end gap-2.5 md:bottom-7"
            aria-hidden
          >
            <span className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/75 sm:text-[11px]">
              Scroll to explore
            </span>
            <div className="flex flex-col items-center justify-end gap-1.5">
              <div className="relative flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/45 pt-2">
                <motion.span
                  className="block h-1.5 w-1.5 rounded-full bg-white/90"
                  animate={{ y: [0, 6, 0] }}
                  transition={{
                    duration: 1.6,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
              </div>
              <motion.svg
                className="mt-0.5 h-4 w-4 text-white/60"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden
                animate={{ y: [0, 6, 0] }}
                transition={{
                  duration: 1.6,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </motion.svg>
            </div>
          </div>
        </div>
      </MorphSection>

      <button
        type="button"
        onClick={() => onOpenContact?.()}
        className="fixed right-0 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-3 rounded-l-2xl bg-gradient-to-b from-teal-500 to-cyan-600 px-3 py-6 text-white shadow-lg shadow-teal-900/30 md:flex"
      >
        <span
          className="select-none text-[9px] font-bold uppercase tracking-[0.28em] lg:text-[10px]"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          Get in touch
        </span>
        <span aria-hidden className="text-sm opacity-90">
          ←
        </span>
      </button>
    </>
  );
}
