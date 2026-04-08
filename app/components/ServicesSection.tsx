"use client";

import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import MorphSection from "./MorphSection";

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
  variants,
  className = "",
}: {
  service: Service;
  variants: typeof cardVariants;
  className?: string;
}) {
  return (
    <motion.div
      data-service-card
      variants={variants}
      className={`group bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-[0_10px_40px_rgba(37,99,235,0.08)] hover:shadow-[0_18px_60px_rgba(37,99,235,0.14)] transition-all duration-300 border border-slate-200/80 hover:border-blue-300 transform hover:-translate-y-2 ${className}`}
    >
      <div className="text-5xl mb-4">{service.icon}</div>
      <h3 className="text-2xl font-bold text-slate-900 mb-3">
        {service.title}
      </h3>
      <p className="text-slate-600 mb-4">
        {service.description}
      </p>
      <ul className="space-y-2">
        {service.features.map((feature, idx) => (
          <li
            key={idx}
            className="text-sm text-slate-500 flex items-center"
          >
            <span className="text-blue-600 mr-2">✓</span>
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function ServicesSection({ services }: { services: Service[] }) {
  const mobileCarouselRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const carousel = mobileCarouselRef.current;
    if (!carousel || services.length <= 1) return;

    const intervalId = window.setInterval(() => {
      const firstCard = carousel.querySelector<HTMLElement>("[data-service-card]");
      if (!firstCard) return;

      const gap = 16; // matches gap-4
      const step = firstCard.offsetWidth + gap;
      const maxLeft = carousel.scrollWidth - carousel.clientWidth;
      const nextLeft = carousel.scrollLeft + step;

      carousel.scrollTo({
        left: nextLeft > maxLeft ? 0 : nextLeft,
        behavior: "smooth",
      });
    }, 3500);

    return () => window.clearInterval(intervalId);
  }, [services.length]);

  const rows: Service[][] = [];
  for (let i = 0; i < services.length; i += ROW_SIZE) {
    rows.push(services.slice(i, i + ROW_SIZE));
  }

  return (
    <MorphSection
      id="services"
      variant="light"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
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
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-4"
            variants={headerItem}
          >
            Our Services
          </motion.h2>
          <motion.p
            className="text-xl text-slate-600 max-w-2xl mx-auto"
            variants={headerItem}
          >
            Comprehensive IT solutions tailored to your business needs
          </motion.p>
        </motion.div>

        {/* Mobile carousel */}
        <motion.div
          ref={mobileCarouselRef}
          className="md:hidden flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          variants={rowVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <ServiceCard
              key={`mobile-${index}`}
              service={service}
              variants={cardVariants}
              className="min-w-[86%] snap-center"
            />
          ))}
        </motion.div>

        {/* Tablet/Desktop grid */}
        <div className="hidden md:flex flex-col gap-8">
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
                  variants={cardVariants}
                />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </MorphSection>
  );
}
