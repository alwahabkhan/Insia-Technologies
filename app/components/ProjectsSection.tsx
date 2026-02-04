"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
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
}: {
  project: Project;
  index: number;
  onImageError: (index: number) => void;
  imageError: Record<number, boolean>;
}) {
  const hasError = imageError[index];

  return (
    <motion.div variants={cardVariants} className="h-full">
      <Link
        href={`/projects/${project.slug}`}
        className="block h-full bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col border border-gray-200 dark:border-gray-700 group"
      >
        <div className="relative h-56 bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600 overflow-hidden">
          {hasError ? (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600">
              <CodeIcon />
            </div>
          ) : (
            <Image
              src={project.images[0]}
              alt={project.title}
              fill
              className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              onError={() => onImageError(index)}
              unoptimized
            />
          )}
        </div>
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-1 line-clamp-3">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 4).map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full text-xs font-medium">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
          <div className="flex gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <span
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                if (project.liveUrl !== "#") {
                  window.open(project.liveUrl, "_blank", "noopener,noreferrer");
                }
              }}
              role={project.liveUrl !== "#" ? "button" : undefined}
              className={`flex items-center gap-2 font-medium transition-colors ${
                project.liveUrl !== "#"
                  ? "text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 cursor-pointer"
                  : "text-gray-400 dark:text-gray-500 cursor-not-allowed"
              }`}
            >
              <ExternalLinkIcon />
              <span>Live Demo</span>
            </span>
            {project.githubUrl !== "#" && (
              <span
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  window.open(project.githubUrl, "_blank", "noopener,noreferrer");
                }}
                role="button"
                className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 font-medium transition-colors cursor-pointer"
              >
                <GitHubIcon />
                <span>View Code</span>
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

  const handleImageError = (index: number) => {
    setImageErrors((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50"
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Our Projects
            </h2>
            <div className="w-24 h-1.5 bg-blue-600 dark:bg-blue-500 mx-auto mb-4 rounded-full" />
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
              A selection of projects we&apos;ve delivered across web, IoT, e-commerce, and AI.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
    </section>
  );
}
