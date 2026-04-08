"use client";

import { motion } from "motion/react";
import MorphSection from "./MorphSection";

const easeSmooth = [0.25, 0.46, 0.45, 0.94] as const;

const headerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const headerItemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeSmooth },
  },
};

const formFromBottomVariants = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeSmooth },
  },
};

export default function ContactSection() {
  return (
    <MorphSection
      id="contact"
      variant="light"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={headerContainerVariants}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-slate-900 mb-4"
              variants={headerItemVariants}
            >
              Get In Touch
            </motion.h2>
            <motion.p
              className="text-xl text-slate-600"
              variants={headerItemVariants}
            >
              Ready to start your project? Let&apos;s discuss how we can help you
              achieve your goals.
            </motion.p>
          </motion.div>

        <motion.div
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-[0_12px_40px_rgba(15,23,42,0.08)] border border-slate-200/80 p-8 md:p-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={formFromBottomVariants}
        >
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-700 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-300 bg-white text-slate-900 shadow-sm"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-300 bg-white text-slate-900 shadow-sm"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-slate-700 mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-300 bg-white text-slate-900 shadow-sm"
                placeholder="Project Inquiry"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-slate-700 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-300 bg-white text-slate-900 shadow-sm"
                placeholder="Tell us about your project..."
              />
            </div>
            <button
              type="submit"
              className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-[0_12px_30px_rgba(37,99,235,0.35)] hover:shadow-[0_16px_40px_rgba(37,99,235,0.45)]"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </MorphSection>
  );
}
