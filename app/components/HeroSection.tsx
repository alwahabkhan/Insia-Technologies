"use client";

import Link from "next/link";
import { motion } from "motion/react";
import VerticalLogoCarousel from "./VerticalLogoCarousel";

export type TechnologyLogo = { name: string; path: string };

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
      ease: [0.25, 0.46, 0.45, 0.94],
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
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export default function HeroSection({ logos = [] }: { logos?: TechnologyLogo[] }) {
  return (
    <section
      id="home"
      className="min-h-[100vh] flex flex-col justify-center items-center pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-4">
        {/* Left vertical carousel - auto-runs, scrolls downward */}
        {logos.length > 0 && (
          <div className="hidden lg:flex lg:w-28 xl:w-32 flex-shrink-0 justify-center">
            <VerticalLogoCarousel logos={logos} direction="down" />
          </div>
        )}

        <motion.div
          className="flex-1 flex flex-col items-center justify-center text-center max-w-4xl"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <div className="text-center">
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6"
            variants={item}
          >
            Transforming Ideas Into
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Digital Solutions
            </span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
            variants={item}
          >
            Leading IT services provider specializing in cutting-edge web
            development, mobile apps, SaaS platforms, IoT solutions, and AI
            technologies.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={container}
          >
            <motion.div variants={itemButtons}>
              <Link
                href="#contact"
                className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get Started
              </Link>
            </motion.div>
            <motion.div variants={itemButtons}>
              <Link
                href="#services"
                className="inline-block px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg font-semibold text-lg border-2 border-gray-300 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-400 transition-all"
              >
                Our Services
              </Link>
            </motion.div>
          </motion.div>
        </div>
        </motion.div>

        {/* Right vertical carousel - auto-runs, scrolls upward, opposite order */}
        {logos.length > 0 && (
          <div className="hidden lg:flex lg:w-28 xl:w-32 flex-shrink-0 justify-center">
            <VerticalLogoCarousel logos={logos} direction="up" reverseOrder />
          </div>
        )}
      </div>
    </section>
  );
}
