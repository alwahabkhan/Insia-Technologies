"use client";

import Image from "next/image";
import { motion } from "motion/react";
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
          <p className="mx-auto inline-flex rounded-full bg-cyan-100 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan-700 sm:text-[11px]">
            Platform Capabilities
          </p>
          <h2 className="mt-5 text-2xl font-bold text-slate-900 sm:text-3xl md:text-5xl">
            Transform Your Business with{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              AI-Powered Data
            </span>
          </h2>
          <p className="mt-5 text-base text-slate-600 md:text-xl">
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
                <h3 className="text-xl font-semibold text-slate-900 sm:text-2xl md:text-[2rem]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-slate-600 sm:text-base">{item.description}</p>
                <button
                  type="button"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cyan-600 transition-all hover:text-cyan-700 group-hover:translate-x-0.5"
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
            className="group inline-flex min-h-[64px] min-w-[320px] items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 text-base font-bold leading-6 text-white shadow-[0_12px_30px_rgba(2,132,199,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(2,132,199,0.45)]"
          >
            Explore All Features
            <span
              aria-hidden
              className="text-2xl leading-none transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </button>
        </motion.div>
      </div>
    </MorphSection>
  );
}
