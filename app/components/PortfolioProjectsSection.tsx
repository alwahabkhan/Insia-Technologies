"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { projects, type Project } from "@/app/data/projects";
import { useHorizontalCarousel } from "@/app/hooks/useHorizontalCarousel";
import { cn, textStyles } from "@/app/lib/typography";
import MorphSection from "./MorphSection";

const easeSmooth = [0.25, 0.46, 0.45, 0.94] as const;

const fadeUpInView = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.12, margin: "0px 0px -48px 0px" },
  transition: { duration: 0.55, ease: easeSmooth },
} as const;

const TECH_DOT: Record<string, string> = {
  "React.js": "bg-cyan-500",
  React: "bg-cyan-500",
  "Next.js": "bg-slate-800",
  "Node.js": "bg-emerald-600",
  "Express.js": "bg-slate-600",
  MongoDB: "bg-green-600",
  MySQL: "bg-orange-500",
  PostgreSQL: "bg-blue-700",
  "Material UI": "bg-sky-500",
  NestJS: "bg-rose-600",
  Prisma: "bg-indigo-600",
};

function isValidExternalUrl(url: string) {
  return url.startsWith("http://") || url.startsWith("https://");
}

function splitProjectTitle(title: string) {
  const parts = title.split(/\s*[–—]\s*/);
  if (parts.length >= 2) {
    return {
      brand: parts[0].trim(),
      subtitle: parts.slice(1).join(" – ").trim(),
    };
  }
  return { brand: title, subtitle: "" };
}

function shortRole(role: string) {
  const primary = role.split("/")[0]?.trim() ?? role;
  return primary.length > 28 ? `${primary.slice(0, 26)}…` : primary;
}

function projectMeta(project: Project) {
  const stackLabel =
    project.technologies.length > 0
      ? `${project.technologies.slice(0, 2).join(" · ")}`
      : "Full stack";

  return [
    { icon: "building", label: project.company },
    { icon: "clock", label: project.timeline.duration },
    { icon: "user", label: shortRole(project.role) },
    {
      icon: "layers",
      label:
        stackLabel.length > 24 ? `${project.technologies.length} technologies` : stackLabel,
    },
  ] as const;
}

function MetaIcon({ type }: { type: "building" | "clock" | "user" | "layers" }) {
  const cls = "h-4 w-4 shrink-0 text-slate-400";
  if (type === "building") {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M5 21V7l7-4 7 4v14M19 21V11l-7-4" />
      </svg>
    );
  }
  if (type === "clock") {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    );
  }
  if (type === "user") {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    );
  }
  return (
    <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function ProjectCard({
  project,
  compact = false,
}: {
  project: Project;
  compact?: boolean;
}) {
  const { brand, subtitle } = splitProjectTitle(project.title);
  const meta = projectMeta(project);
  const displaySubtitle = subtitle || project.description.split(".")[0];

  return (
    <article
      className={cn(
        "group box-border flex h-full w-full max-w-full min-w-0 flex-col overflow-hidden rounded-3xl border border-slate-200/90 border-t-[3px] border-t-cyan-500 bg-white shadow-[0_10px_32px_rgba(15,23,42,0.08)] transition-all duration-300 hover:border-cyan-200/80 hover:border-t-cyan-400 hover:shadow-[0_20px_48px_rgba(6,182,212,0.14)]",
        compact
          ? "max-lg:hover:translate-y-0"
          : "hover:-translate-y-1"
      )}
    >
      <Link
        href={`/projects/${project.slug}`}
        className="relative block min-h-[220px] overflow-hidden bg-slate-900 sm:min-h-[260px]"
      >
        <Image
          src={project.images[0] ?? "/images/images_06.jpg"}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/25 to-transparent" />
        <div
          className={cn(
            "absolute inset-x-0 bottom-0 flex min-w-0 items-end gap-3 p-5 sm:gap-4 sm:p-7",
            compact && "p-5"
          )}
        >
          <div
            className={cn(
              "grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-cyan-500 to-teal-500 text-xl font-bold text-white shadow-[0_8px_20px_rgba(6,182,212,0.45)] sm:h-16 sm:w-16",
              compact && "h-12 w-12 text-lg"
            )}
            aria-hidden
          >
            {brand.charAt(0)}
          </div>
          <div className="min-w-0 flex-1 pb-0.5">
            <p
              className={cn(
                "font-display font-bold leading-tight text-white break-words",
                compact ? "text-xl" : "text-2xl sm:text-[1.65rem]"
              )}
            >
              {brand}
            </p>
            {displaySubtitle ? (
              <p className="mt-1 line-clamp-2 font-sans text-[13px] font-normal leading-snug text-white/85 sm:text-sm sm:leading-[22px]">
                {displaySubtitle}
              </p>
            ) : null}
          </div>
        </div>
      </Link>

      <div className={cn("flex min-w-0 flex-1 flex-col p-6 sm:p-8", compact && "p-5")}>
        <div
          className={cn(
            "border-b border-slate-100 pb-5",
            compact
              ? "grid grid-cols-2 gap-x-3 gap-y-2.5"
              : "flex flex-wrap items-center gap-y-2"
          )}
        >
          {meta.map((item, index) =>
            compact ? (
              <span
                key={item.label}
                className={cn(
                  textStyles.caption,
                  "inline-flex min-w-0 max-w-full items-center gap-1.5 text-secondary"
                )}
              >
                <MetaIcon type={item.icon} />
                <span className="truncate">{item.label}</span>
              </span>
            ) : (
              <div key={item.label} className="flex items-center">
                {index > 0 ? (
                  <span
                    className="mx-3 hidden h-4 w-px bg-slate-200 sm:mx-4 sm:block"
                    aria-hidden
                  />
                ) : null}
                <span
                  className={cn(
                    textStyles.caption,
                    "inline-flex max-w-[9rem] items-center gap-1.5 text-secondary sm:max-w-none"
                  )}
                >
                  <MetaIcon type={item.icon} />
                  <span className="truncate">{item.label}</span>
                </span>
              </div>
            )
          )}
        </div>

        <h3 className="mt-5 min-w-0">
          <Link
            href={`/projects/${project.slug}`}
            className={cn(
              "font-display font-bold not-italic leading-[1.35] tracking-normal text-primary transition-colors duration-200 break-words",
              compact ? "text-lg leading-snug" : "text-xl sm:text-2xl sm:leading-tight",
              "group-hover:text-cyan-600 hover:text-cyan-700"
            )}
          >
            {project.title}
          </Link>
        </h3>

        <p className={cn(textStyles.bodySm, "mt-4 line-clamp-3 flex-1 sm:line-clamp-4")}>
          {project.description}
        </p> 

        <div className="mt-5 flex min-w-0 flex-wrap gap-2">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className={cn(
                textStyles.caption,
                "inline-flex max-w-full min-w-0 items-center gap-2 rounded-full bg-slate-100 px-3 py-1.5 text-secondary",
                compact && "max-w-[calc(100%-0.25rem)]"
              )}
            >
              <span
                className={cn(
                  "h-2 w-2 shrink-0 rounded-full",
                  TECH_DOT[tech] ?? TECH_DOT[tech.replace(".js", "")] ?? "bg-cyan-500"
                )}
                aria-hidden
              />
              <span className="truncate">{tech}</span>
            </span>
          ))}
          {project.technologies.length > 5 ? (
            <span
              className={cn(
                textStyles.caption,
                "inline-flex items-center rounded-full bg-slate-100 px-3 py-1.5 text-muted"
              )}
            >
              +{project.technologies.length - 5}
            </span>
          ) : null}
        </div>

        <div
          className={cn(
            "mt-6 flex min-w-0 flex-wrap items-center gap-3 pt-2 sm:gap-5",
            compact && "flex-col items-stretch"
          )}
        >
          <Link
            href={`/projects/${project.slug}`}
            className={cn(
              textStyles.btn,
              "inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-white transition-colors hover:bg-slate-800",
              compact && "w-full"
            )}
          >
            View Case Study
            <span aria-hidden>→</span>
          </Link>
          {isValidExternalUrl(project.liveUrl) ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                textStyles.label,
                "inline-flex items-center gap-1.5 font-medium text-secondary underline decoration-slate-300 underline-offset-4 transition-colors hover:text-primary hover:decoration-cyan-500"
              )}
            >
              Live Demo
              <svg
                className="h-4 w-4 shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export default function PortfolioProjectsSection() {
  const { carouselRef, activeIndex, goToSlide } = useHorizontalCarousel({
    slideSelector: "[data-project-slide]",
    slideCount: projects.length,
    activeMediaQuery: "(max-width: 1023px)",
  });

  return (
    <MorphSection
      id="projects"
      variant="soft"
      className="bg-white py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto min-w-0 max-w-[1200px]">
        <motion.div {...fadeUpInView} className="mb-12 max-w-3xl">
          <p className={textStyles.eyebrowPill}>Portfolio</p>
          <h2 className={cn(textStyles.h2, "mt-5")}>Our Projects</h2>
          <p className={cn(textStyles.body, "mt-4")}>
            Real products we&apos;ve designed and built — from IoT platforms to
            full-stack web applications.
          </p>
        </motion.div>

        {/* Mobile: swipeable carousel */}
        <div className="w-full min-w-0 overflow-hidden lg:hidden">
          <div
            ref={carouselRef}
            className="flex w-full max-w-full overflow-x-auto overscroll-x-contain scroll-smooth pb-2 snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            aria-roledescription="carousel"
            aria-label="Our projects"
          >
            {projects.map((project) => (
              <div
                key={project.id}
                data-project-slide
                className="box-border w-full max-w-full min-w-0 shrink-0 grow-0 basis-full snap-center"
              >
                <ProjectCard project={project} compact />
              </div>
            ))}
          </div>

          {projects.length > 1 ? (
            <div
              className="mt-6 flex justify-center gap-2"
              role="tablist"
              aria-label="Project slides"
            >
              {projects.map((project, index) => (
                <button
                  key={project.id}
                  type="button"
                  role="tab"
                  aria-selected={activeIndex === index}
                  aria-label={`Go to ${project.title}`}
                  onClick={() => goToSlide(index)}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    activeIndex === index ? "w-8 bg-cyan-500" : "w-2 bg-slate-300"
                  )}
                />
              ))}
            </div>
          ) : null}
        </div>

        {/* Desktop: two-column grid */}
        <div className="hidden gap-8 lg:grid lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              {...fadeUpInView}
              transition={{
                ...fadeUpInView.transition,
                delay: index * 0.06,
              }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </MorphSection>
  );
}
