"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import MorphSection from "./MorphSection";
import { cn, textStyles } from "@/app/lib/typography";

/** Max shift (px) when cursor is at hero edge; image follows pointer direction */
const HERO_PARALLAX_RANGE = 26;
/** Lower = slower, heavier follow toward the cursor */
const HERO_PARALLAX_LERP = 0.035;
/** Copy layer moves a fraction of the bg offset, with a slower lerp */
const HERO_CONTENT_PARALLAX_SCALE = 0.34;
const HERO_CONTENT_PARALLAX_LERP = 0.022;

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
  /** When false, the fixed “Get in touch” tab is hidden (user scrolled past the hero). */
  sideContactTabVisible?: boolean;
};

/** Hero copy aligned with reference layout: headline, body, two CTAs */
const HERO_EYEBROW = "";
const HERO_TITLE_WHITE = "Turn Your Data Into";
const HERO_TITLE_ACCENT = "Decisions with AI";
const HERO_DESCRIPTION =
  "INSIYA is a no-code AI-powered data platform that connects, cleans, transforms, analyzes, and predicts your business data—helping you make smarter, faster decisions without technical complexity.";
const HERO_PRIMARY_CTA = "Get a Demo";
const HERO_SECONDARY_CTA = "Explore Platform";

export default function HeroSection({
  onOpenContact,
  sideContactTabVisible = true,
}: HeroSectionProps) {
  const heroParallaxRef = useRef<HTMLDivElement>(null);
  const heroContentParallaxRef = useRef<HTMLElement>(null);
  const parallaxTargetRef = useRef({ x: 0, y: 0 });
  const parallaxCurrentRef = useRef({ x: 0, y: 0 });
  const contentParallaxCurrentRef = useRef({ x: 0, y: 0 });
  const parallaxRafRef = useRef(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const hero = document.getElementById("home");
      if (!hero) return;
      const r = hero.getBoundingClientRect();
      const inside =
        e.clientX >= r.left &&
        e.clientX <= r.right &&
        e.clientY >= r.top &&
        e.clientY <= r.bottom;
      if (!inside) {
        parallaxTargetRef.current = { x: 0, y: 0 };
        return;
      }
      const nx = (e.clientX - r.left) / r.width - 0.5;
      const ny = (e.clientY - r.top) / r.height - 0.5;
      parallaxTargetRef.current = {
        x: nx * 2 * HERO_PARALLAX_RANGE,
        y: ny * 2 * HERO_PARALLAX_RANGE,
      };
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useEffect(() => {
    let cancelled = false;
    const tick = () => {
      if (cancelled) return;
      const t = parallaxTargetRef.current;

      const bgEl = heroParallaxRef.current;
      if (bgEl) {
        const c = parallaxCurrentRef.current;
        c.x += (t.x - c.x) * HERO_PARALLAX_LERP;
        c.y += (t.y - c.y) * HERO_PARALLAX_LERP;
        bgEl.style.transform = `translate3d(${c.x}px,${c.y}px,0)`;
      }

      const contentEl = heroContentParallaxRef.current;
      if (contentEl) {
        const cc = contentParallaxCurrentRef.current;
        const tx = t.x * HERO_CONTENT_PARALLAX_SCALE;
        const ty = t.y * HERO_CONTENT_PARALLAX_SCALE;
        cc.x += (tx - cc.x) * HERO_CONTENT_PARALLAX_LERP;
        cc.y += (ty - cc.y) * HERO_CONTENT_PARALLAX_LERP;
        contentEl.style.transform = `translate3d(${cc.x}px,${cc.y}px,0)`;
      }

      parallaxRafRef.current = requestAnimationFrame(tick);
    };
    parallaxRafRef.current = requestAnimationFrame(tick);
    return () => {
      cancelled = true;
      cancelAnimationFrame(parallaxRafRef.current);
    };
  }, []);

  return (
    <>
      <MorphSection
        id="home"
        variant="plain"
        className="min-h-screen bg-slate-950"
      >
        <div
          className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
          aria-hidden
        >
          <div
            ref={heroParallaxRef}
            className="absolute -inset-[10%] will-change-transform"
            style={{ transform: "translate3d(0,0,0)" }}
          >
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
        </div>

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-5rem)] w-full min-w-0 max-w-[1280px] flex-col px-4 pt-20 sm:z-20 sm:px-6 sm:pt-24 lg:px-8">
          <motion.div
            className="flex w-full min-w-0 flex-1 flex-col justify-center pb-32 sm:pb-36 md:pb-40"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <header
              ref={heroContentParallaxRef}
              className="pointer-events-auto relative z-10 w-full max-w-full will-change-transform sm:z-20 sm:max-w-3xl"
              style={{ transform: "translate3d(0,0,0)" }}
            >
              {HERO_EYEBROW && (
                <motion.p
                  className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/90"
                  variants={item}
                >
                  {HERO_EYEBROW}
                </motion.p>
              )}
              <motion.h1
                className={cn(
                  textStyles.display,
                  "ml-0 mt-16 w-full max-w-none pl-0 pr-0 pb-2 pt-4 text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.35)] sm:mt-12 sm:pr-2 sm:pb-3 sm:pt-8 md:mt-16 md:pr-4 md:pt-12"
                )}
                variants={item}
              >
                <span className="block">{HERO_TITLE_WHITE}</span>
                <span className="mt-1.5 block bg-gradient-to-r from-[#00D4F3] via-[#4BE8F6] to-[#00D5BF] bg-clip-text text-transparent sm:mt-1">
                  {HERO_TITLE_ACCENT}
                </span>
              </motion.h1>
              <motion.p
                className={cn(
                  textStyles.bodyOnDark,
                  "mt-4 w-full max-w-none sm:mt-2 sm:max-w-2xl"
                )}
                variants={item}
              >
                {HERO_DESCRIPTION}
              </motion.p>
              <motion.div
                className="mt-8 flex w-full min-w-0 max-w-full flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-5"
                variants={container}
              >
                <motion.div className="w-full sm:w-auto" variants={itemButtons}>
                  <Link
                    href="#contact"
                    className={cn(
                      textStyles.btn,
                      "inline-flex min-h-[48px] w-full origin-center cursor-default items-center justify-center rounded-[10px] bg-gradient-to-r from-teal-500 via-cyan-500 to-teal-400 px-6 py-3.5 text-white shadow-[0_8px_32px_rgba(45,212,191,0.35)] transition-[transform,box-shadow] duration-200 ease-out hover:scale-[1.04] hover:shadow-[0_12px_40px_rgba(45,212,191,0.5)] sm:min-h-[52px] sm:w-fit sm:px-10 active:scale-[0.99]"
                    )}
                  >
                    {HERO_PRIMARY_CTA}
                  </Link>
                </motion.div>
                <motion.div className="w-full sm:w-auto" variants={itemButtons}>
                  <Link
                    href="#services"
                    className={cn(
                      textStyles.btn,
                      "group inline-flex min-h-[48px] w-full origin-center cursor-default items-center justify-center gap-2 rounded-[10px] border border-white/60 bg-transparent px-6 py-3.5 text-white backdrop-blur-[2px] transition-[transform,background-color] duration-200 ease-out hover:scale-[1.04] hover:bg-white/10 sm:min-h-[52px] sm:w-fit sm:border-white/45 sm:bg-white/5 sm:px-10 sm:hover:bg-white/15 active:scale-[0.99]"
                    )}
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
            className="pointer-events-none absolute bottom-4 left-1/2 hidden -translate-x-1/2 flex-col items-center justify-end gap-2 sm:bottom-5 md:bottom-7 md:flex"
            aria-hidden
          >
            <span className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/75 sm:text-[11px]">
              Scroll to explore
            </span>
            <div className="flex flex-col items-center justify-end gap-1.5">
              <motion.div
                className="relative flex h-10 w-6 items-start justify-center rounded-full border-2 border-solid pt-2"
                animate={{
                  borderColor: [
                    "rgba(255, 255, 255, 0.45)",
                    "rgb(34, 211, 238)",
                    "rgba(255, 255, 255, 0.45)",
                  ],
                }}
                transition={{
                  duration: 1.6,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: easeSmooth,
                }}
              >
                <motion.span
                  className="block h-1.5 w-1.5 rounded-full"
                  animate={{
                    y: [0, 6, 0],
                    backgroundColor: [
                      "rgb(34, 211, 238)",
                      "rgba(255, 255, 255, 0.95)",
                      "rgb(34, 211, 238)",
                    ],
                  }}
                  transition={{
                    duration: 1.6,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: easeSmooth,
                  }}
                />
              </motion.div>
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
        tabIndex={sideContactTabVisible ? 0 : -1}
        className={`fixed right-0 top-1/2 z-[110] flex -translate-y-1/2 flex-col items-center gap-2.5 rounded-l-2xl bg-gradient-to-b from-[#00d2ff] to-[#00c9a7] px-3 py-5 text-white shadow-[0_8px_28px_rgba(0,0,0,0.22)] transition-[transform,opacity] duration-300 ease-out will-change-transform sm:gap-3 sm:px-4 sm:py-6 md:bg-gradient-to-r ${
          sideContactTabVisible
            ? "translate-x-0 opacity-100"
            : "pointer-events-none translate-x-full opacity-0"
        }`}
      >
        <span
          className={cn(
            textStyles.caption,
            "select-none text-white [writing-mode:vertical-lr] sm:text-base sm:leading-6"
          )}
        >
          GET IN TOUCH
        </span>
        <motion.span
          aria-hidden
          className="inline-flex shrink-0 opacity-95"
          animate={{ y: [-3, 3, -3] }}
          transition={{
            duration: 1.35,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <svg
            className="h-5 w-5 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.75}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </motion.span>
      </button>
    </>
  );
}
