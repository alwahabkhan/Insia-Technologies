"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/app/data/projects";
import Footer from "./Footer";
import MorphSection from "./MorphSection";

interface ProjectDetailProps {
  project: Project;
}

function ArrowBackIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10 19l-7-7m0 0l7-7m-7 7h18"
      />
    </svg>
  );
}

function LaunchIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
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

function GitHubIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function CalendarIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
  );
}

function BusinessIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
      />
    </svg>
  );
}

function PersonIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
      />
    </svg>
  );
}

function CodeIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg
      className={className}
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

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});
  const responsibilitiesCarouselRef = useRef<HTMLDivElement | null>(null);
  const safeImageIndex =
    project.images.length > 0
      ? Math.min(currentImageIndex, project.images.length - 1)
      : 0;

  const handleImageError = (index: number) => {
    setImageErrors((prev) => ({ ...prev, [index]: true }));
  };

  const nextImage = () => {
    setCurrentImageIndex(
      (prev) => (prev + 1) % project.images.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + project.images.length) % project.images.length
    );
  };

  const responsibilityGroups: string[][] = [];
  for (let i = 0; i < project.responsibilities.length; i += 5) {
    responsibilityGroups.push(project.responsibilities.slice(i, i + 5));
  }

  useEffect(() => {
    const carousel = responsibilitiesCarouselRef.current;
    if (!carousel || responsibilityGroups.length <= 1) return;

    const intervalId = window.setInterval(() => {
      const firstSlide = carousel.querySelector<HTMLElement>("[data-resp-slide]");
      if (!firstSlide) return;

      const gap = 16; // matches gap-4
      const step = firstSlide.offsetWidth + gap;
      const maxLeft = carousel.scrollWidth - carousel.clientWidth;
      const nextLeft = carousel.scrollLeft + step;

      carousel.scrollTo({
        left: nextLeft > maxLeft ? 0 : nextLeft,
        behavior: "smooth",
      });
    }, 3500);

    return () => window.clearInterval(intervalId);
  }, [responsibilityGroups.length]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link
          href="/#projects"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-8 group font-medium"
        >
          <ArrowBackIcon className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Our Projects
        </Link>
      </div>

      {/* Hero Section */}
      <MorphSection
        variant="soft"
        className="relative w-full h-[72vh] min-h-[520px] overflow-hidden bg-slate-100"
      >
        <div className="relative w-full h-full flex items-center justify-center">
          {imageErrors[safeImageIndex] || project.images.length === 0 ? (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-700">
              <CodeIcon className="w-12 h-12 text-white opacity-50" />
            </div>
          ) : (
            <Image
              src={project.images[safeImageIndex]}
              alt={`${project.title} - Image ${safeImageIndex + 1}`}
              fill
              className="object-cover"
              onError={() => handleImageError(safeImageIndex)}
              unoptimized
              priority
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/40 to-transparent pointer-events-none" />
        </div>

        {/* Image Navigation */}
        {project.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all z-10 shadow-lg"
              aria-label="Previous image"
            >
              <ArrowBackIcon className="w-5 h-5" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all z-10 rotate-180 shadow-lg"
              aria-label="Next image"
            >
              <ArrowBackIcon className="w-5 h-5" />
            </button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {project.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    safeImageIndex === index
                      ? "w-8 bg-white"
                      : "w-2 bg-white/50"
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight">
              {project.title}
            </h1>
            <p className="text-sm md:text-base text-slate-200 max-w-3xl">
              {project.description}
            </p>
          </div>
        </div>
      </MorphSection>

      {/* Project Information */}
      <MorphSection variant="light" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-3xl border border-slate-200/80 shadow-[0_10px_30px_rgba(37,99,235,0.08)]">
              <div className="flex items-center mb-3">
                <BusinessIcon className="w-4 h-4 text-blue-600 mr-3 flex-shrink-0" />
                <h3 className="text-sm font-semibold text-slate-600 uppercase tracking-wide">
                  Company
                </h3>
              </div>
              <p className="text-2xl font-bold text-slate-900">
                {project.company}
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-3xl border border-slate-200/80 shadow-[0_10px_30px_rgba(147,51,234,0.08)]">
              <div className="flex items-center mb-3">
                <PersonIcon className="w-4 h-4 text-purple-600 mr-3 flex-shrink-0" />
                <h3 className="text-sm font-semibold text-slate-600 uppercase tracking-wide">
                  Role
                </h3>
              </div>
              <p className="text-2xl font-bold text-slate-900">
                {project.role}
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-red-50 p-6 rounded-3xl border border-slate-200/80 shadow-[0_10px_30px_rgba(236,72,153,0.08)]">
              <div className="flex items-center mb-3">
                <CalendarIcon className="w-4 h-4 text-pink-600 mr-3 flex-shrink-0" />
                <h3 className="text-sm font-semibold text-slate-600 uppercase tracking-wide">
                  Timeline
                </h3>
              </div>
              <p className="text-lg font-bold text-slate-900 mb-1">
                {project.timeline.startDate} - {project.timeline.endDate}
              </p>
              <p className="text-sm text-slate-600">
                {project.timeline.duration}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mb-12">
            {project.liveUrl !== "#" && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all shadow-[0_12px_30px_rgba(37,99,235,0.35)] hover:shadow-[0_18px_36px_rgba(37,99,235,0.45)] font-semibold"
              >
                <LaunchIcon className="w-4 h-4 mr-2" />
                View Live Demo
              </a>
            )}
            {project.githubUrl !== "#" && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-white text-slate-800 rounded-xl border border-slate-300 hover:border-slate-400 hover:bg-slate-50 transition-all shadow-md hover:shadow-lg font-semibold"
              >
                <GitHubIcon className="w-4 h-4 mr-2" />
                View Code
              </a>
            )}
          </div>
        </div>
      </MorphSection>

      {/* Description Section */}
      <MorphSection variant="soft" className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-3">
            Project Overview
          </h2>
          <div className="h-1 w-24 rounded-full bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 mb-8" />
          <p className="text-lg text-slate-700 leading-relaxed max-w-4xl bg-white/75 backdrop-blur-sm border border-slate-200/80 rounded-3xl p-8 shadow-[0_8px_24px_rgba(15,23,42,0.06)]">
            {project.fullDescription}
          </p>
        </div>
      </MorphSection>

      {/* Technologies */}
      <MorphSection variant="light" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-3">
            Technologies & Skills
          </h2>
          <div className="h-1 w-24 rounded-full bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 mb-8" />
          <div className="flex flex-wrap gap-3 rounded-3xl border border-slate-200/80 bg-gradient-to-br from-white to-slate-50 p-6 shadow-[0_8px_24px_rgba(15,23,42,0.06)]">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white text-blue-700 rounded-xl text-sm font-semibold border border-blue-200/80 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </MorphSection>

      {/* Responsibilities */}
      {project.responsibilities.length > 0 && (
        <MorphSection variant="muted" className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-slate-900 mb-3">
              Key Responsibilities
            </h2>
            <div className="h-1 w-24 rounded-full bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 mb-8" />
            {/* Mobile: grouped carousel (5 cards per slide) */}
            <div
              ref={responsibilitiesCarouselRef}
              className="md:hidden flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            >
              {responsibilityGroups.map((group, groupIndex) => (
                <div
                  key={groupIndex}
                  data-resp-slide
                  className="min-w-full snap-center"
                >
                  <div className="space-y-4">
                    {group.map((responsibility, itemIndex) => {
                      const absoluteIndex = groupIndex * 5 + itemIndex;
                      return (
                        <div
                          key={absoluteIndex}
                          className="flex items-start p-5 bg-white/90 backdrop-blur-sm rounded-3xl border border-slate-200/80 shadow-[0_10px_24px_rgba(15,23,42,0.08)]"
                        >
                          <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                            {absoluteIndex + 1}
                          </div>
                          <p className="text-slate-700 leading-relaxed text-sm">
                            {responsibility}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Tablet/Desktop grid */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.responsibilities.map((responsibility, index) => (
                <div
                  key={index}
                  className="flex items-start p-6 bg-white/90 backdrop-blur-sm rounded-3xl border border-slate-200/80 shadow-[0_10px_24px_rgba(15,23,42,0.08)] hover:shadow-[0_18px_36px_rgba(15,23,42,0.12)] transition-all"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {index + 1}
                  </div>
                  <p className="text-slate-700 leading-relaxed">
                    {responsibility}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </MorphSection>
      )}

      {/* Achievements */}
      {project.achievements.length > 0 && (
        <MorphSection variant="light" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-slate-900 mb-3">
              Key Achievements
            </h2>
            <div className="h-1 w-24 rounded-full bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 mb-8" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex items-start p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl shadow-[0_10px_24px_rgba(37,99,235,0.12)] hover:shadow-[0_18px_36px_rgba(37,99,235,0.16)] transition-all border border-slate-200/80 border-l-4 border-l-blue-600"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4 mt-1">
                    ✓
                  </div>
                  <p className="text-slate-700 leading-relaxed font-medium">
                    {achievement}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </MorphSection>
      )}

      <Footer />
    </div>
  );
}
