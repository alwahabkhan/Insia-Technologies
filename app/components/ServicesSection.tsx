"use client";

import { motion } from "motion/react";
import MorphSection from "./MorphSection";

const easeSmooth = [0.25, 0.46, 0.45, 0.94] as const;

const headerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeSmooth,
    },
  },
};

const serviceColumns = [
  [
    "Sales Performance Analytics",
    "Operations Monitoring",
    "Financial Planning & Analysis",
    "Strategic Decision Intelligence",
  ],
  [
    "Supply Chain Optimization",
    "Procurement Intelligence",
    "Manufacturing Efficiency",
    "Asset Performance Management",
  ],
  [
    "Marketing Intelligence & ROI",
    "Customer Experience Insights",
    "Product Analytics",
    "Risk & Compliance Monitoring",
  ],
] as const;

export default function ServicesSection() {

  return (
    <MorphSection
      id="services"
      variant="light"
      className="bg-white py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-[1200px]">
        <motion.div
          className="mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.12,
                delayChildren: 0.1,
              },
            },
            hidden: {},
          }}
        >
          <motion.h2
            className="text-3xl font-bold text-slate-900 sm:text-4xl md:text-5xl"
            variants={headerItem}
          >
            Impact Across Business Functions
          </motion.h2>
          <motion.p
            className="mt-4 text-base text-slate-600 sm:text-lg"
            variants={headerItem}
          >
            Enterprise-grade analytics that adapt to every department
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-x-10 gap-y-0 md:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0, y: 18 }}
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={{
            hidden: { opacity: 0, y: 18 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.6,
                ease: easeSmooth,
                staggerChildren: 0.08,
              },
            },
          }}
        >
          {serviceColumns.map((column, columnIndex) => (
            <motion.div
              key={columnIndex}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              {column.map((item) => {
                return (
                  <div
                    key={item}
                    className="group relative border-b border-slate-100 py-4 pl-12 pr-3 text-slate-900 transition-all duration-200 hover:border-[#00B5E8]"
                  >
                    <span className="absolute left-0 top-1/2 h-10 w-[4px] -translate-y-1/2 rounded-full bg-[#00B5E8] opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                    <span
                      aria-hidden
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-[1.7rem] font-light leading-none text-[#00B5E8] opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                    >
                      ›
                    </span>
                    <span className="text-base font-medium leading-7 transition-colors duration-200 sm:text-[1.08rem] group-hover:text-[#007AB8]">
                      {item}
                    </span>
                  </div>
                );
              })}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: easeSmooth }}
        >
          <button
            type="button"
            className="inline-flex min-h-[52px] items-center justify-center rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 px-8 text-base font-semibold text-white shadow-[0_10px_22px_rgba(2,132,199,0.35)] transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(2,132,199,0.45)]"
          >
            Explore All Solutions
          </button>
        </motion.div>
      </div>
    </MorphSection>
  );
}
