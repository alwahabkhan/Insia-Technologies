"use client";

import { motion } from "motion/react";
import { cn, textStyles } from "@/app/lib/typography";
import MorphSection from "./MorphSection";

const easeSmooth = [0.25, 0.46, 0.45, 0.94] as const;

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeSmooth },
  },
};

const impactCards = [
  {
    value: "90%",
    title: "Faster Insights",
    description: "Reduce time from data to decision with automated analytics",
  },
  {
    value: "30-\n60%",
    title: "Lower Costs",
    description: "Consolidate tools and eliminate manual reporting overhead",
  },
  {
    value: "90%",
    title: "Faster Deployment",
    description: "Go live in days, not months, with no-code configuration",
  },
  {
    value: "10x",
    title: "ROI in Year One",
    description: "Proven return on investment across industries",
  },
] as const;

export default function ProjectsSection() {
  return (
    <MorphSection
      id="impact"
      variant="muted"
      className="bg-[#0b1425] py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: easeSmooth }}
        >
          <div className="mb-12">
            <h2 className={textStyles.h2Dark}>Measurable Business Impact</h2>
            <p className={cn(textStyles.bodyOnDark, "mt-4 max-w-2xl")}>
              Real results from organizations that transformed their data
              operations
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {impactCards.map((card, index) => (
              <motion.article
                key={card.title}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: index * 0.08, ease: easeSmooth }}
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden rounded-2xl border border-slate-700/50 bg-gradient-to-b from-slate-800/60 to-slate-900/70 px-6 py-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-sm transition-all duration-300 hover:border-slate-500/70 hover:shadow-[0_14px_34px_rgba(3,8,20,0.45)]"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-400/0 to-cyan-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <p
                  className={cn(
                    textStyles.statValue,
                    "relative whitespace-pre-line transition-colors duration-300 group-hover:text-cyan-300"
                  )}
                >
                  {card.value}
                </p>
                <h3 className={cn(textStyles.statLabel, "relative mt-5")}>
                  {card.title}
                </h3>
                <p className={cn(textStyles.statDesc, "relative mt-3")}>
                  {card.description}
                </p>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </MorphSection>
  );
}
