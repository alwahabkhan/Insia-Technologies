"use client";

import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import MorphSection from "./MorphSection";
import TechnologyCarousel from "./TechnologyCarousel";

export type TechnologyLogo = { name: string; path: string };

type TechCategory = {
  icon: string;
  title: string;
  techs: string[];
  /** Top gradient strip */
  accentBar: string;
  /** Soft corner / mesh wash (category accent) */
  surfaceWash: string;
  /** Icon well background */
  iconWell: string;
  /** Icon ring */
  iconRing: string;
  badgeClass: string;
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
    transition: { duration: 0.6, ease: easeSmooth },
  },
};

const carouselVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeSmooth },
  },
};

const ROW_SIZE = 3;

const CATEGORIES: TechCategory[] = [
  {
    icon: "🎨",
    title: "Frontend",
    techs: ["React", "Next.js", "Vue.js", "Angular", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5", "CSS3", "SASS"],
    accentBar: "from-blue-500 via-sky-400 to-indigo-500",
    iconWell: "bg-gradient-to-br from-blue-500/15 to-sky-500/5",
    iconRing: "ring-blue-500/25 shadow-[0_8px_24px_rgba(59,130,246,0.15)]",
    surfaceWash: "from-blue-500/25 via-sky-400/10 to-transparent",
    badgeClass:
      "bg-white/90 text-blue-800 shadow-sm ring-1 ring-blue-200/80 hover:bg-blue-50/95 hover:ring-blue-300/60",
  },
  {
    icon: "⚙️",
    title: "Backend",
    techs: ["Node.js", "Python", "Django", "Flask", "Express.js", "PHP", "Laravel", "Java", "Spring Boot", "C#", ".NET"],
    accentBar: "from-violet-500 via-purple-500 to-fuchsia-500",
    iconWell: "bg-gradient-to-br from-violet-500/15 to-purple-500/5",
    iconRing: "ring-violet-500/25 shadow-[0_8px_24px_rgba(139,92,246,0.15)]",
    surfaceWash: "from-violet-500/25 via-fuchsia-400/10 to-transparent",
    badgeClass:
      "bg-white/90 text-violet-800 shadow-sm ring-1 ring-violet-200/80 hover:bg-violet-50/95 hover:ring-violet-300/60",
  },
  {
    icon: "📱",
    title: "Mobile",
    techs: ["React Native", "Flutter", "Swift", "Kotlin", "iOS", "Android", "Xamarin", "Ionic"],
    accentBar: "from-emerald-500 via-teal-400 to-cyan-500",
    iconWell: "bg-gradient-to-br from-emerald-500/15 to-teal-500/5",
    iconRing: "ring-emerald-500/25 shadow-[0_8px_24px_rgba(16,185,129,0.15)]",
    surfaceWash: "from-emerald-500/25 via-teal-400/10 to-transparent",
    badgeClass:
      "bg-white/90 text-emerald-800 shadow-sm ring-1 ring-emerald-200/80 hover:bg-emerald-50/95 hover:ring-emerald-300/60",
  },
  {
    icon: "☁️",
    title: "Cloud & DevOps",
    techs: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Jenkins", "GitLab CI", "GitHub Actions", "Terraform", "Ansible"],
    accentBar: "from-orange-500 via-amber-400 to-yellow-400",
    iconWell: "bg-gradient-to-br from-orange-500/15 to-amber-500/5",
    iconRing: "ring-orange-400/30 shadow-[0_8px_24px_rgba(249,115,22,0.15)]",
    surfaceWash: "from-orange-500/25 via-amber-400/10 to-transparent",
    badgeClass:
      "bg-white/90 text-orange-900 shadow-sm ring-1 ring-orange-200/80 hover:bg-orange-50/95 hover:ring-orange-300/60",
  },
  {
    icon: "🗄️",
    title: "Databases",
    techs: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Firebase", "Supabase", "DynamoDB", "Elasticsearch"],
    accentBar: "from-amber-500 via-yellow-400 to-lime-400",
    iconWell: "bg-gradient-to-br from-amber-500/12 to-yellow-500/5",
    iconRing: "ring-amber-400/30 shadow-[0_8px_24px_rgba(245,158,11,0.12)]",
    surfaceWash: "from-amber-500/25 via-yellow-400/10 to-transparent",
    badgeClass:
      "bg-white/90 text-amber-900 shadow-sm ring-1 ring-amber-200/80 hover:bg-amber-50/95 hover:ring-amber-300/60",
  },
  {
    icon: "🤖",
    title: "AI & ML",
    techs: ["TensorFlow", "PyTorch", "OpenAI API", "LangChain", "Hugging Face", "Scikit-learn", "Pandas", "NumPy", "ChatGPT", "Claude"],
    accentBar: "from-pink-500 via-rose-400 to-fuchsia-500",
    iconWell: "bg-gradient-to-br from-pink-500/15 to-rose-500/5",
    iconRing: "ring-pink-500/25 shadow-[0_8px_24px_rgba(236,72,153,0.15)]",
    surfaceWash: "from-pink-500/25 via-rose-400/10 to-transparent",
    badgeClass:
      "bg-white/90 text-pink-900 shadow-sm ring-1 ring-pink-200/80 hover:bg-pink-50/95 hover:ring-pink-300/60",
  },
  {
    icon: "🔌",
    title: "IoT & Hardware",
    techs: ["Arduino", "Raspberry Pi", "MQTT", "ESP32", "Node-RED", "Zigbee", "LoRaWAN", "Modbus"],
    accentBar: "from-indigo-500 via-blue-500 to-cyan-400",
    iconWell: "bg-gradient-to-br from-indigo-500/15 to-blue-500/5",
    iconRing: "ring-indigo-500/25 shadow-[0_8px_24px_rgba(99,102,241,0.15)]",
    surfaceWash: "from-indigo-500/25 via-blue-400/10 to-transparent",
    badgeClass:
      "bg-white/90 text-indigo-900 shadow-sm ring-1 ring-indigo-200/80 hover:bg-indigo-50/95 hover:ring-indigo-300/60",
  },
  {
    icon: "🛠️",
    title: "Tools & Others",
    techs: ["Git", "GitHub", "GitLab", "Jira", "Figma", "Postman", "VS Code", "Webpack", "Vite", "NPM"],
    accentBar: "from-slate-500 via-slate-400 to-zinc-400",
    iconWell: "bg-gradient-to-br from-slate-500/12 to-zinc-500/5",
    iconRing: "ring-slate-400/30 shadow-[0_8px_24px_rgba(100,116,139,0.12)]",
    surfaceWash: "from-slate-500/20 via-zinc-400/8 to-transparent",
    badgeClass:
      "bg-white/95 text-slate-800 shadow-sm ring-1 ring-slate-200/90 hover:bg-slate-50/95 hover:ring-slate-300/70",
  },
  {
    icon: "🔗",
    title: "APIs & Integration",
    techs: ["REST APIs", "GraphQL", "WebSocket", "gRPC", "Stripe", "PayPal", "Twilio", "SendGrid", "Auth0"],
    accentBar: "from-teal-500 via-cyan-400 to-blue-500",
    iconWell: "bg-gradient-to-br from-teal-500/15 to-cyan-500/5",
    iconRing: "ring-teal-500/25 shadow-[0_8px_24px_rgba(20,184,166,0.15)]",
    surfaceWash: "from-teal-500/25 via-cyan-400/10 to-transparent",
    badgeClass:
      "bg-white/90 text-teal-900 shadow-sm ring-1 ring-teal-200/80 hover:bg-teal-50/95 hover:ring-teal-300/60",
  },
];

function CategoryCard({
  category,
  variants,
  className = "",
}: {
  category: TechCategory;
  variants: typeof cardVariants;
  className?: string;
}) {
  return (
    <motion.div
      data-tech-card
      variants={variants}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 420, damping: 32 }}
      className={`group relative overflow-hidden rounded-3xl border border-slate-200/70 bg-gradient-to-b from-white to-slate-50/90 shadow-[0_4px_6px_-1px_rgba(15,23,42,0.06),0_12px_28px_-8px_rgba(15,23,42,0.08)] backdrop-blur-sm transition-[box-shadow,border-color] duration-300 hover:border-slate-300/90 hover:shadow-[0_20px_50px_-12px_rgba(15,23,42,0.15),0_0_0_1px_rgba(255,255,255,0.8)_inset] ${className}`}
    >
      {/* Accent bar */}
      <div
        className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${category.accentBar}`}
        aria-hidden
      />
      {/* Category-colored glow (bottom-right) */}
      <div
        className={`pointer-events-none absolute -bottom-8 -right-8 h-44 w-44 rounded-full bg-gradient-to-tl ${category.surfaceWash} blur-3xl transition-transform duration-500 group-hover:scale-110`}
        aria-hidden
      />
      {/* Neutral highlight (top) */}
      <div
        className="pointer-events-none absolute -left-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br from-white/90 to-transparent opacity-70"
        aria-hidden
      />
      {/* Micro grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:linear-gradient(to_right,rgb(148_163_184/0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgb(148_163_184/0.12)_1px,transparent_1px)] [background-size:20px_20px]"
        aria-hidden
      />

      <div className="relative px-6 pb-6 pt-8 sm:px-7 sm:pb-7">
        <div className="mb-6 flex items-start gap-4">
          <div
            className={`relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl text-[1.75rem] ring-2 ring-white/80 ${category.iconWell} ${category.iconRing}`}
          >
            <span className="relative z-10 drop-shadow-sm" aria-hidden>
              {category.icon}
            </span>
            <span
              className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/50 to-transparent"
              aria-hidden
            />
          </div>
          <div className="min-w-0 flex-1 pt-1">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
                {category.title}
              </h3>
              <span className="inline-flex items-center rounded-full border border-slate-200/90 bg-white/80 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-slate-500 shadow-sm">
                Stack
              </span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              <span className="font-semibold tabular-nums text-slate-800">
                {category.techs.length}
              </span>{" "}
              tools in this category
            </p>
            <div
              className={`mt-3 h-px max-w-[180px] bg-gradient-to-r ${category.accentBar} opacity-60`}
              aria-hidden
            />
          </div>
        </div>

        <div className="relative rounded-2xl border border-slate-200/60 bg-white/60 p-4 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.9)] backdrop-blur-md transition-colors duration-300 group-hover:bg-white/75">
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
            Technologies
          </p>
          <div className="flex flex-wrap gap-2">
            {category.techs.map((tech, idx) => (
              <span
                key={idx}
                className={`inline-flex items-center rounded-md px-2.5 py-1.5 text-[11px] font-semibold leading-none tracking-tight transition-all duration-200 hover:-translate-y-0.5 ${category.badgeClass}`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function TechnologiesSection({
  logos,
}: {
  logos: TechnologyLogo[];
}) {
  const mobileCarouselRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const carousel = mobileCarouselRef.current;
    if (!carousel || CATEGORIES.length <= 1) return;

    const intervalId = window.setInterval(() => {
      const firstCard = carousel.querySelector<HTMLElement>("[data-tech-card]");
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

  const rows: TechCategory[][] = [];
  for (let i = 0; i < CATEGORIES.length; i += ROW_SIZE) {
    rows.push(CATEGORIES.slice(i, i + ROW_SIZE));
  }

  return (
    <MorphSection
      id="technologies"
      variant="soft"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50"
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
            Technologies & Tools
          </motion.h2>
          <motion.p
            className="text-xl text-slate-600 max-w-2xl mx-auto"
            variants={headerItem}
          >
            We work with cutting-edge technologies to deliver exceptional
            solutions
          </motion.p>
        </motion.div>

        <motion.div
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={carouselVariants}
        >
          <TechnologyCarousel logos={logos} />
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
          {CATEGORIES.map((category, index) => (
            <CategoryCard
              key={`mobile-${index}`}
              category={category}
              variants={cardVariants}
              className="min-w-[86%] snap-center"
            />
          ))}
        </motion.div>

        {/* Tablet/Desktop grid */}
        <div className="hidden md:flex flex-col gap-8">
          {rows.map((rowCategories, rowIndex) => (
            <motion.div
              key={rowIndex}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={rowVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {rowCategories.map((category, index) => (
                <CategoryCard
                  key={`${rowIndex}-${index}`}
                  category={category}
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
