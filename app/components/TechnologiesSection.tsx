"use client";

import { motion } from "motion/react";
import MorphSection from "./MorphSection";

export type TechnologyLogo = { name: string; path: string };

const easeSmooth = [0.25, 0.46, 0.45, 0.94] as const;

const awards = [
  "Gartner Peer Insights",
  "G2 Leader 2024",
  "SOC 2 Type II",
  "ISO 27001 Certified",
  "GDPR Compliant",
];

const partners = [
  "Microsoft Azure",
  "Amazon Web Services",
  "Google Cloud",
  "Snowflake",
];

export default function TechnologiesSection({
  logos: _logos,
}: {
  logos: TechnologyLogo[];
}) {
  void _logos;

  return (
    <MorphSection
      id="technologies"
      variant="soft"
      className="bg-white py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-[1200px]">
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: easeSmooth }}
        >
          <p className="inline-flex rounded-full bg-cyan-100 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan-700 sm:text-[11px]">
            Recognition
          </p>
        </motion.div>

        <motion.h2
          className="text-3xl font-bold text-slate-900 sm:text-4xl md:text-5xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: easeSmooth }}
        >
          Awards & Certifications
        </motion.h2>

        <motion.div
          className="mt-7 flex flex-wrap gap-3"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: easeSmooth, delay: 0.05 }}
        >
          {awards.map((award) => (
            <span
              key={award}
              className="inline-flex items-center rounded-2xl border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-700 shadow-[0_3px_10px_rgba(15,23,42,0.05)] transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan-200 hover:text-cyan-700 hover:shadow-[0_8px_18px_rgba(6,182,212,0.14)]"
            >
              {award}
            </span>
          ))}
        </motion.div>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: easeSmooth }}
        >
          <h3 className="text-3xl font-bold text-slate-900 sm:text-4xl md:text-5xl">
            Technology Partners
          </h3>
          <div className="mt-10 flex flex-wrap gap-x-12 gap-y-3">
            {partners.map((partner) => (
              <span
                key={partner}
                className="text-sm font-semibold tracking-tight text-slate-400 md:text-xl"
              >
                {partner}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </MorphSection>
  );
}
