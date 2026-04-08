"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import MorphSection from "./MorphSection";
import { projects } from "@/app/data/projects";
import type { Project } from "@/app/data/projects";

const easeSmooth = [0.25, 0.46, 0.45, 0.94] as const;

const sectionTrigger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeSmooth },
  },
};

function ExternalLinkIcon() {
  return (
    <svg
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      className="w-5 h-5"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg
      className="w-16 h-16 text-white opacity-50"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
      />
    </svg>
  );
}

function ProjectCard({
  project,
  index,
  onImageError,
  imageError,
  className = "",
}: {
  project: Project;
  index: number;
  onImageError: (index: number) => void;
  imageError: Record<number, boolean>;
  className?: string;
}) {
  const hasError = imageError[index];
  const techPreview = project.technologies.slice(0, 4);
  const extraCount = project.technologies.length - techPreview.length;

  return (
    <motion.div
      data-project-card
      variants={cardVariants}
      className={`h-full ${className}`}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 420, damping: 32 }}
    >
      <Link
        href={`/projects/${project.slug}`}
        className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/70 bg-gradient-to-b from-white to-slate-50/95 shadow-[0_4px_6px_-1px_rgba(15,23,42,0.06),0_16px_32px_-12px_rgba(15,23,42,0.1)] transition-[box-shadow,border-color] duration-300 hover:border-slate-300/90 hover:shadow-[0_24px_50px_-12px_rgba(37,99,235,0.18)]"
      >
        <div
          className="absolute inset-x-0 top-0 z-20 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600"
          aria-hidden
        />
        <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-gradient-to-br from-blue-400/15 to-purple-500/10 blur-2xl transition-transform duration-500 group-hover:scale-110" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.2] [background-image:linear-gradient(to_right,rgb(148_163_184/0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgb(148_163_184/0.15)_1px,transparent_1px)] [background-size:18px_18px]"
          aria-hidden
        />

        <div className="relative z-10 h-[13.5rem] shrink-0 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          {hasError ? (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700">
              <CodeIcon />
            </div>
          ) : (
            <>
              <Image
                src={project.images[0]}
                alt={project.title}
                fill
                className="object-cover transition-all duration-700 ease-out group-hover:scale-[1.06]"
                onError={() => onImageError(index)}
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 via-transparent to-purple-600/25 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </>
          )}
          <div className="absolute left-3 top-3 z-10">
            <span className="inline-flex items-center rounded-full border border-white/25 bg-white/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-white shadow-sm backdrop-blur-md">
              Case study
            </span>
          </div>
        </div>

        <div className="relative z-10 flex flex-1 flex-col p-5 sm:p-6">
          <h3 className="mb-2 line-clamp-2 text-lg font-bold tracking-tight text-slate-900 transition-colors group-hover:text-blue-700 sm:text-xl">
            {project.title}
          </h3>
          <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-slate-600">
            {project.description}
          </p>

          <div className="mb-5 rounded-2xl border border-slate-200/70 bg-white/70 p-3.5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.95)] backdrop-blur-sm transition-colors group-hover:bg-white/90">
            <p className="mb-2.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
              Tech stack
            </p>
            <div className="flex flex-wrap gap-1.5">
              {techPreview.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="inline-flex items-center rounded-md border border-blue-200/70 bg-white px-2 py-1 text-[11px] font-semibold text-blue-800 shadow-sm ring-1 ring-blue-500/5 transition-transform duration-200 hover:-translate-y-0.5"
                >
                  {tech}
                </span>
              ))}
              {extraCount > 0 && (
                <span className="inline-flex items-center rounded-md border border-slate-200/80 bg-slate-50 px-2 py-1 text-[11px] font-semibold text-slate-600">
                  +{extraCount} more
                </span>
              )}
            </div>
          </div>

          <div className="mt-auto flex flex-wrap gap-2 border-t border-slate-200/80 pt-4">
            <span
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                if (project.liveUrl !== "#") {
                  window.open(project.liveUrl, "_blank", "noopener,noreferrer");
                }
              }}
              role={project.liveUrl !== "#" ? "button" : undefined}
              className={`inline-flex items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-semibold transition-all ${
                project.liveUrl !== "#"
                  ? "cursor-pointer bg-blue-50 text-blue-700 ring-1 ring-blue-200/80 hover:bg-blue-100"
                  : "cursor-not-allowed bg-slate-100 text-slate-400"
              }`}
            >
              <ExternalLinkIcon />
              Live
            </span>
            {project.githubUrl !== "#" && (
              <span
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  window.open(project.githubUrl, "_blank", "noopener,noreferrer");
                }}
                role="button"
                className="inline-flex cursor-pointer items-center gap-1.5 rounded-xl border border-slate-200/90 bg-white px-3 py-2 text-xs font-semibold text-slate-700 shadow-sm transition-all hover:border-slate-300 hover:bg-slate-50"
              >
                <GitHubIcon />
                Code
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});
  const mobileCarouselRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const carousel = mobileCarouselRef.current;
    if (!carousel || projects.length <= 1) return;

    const intervalId = window.setInterval(() => {
      const firstCard =
        carousel.querySelector<HTMLElement>("[data-project-card]");
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
  }, []);

  const handleImageError = (index: number) => {
    setImageErrors((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <MorphSection
      id="projects"
      variant="muted"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionTrigger}
        >
          <motion.div
            variants={cardVariants}
            className="text-center mb-14"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Our Projects
            </h2>
            <div className="mx-auto mb-4 h-1.5 w-28 rounded-full bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600" />
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              A selection of projects we&apos;ve delivered across web, IoT, e-commerce, and AI.
            </p>
          </motion.div>

          {/* Mobile carousel */}
          <motion.div
            ref={mobileCarouselRef}
            className="md:hidden flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            variants={sectionTrigger}
          >
            {projects.map((project, index) => (
              <ProjectCard
                key={`mobile-${project.id}`}
                project={project}
                index={index}
                onImageError={handleImageError}
                imageError={imageErrors}
                className="min-w-[86%] snap-center"
              />
            ))}
          </motion.div>

          {/* Tablet/Desktop grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onImageError={handleImageError}
                imageError={imageErrors}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </MorphSection>
  );
}
