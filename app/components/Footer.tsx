"use client";

import Link from "next/link";
import { motion } from "motion/react";
import MorphSection from "./MorphSection";

const easeSmooth = [0.25, 0.46, 0.45, 0.94] as const;

const fromLeftVariants = {
  hidden: { opacity: 0, x: -48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: easeSmooth },
  },
};

const fromBottomVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeSmooth },
  },
};

const columnsContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export default function Footer() {
  return (
    <MorphSection
      as="footer"
      variant="muted"
      className="border-t border-slate-200/80 bg-white text-slate-800 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={columnsContainerVariants}
        >
          {/* Insia Technologies - animate from left */}
          <motion.div variants={fromLeftVariants}>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Insia Technologies
            </h3>
            <p className="text-slate-600">
              Transforming ideas into digital solutions with cutting-edge
              technology.
            </p>
          </motion.div>

          {/* Services - animate from bottom */}
          <motion.div variants={fromBottomVariants}>
            <h4 className="text-lg font-semibold mb-4 text-slate-900">Services</h4>
            <ul className="space-y-2 text-slate-600">
              <li>
                <Link
                  href="#services"
                  className="hover:text-blue-600 transition-colors"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="hover:text-blue-600 transition-colors"
                >
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="hover:text-blue-600 transition-colors"
                >
                  SaaS Projects
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="hover:text-blue-600 transition-colors"
                >
                  IoT Solutions
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Company - animate from bottom */}
          <motion.div variants={fromBottomVariants}>
            <h4 className="text-lg font-semibold mb-4 text-slate-900">Company</h4>
            <ul className="space-y-2 text-slate-600">
              <li>
                <Link
                  href="#about"
                  className="hover:text-blue-600 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="hover:text-blue-600 transition-colors"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="hover:text-blue-600 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact - animate from bottom */}
          <motion.div variants={fromBottomVariants}>
            <h4 className="text-lg font-semibold mb-4 text-slate-900">Contact</h4>
            <ul className="space-y-2 text-slate-600">
              <li>Email: info@insiatech.com</li>
              <li>Phone: +1 (555) 123-4567</li>
            </ul>
          </motion.div>
        </motion.div>

        <div className="border-t border-slate-200/80 mt-8 pt-8 text-center text-slate-500">
          <p>&copy; {new Date().getFullYear()} Insia Technologies. All rights reserved.</p>
        </div>
      </div>
    </MorphSection>
  );
}
