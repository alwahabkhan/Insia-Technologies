"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useHorizontalCarousel } from "@/app/hooks/useHorizontalCarousel";
import { cn, textStyles } from "@/app/lib/typography";
import MorphSection from "./MorphSection";

const easeSmooth = [0.25, 0.46, 0.45, 0.94] as const;

const fadeUpInView = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.12, margin: "0px 0px -48px 0px" },
  transition: { duration: 0.55, ease: easeSmooth },
} as const;

const highlights = [
  {
    title: "Data Integration",
    description:
      "Connect multiple data sources seamlessly-databases, APIs, cloud apps, and files-in one unified platform.",
    image: "/images/images_01.png",
  },
  {
    title: "Data Transformation",
    description:
      "Clean, standardize, and automate data workflows without code. Transform messy data into analytics-ready insights.",
    image: "/images/images_02.jpg",
  },
  {
    title: "Predictive Intelligence",
    description:
      "Use AI-driven forecasting to uncover trends, detect anomalies, and make confident business decisions faster.",
    image: "/images/hero.png",
  },
  {
    title: "Enterprise Automation",
    description:
      "Automate repetitive processes, alerts, and reporting pipelines to keep teams aligned and execution consistent.",
    image: "/images/images_11.jpg",
  },
];

function HighlightCard({
  item,
  compact = false,
}: {
  item: (typeof highlights)[number];
  compact?: boolean;
}) {
  return (
    <article
      className={cn(
        "group box-border flex w-full max-w-full min-w-0 flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-[0_10px_28px_rgba(15,23,42,0.08)] transition-all duration-300 hover:shadow-[0_16px_40px_rgba(15,23,42,0.14)]",
        compact ? "max-md:hover:translate-y-0" : "hover:-translate-y-1"
      )}
    >
      <div
        className={cn(
          "relative w-full min-w-0 overflow-hidden",
          compact ? "h-48" : "h-56 md:h-64"
        )}
      >
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className={cn("min-w-0 p-6 md:p-7", compact && "p-5")}>
        <h3 className={cn(textStyles.h3, "break-words", compact && "text-lg")}>
          {item.title}
        </h3>
        <p className={cn(textStyles.bodySm, "mt-3 break-words")}>
          {item.description}
        </p>
        <button
          type="button"
          className={cn(
            textStyles.link,
            "mt-4 inline-flex max-w-full items-center gap-2 transition-all group-hover:translate-x-0.5"
          )}
        >
          Learn more
          <span aria-hidden>→</span>
        </button>
      </div>
    </article>
  );
}

export default function FeatureHighlightsSection() {
  const { carouselRef, activeIndex, goToSlide } = useHorizontalCarousel({
    slideSelector: "[data-highlight-slide]",
    slideCount: highlights.length,
    activeMediaQuery: "(max-width: 767px)",
  });

  return (
    <MorphSection
      variant="soft"
      className="bg-white py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto min-w-0 max-w-[1200px]">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: easeSmooth }}
        >
          <p className={cn(textStyles.eyebrowPill, "mx-auto")}>
            Platform Capabilities
          </p>
          <h2 className={cn(textStyles.h2, "mt-5 text-center")}>
            Transform Your Business with{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              AI-Powered Data
            </span>
          </h2>
          <p className={cn(textStyles.body, "mt-5")}>
            From seamless integration to intelligent predictions, our platform
            handles every step of your data journey with enterprise-grade
            reliability.
          </p>
        </motion.div>

        {/* Mobile: swipeable carousel */}
        <div className="mt-12 w-full min-w-0 overflow-hidden md:hidden">
          <div
            ref={carouselRef}
            className="flex w-full max-w-full overflow-x-auto overscroll-x-contain scroll-smooth pb-2 snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            aria-roledescription="carousel"
            aria-label="Platform capabilities"
          >
            {highlights.map((item) => (
              <div
                key={item.title}
                data-highlight-slide
                className="box-border w-full max-w-full min-w-0 shrink-0 grow-0 basis-full snap-center"
              >
                <HighlightCard item={item} compact />
              </div>
            ))}
          </div>

          {highlights.length > 1 ? (
            <div
              className="mt-6 flex justify-center gap-2"
              role="tablist"
              aria-label="Capability slides"
            >
              {highlights.map((item, index) => (
                <button
                  key={item.title}
                  type="button"
                  role="tab"
                  aria-selected={activeIndex === index}
                  aria-label={`Go to ${item.title}`}
                  onClick={() => goToSlide(index)}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    activeIndex === index ? "w-8 bg-cyan-500" : "w-2 bg-slate-300"
                  )}
                />
              ))}
            </div>
          ) : null}
        </div>

        {/* Tablet/Desktop: grid */}
        <div className="mt-12 hidden gap-6 md:grid md:grid-cols-2">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              {...fadeUpInView}
              transition={{
                ...fadeUpInView.transition,
                delay: index * 0.08,
              }}
            >
              <HighlightCard item={item} />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-10 flex justify-center px-0"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, ease: easeSmooth }}
        >
          <button
            type="button"
            className={cn(
              textStyles.btn,
              "group inline-flex min-h-[64px] w-full max-w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 font-bold text-white shadow-[0_12px_30px_rgba(2,132,199,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(2,132,199,0.45)] sm:min-w-[320px] sm:w-auto"
            )}
          >
            Explore All Features
            <span
              aria-hidden
              className="inline-flex shrink-0 text-white transition-transform group-hover:translate-x-1"
            >
              <svg
                className="h-5 w-5 md:h-6 md:w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.25}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </span>
          </button>
        </motion.div>
      </div>
    </MorphSection>
  );
}
