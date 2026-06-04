"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { cn, textStyles } from "@/app/lib/typography";
import MorphSection from "./MorphSection";

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

export default function FeatureHighlightsSection() {
  return (
    <MorphSection
      variant="soft"
      className="bg-white py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-[1200px]">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
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

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {highlights.map((item, index) => (
            <motion.article
              key={item.title}
              className="group overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-[0_10px_28px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(15,23,42,0.14)]"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <div className="relative h-56 w-full overflow-hidden md:h-64">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 md:p-7">
                <h3 className={textStyles.h3}>{item.title}</h3>
                <p className={cn(textStyles.bodySm, "mt-3")}>{item.description}</p>
                <button
                  type="button"
                  className={cn(
                    textStyles.link,
                    "mt-4 inline-flex items-center gap-2 transition-all group-hover:translate-x-0.5"
                  )}
                >
                  Learn more
                  <span aria-hidden>→</span>
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="mt-10 flex justify-center"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <button
            type="button"
            className={cn(
              textStyles.btn,
              "group inline-flex min-h-[64px] min-w-[320px] items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 font-bold text-white shadow-[0_12px_30px_rgba(2,132,199,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(2,132,199,0.45)]"
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
