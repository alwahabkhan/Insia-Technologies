"use client";

import { motion } from "motion/react";

const easeSmooth = [0.25, 0.46, 0.45, 0.94] as const;

/* When you scroll to this section, one viewport check triggers all animations */
const sectionTrigger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const fromLeftVariants = {
  hidden: { opacity: 0, x: -56 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: easeSmooth,
      staggerChildren: 0.15,
      delayChildren: 0.35,
    },
  },
};

const fromRightVariants = {
  hidden: { opacity: 0, x: 56 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: easeSmooth },
  },
};

const fromBottomVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeSmooth },
  },
};

const statsContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const WHY_CHOOSE_ITEMS = [
  "Expert team with years of experience",
  "Cutting-edge technology stack",
  "Agile development methodology",
  "24/7 support and maintenance",
  "Competitive pricing",
  "On-time project delivery",
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        {/* Single scroll trigger: when this section enters view, all animations play */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={sectionTrigger}
        >
          {/* Left side - animate from left */}
          <motion.div variants={fromLeftVariants}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About Insia Technologies
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
              We are a forward-thinking IT services company dedicated to
              delivering innovative technology solutions that drive business
              growth and digital transformation.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
              Our team of experienced developers, designers, and AI specialists
              work collaboratively to create cutting-edge solutions across web,
              mobile, cloud, IoT, and artificial intelligence domains.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              With a focus on quality, innovation, and client satisfaction, we
              help businesses leverage the power of modern technology to achieve
              their goals.
            </p>
            {/* Stats - animate from bottom when section is in view */}
            <motion.div
              className="grid grid-cols-2 gap-6"
              variants={statsContainerVariants}
            >
              <motion.div
                variants={fromBottomVariants}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
              >
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  100+
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  Projects Delivered
                </div>
              </motion.div>
              <motion.div
                variants={fromBottomVariants}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
              >
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                  50+
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  Happy Clients
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right side - animate from right */}
          <motion.div
            variants={fromRightVariants}
            className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Why Choose Us?
            </h3>
            <ul className="space-y-4">
              {WHY_CHOOSE_ITEMS.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
