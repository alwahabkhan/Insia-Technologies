"use client";

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

export default function HeroSection() {
  return (
    <MorphSection
      id="home"
      variant="hero"
      className="min-h-screen px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-purple-50"
    >
      <div className="max-w-7xl mx-auto w-full min-h-[calc(100vh-6rem)] grid place-items-center">
        <motion.div
          className="w-full max-w-4xl mx-auto text-center flex flex-col items-center"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 text-center"
            variants={item}
          >
            Transforming Ideas Into
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Digital Solutions
            </span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto text-center"
            variants={item}
          >
            Leading IT services provider specializing in cutting-edge web
            development, mobile apps, SaaS platforms, IoT solutions, and AI
            technologies.
          </motion.p>
          <motion.div
            className="w-full flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={container}
          >
            <motion.div variants={itemButtons}>
              <Link
                href="#contact"
                className="hero-get-started inline-flex items-center justify-center min-w-[220px] px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get Started
              </Link>
            </motion.div>
            <motion.div variants={itemButtons}>
              <Link
                href="#services"
                className="hero-our-services inline-flex items-center justify-center min-w-[220px] px-8 py-4 bg-white/90 rounded-lg font-semibold text-lg shadow-lg shadow-blue-100/40 transition-colors"
              >
                Our Services
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </MorphSection>
  );
}
