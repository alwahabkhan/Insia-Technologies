"use client";

import { motion } from "motion/react";
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
      id="projects"
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
            <h2 className='text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-[44px] md:leading-[53px] [font-family:"General_Sans",-apple-system,BlinkMacSystemFont,sans-serif]'>
              Measurable Business Impact
            </h2>
            <p className='mt-4 max-w-2xl text-base font-normal leading-7 text-[oklab(0.999994_0.0000455677_0.0000200868_/_0.7)] sm:text-[17px] sm:leading-8 md:text-[18px] md:leading-[31px] [font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif]'>
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
                <p className="relative whitespace-pre-line text-5xl font-bold leading-none tracking-tight text-[oklch(0.789_0.154_211.53)] sm:text-[56px] md:text-[60px] [font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif] transition-colors duration-300 group-hover:text-cyan-300">
                  {card.value}
                </p>
                <h3 className="relative mt-5 text-base font-semibold leading-7 text-white sm:text-[17px] sm:leading-[27px] [font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif]">
                  {card.title}
                </h3>
                <p className="relative mt-3 text-sm font-normal leading-6 text-[oklab(0.999994_0.0000455677_0.0000200868_/_0.6)] sm:text-[15px] [font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif]">
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
