"use client";

import { motion } from "motion/react";

type Service = {
  title: string;
  description: string;
  icon: string;
  features: string[];
};

const easeSmooth = [0.25, 0.46, 0.45, 0.94] as const;

const rowVariants = {
  hidden: { opacity: 0, y: 56 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: easeSmooth,
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeSmooth },
  },
};

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

const ROW_SIZE = 3;

function ServiceCard({
  service,
  index,
  variants,
}: {
  service: Service;
  index: number;
  variants: typeof cardVariants;
}) {
  return (
    <motion.div
      variants={variants}
      className="group bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transform hover:-translate-y-2"
    >
      <div className="text-5xl mb-4">{service.icon}</div>
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
        {service.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        {service.description}
      </p>
      <ul className="space-y-2">
        {service.features.map((feature, idx) => (
          <li
            key={idx}
            className="text-sm text-gray-500 dark:text-gray-400 flex items-center"
          >
            <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function ServicesSection({ services }: { services: Service[] }) {
  const rows: Service[][] = [];
  for (let i = 0; i < services.length; i += ROW_SIZE) {
    rows.push(services.slice(i, i + ROW_SIZE));
  }

  return (
    <section
      id="services"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
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
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
            variants={headerItem}
          >
            Our Services
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            variants={headerItem}
          >
            Comprehensive IT solutions tailored to your business needs
          </motion.p>
        </motion.div>

        <div className="flex flex-col gap-8">
          {rows.map((rowServices, rowIndex) => (
            <motion.div
              key={rowIndex}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={rowVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {rowServices.map((service, index) => (
                <ServiceCard
                  key={rowIndex * ROW_SIZE + index}
                  service={service}
                  index={index}
                  variants={cardVariants}
                />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
