"use client";

import Image from "next/image";
import { motion } from "motion/react";
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

const capabilityCards = [
  {
    title: "Self-Service Analysis",
    description: "Empower every employee to explore data independently",
  },
  {
    title: "Natural Language Interface",
    description: "Ask questions like 'What were our top products last quarter?'",
  },
  {
    title: "No Technical Skills Required",
    description: "Point-and-click simplicity for everyone",
  },
];

const leadershipTeam = [
  {
    name: "Dr. Sarah Mitchell",
    role: "Chief Executive Officer",
    image: "/images/images_07.jpg",
  },
  {
    name: "James Chen",
    role: "Chief Technology Officer",
    image: "/images/images_08.jpg",
  },
  {
    name: "Maria Rodriguez",
    role: "Chief Data Officer",
    image: "/images/images_09.jpg",
  },
  {
    name: "David Park",
    role: "Chief Product Officer",
    image: "/images/images_10.jpg",
  },
] as const;

const testimonials = [
  {
    quote:
      '"INSIYA transformed our data operations completely. What used to take our team weeks now happens in real-time. The ROI was immediate."',
    name: "Sarah Chen",
    role: "VP of Analytics",
    company: "TechCorp Global",
    image: "/images/images_07.jpg",
  },
  {
    quote:
      '"The no-code interface means our business teams can finally access insights without depending on IT. It\'s been a game-changer for decision velocity."',
    name: "Michael Rodriguez",
    role: "Chief Data Officer",
    company: "Innovate Solutions",
    image: "/images/images_08.jpg",
  },
  {
    quote:
      '"We consolidated 5 different tools into INSIYA and cut our analytics costs by 40%. The AI predictions have become essential to our planning."',
    name: "Emily Watson",
    role: "Director of Operations",
    company: "Enterprise Inc",
    image: "/images/images_06.jpg",
  },
] as const;

type LeadershipMember = (typeof leadershipTeam)[number];

function LeadershipMemberCard({
  member,
  compact = false,
}: {
  member: LeadershipMember;
  compact?: boolean;
}) {
  return (
    <article className="box-border w-full max-w-full min-w-0 text-center">
      <div
        className={cn(
          "mx-auto overflow-hidden rounded-full border border-slate-200 bg-slate-100 shadow-[0_8px_20px_rgba(15,23,42,0.08)]",
          compact ? "h-48 w-48 max-w-full" : "h-64 w-64"
        )}
      >
        <Image
          src={member.image}
          alt={member.name}
          width={compact ? 192 : 256}
          height={compact ? 192 : 256}
          className="h-full w-full object-cover"
        />
      </div>
      <h4
        className={cn(
          textStyles.h4,
          "mt-5 break-words",
          compact ? "text-xl leading-snug" : "sm:text-[26px] sm:leading-[31px]"
        )}
      >
        {member.name}
      </h4>
      <p
        className={cn(
          textStyles.bodySm,
          "mt-1 break-words text-muted",
          !compact && "sm:leading-6"
        )}
      >
        {member.role}
      </p>
    </article>
  );
}

function LeadershipTeamBlock() {
  const { carouselRef, activeIndex, goToSlide } = useHorizontalCarousel({
    slideSelector: "[data-leadership-slide]",
    slideCount: leadershipTeam.length,
    activeMediaQuery: "(max-width: 639px)",
  });

  return (
    <motion.section
      {...fadeUpInView}
      className="border-t border-slate-200/80 pt-14"
    >
      <div className="mx-auto max-w-5xl text-center">
        <span className={textStyles.eyebrowPill}>Our Team</span>
        <h3 className={cn(textStyles.h2, "mt-5")}>Leadership Team</h3>
        <p className={cn(textStyles.body, "mt-3")}>
          Industry experts building the future of data intelligence
        </p>
      </div>

      {/* Mobile: swipeable carousel */}
      <div className="mt-10 w-full min-w-0 overflow-hidden sm:hidden">
        <div
          ref={carouselRef}
          className="flex w-full max-w-full overflow-x-auto overscroll-x-contain scroll-smooth pb-2 snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          aria-roledescription="carousel"
          aria-label="Leadership team"
        >
          {leadershipTeam.map((member) => (
            <div
              key={member.name}
              data-leadership-slide
              className="box-border w-full max-w-full min-w-0 shrink-0 grow-0 basis-full snap-center"
            >
              <LeadershipMemberCard member={member} compact />
            </div>
          ))}
        </div>

        {leadershipTeam.length > 1 ? (
          <div
            className="mt-6 flex justify-center gap-2"
            role="tablist"
            aria-label="Leadership team slides"
          >
            {leadershipTeam.map((member, index) => (
              <button
                key={member.name}
                type="button"
                role="tab"
                aria-selected={activeIndex === index}
                aria-label={`Go to ${member.name}`}
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

      {/* Tablet/desktop: grid */}
      <div className="mt-10 hidden gap-8 sm:grid sm:grid-cols-2 lg:grid-cols-4">
        {leadershipTeam.map((member) => (
          <LeadershipMemberCard key={member.name} member={member} />
        ))}
      </div>
    </motion.section>
  );
}

type Testimonial = (typeof testimonials)[number];

function TestimonialCard({
  item,
  compact = false,
}: {
  item: Testimonial;
  compact?: boolean;
}) {
  return (
    <article
      className={cn(
        "box-border w-full max-w-full min-w-0 rounded-2xl border border-slate-200/90 bg-white shadow-[0_8px_22px_rgba(15,23,42,0.06)]",
        compact ? "px-5 py-6" : "px-6 py-8"
      )}
    >
      <p
        className={cn(
          "mb-4 leading-none text-cyan-200",
          compact ? "text-5xl" : "text-6xl"
        )}
      >
        “
      </p>
      <p
        className={cn(
          textStyles.bodySm,
          "break-words",
          compact ? "min-h-0" : "min-h-[120px]"
        )}
      >
        {item.quote}
      </p>
      <div className="mt-5 flex min-w-0 items-center gap-3">
        <div className="h-12 w-12 shrink-0 overflow-hidden rounded-full border border-slate-200">
          <Image
            src={item.image}
            alt={item.name}
            width={48}
            height={48}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="min-w-0 text-left">
          <p
            className={cn(
              textStyles.bodySm,
              "truncate font-semibold text-primary"
            )}
          >
            {item.name}
          </p>
          <p className={cn(textStyles.caption, "truncate text-muted")}>
            {item.role}
          </p>
          <p className={cn(textStyles.caption, "truncate font-medium text-accent")}>
            {item.company}
          </p>
        </div>
      </div>
    </article>
  );
}

function TestimonialsBlock() {
  const { carouselRef, activeIndex, goToSlide } = useHorizontalCarousel({
    slideSelector: "[data-testimonial-slide]",
    slideCount: testimonials.length,
    activeMediaQuery: "(max-width: 1023px)",
  });

  return (
    <motion.section
      {...fadeUpInView}
      className="border-t border-slate-200/80 pt-14"
    >
      <div className="mx-auto max-w-5xl text-center">
        <span className={textStyles.eyebrowPill}>Testimonials</span>
        <h3 className={cn(textStyles.h2, "mt-5")}>
          Trusted by Industry Leaders
        </h3>
        <p className={cn(textStyles.body, "mt-3")}>
          See what our clients say about transforming their data operations
        </p>
      </div>

      {/* Mobile/tablet: swipeable carousel */}
      <div className="mt-10 w-full min-w-0 overflow-hidden lg:hidden">
        <div
          ref={carouselRef}
          className="flex w-full max-w-full overflow-x-auto overscroll-x-contain scroll-smooth pb-2 snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          aria-roledescription="carousel"
          aria-label="Client testimonials"
        >
          {testimonials.map((item) => (
            <div
              key={item.name}
              data-testimonial-slide
              className="box-border w-full max-w-full min-w-0 shrink-0 grow-0 basis-full snap-center"
            >
              <TestimonialCard item={item} compact />
            </div>
          ))}
        </div>

        {testimonials.length > 1 ? (
          <div
            className="mt-6 flex justify-center gap-2"
            role="tablist"
            aria-label="Testimonial slides"
          >
            {testimonials.map((item, index) => (
              <button
                key={item.name}
                type="button"
                role="tab"
                aria-selected={activeIndex === index}
                aria-label={`Go to testimonial from ${item.name}`}
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

      {/* Desktop: three-column grid */}
      <div className="mt-10 hidden gap-4 lg:grid lg:grid-cols-3">
        {testimonials.map((item) => (
          <TestimonialCard key={item.name} item={item} />
        ))}
      </div>

      <div className="mt-8 flex items-center justify-center gap-3 text-sm text-slate-600">
        <div className="flex -space-x-2">
          {testimonials.slice(0, 3).map((item) => (
            <div
              key={`trusted-${item.name}`}
              className="h-7 w-7 overflow-hidden rounded-full border-2 border-white"
            >
              <Image
                src={item.image}
                alt={item.name}
                width={28}
                height={28}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
        <p className={cn(textStyles.caption, "text-secondary")}>
          Trusted by{" "}
          <span className={cn(textStyles.caption, "font-semibold text-accent")}>
            500+
          </span>{" "}
          companies worldwide
        </p>
      </div>
    </motion.section>
  );
}

export default function AboutSection() {
  return (
    <MorphSection
      id="about"
      variant="light"
      className="bg-white py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="space-y-10">
          <motion.div {...fadeUpInView} className="max-w-4xl">
            <span className={textStyles.eyebrowPill}>DESIGNED FOR EVERYONE</span>
            <h2 className={cn(textStyles.h2Intro, "mt-5")}>
              Human-Centered AI for Every Business
            </h2>
            <p className={cn(textStyles.body, "mt-6 max-w-3xl")}>
              We believe intelligence should amplify human capabilities-not
              replace them. INSIYA is designed to make every team member more
              effective, from executives to analysts.
            </p>
          </motion.div>

          <motion.div
            {...fadeUpInView}
            transition={{ ...fadeUpInView.transition, delay: 0.05 }}
            className="grid grid-cols-1 gap-5 lg:grid-cols-[1fr_1.35fr] lg:items-stretch"
          >
            <article className="group relative w-full overflow-hidden rounded-3xl border border-slate-200/90 bg-slate-100 max-sm:rounded-l-3xl max-sm:rounded-r-none sm:rounded-3xl">
              <div className="relative h-full min-h-[30rem] w-full lg:min-h-[36rem]">
                <Image
                  src="/images/images_06.jpg"
                  alt="Team collaborating with sticky notes"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover max-sm:object-right"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-black/40"
                  aria-hidden="true"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/30 via-slate-900/10 to-slate-950/85"
                  aria-hidden="true"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="mb-4 h-[3px] w-10 rounded-full bg-cyan-500" />
                  <p className={cn(textStyles.bodyOnDark, "max-w-md")}>
                    INSIYA&apos;s no-code platform democratizes data analytics
                    across your organization. Business users can ask questions
                    in natural language, build dashboards with drag-and-drop
                    simplicity, and uncover insights without waiting on
                    technical teams.
                  </p>
                </div>
              </div>
            </article>

            <div className="flex h-full flex-col gap-5 lg:min-h-[36rem]">
              <article className="w-full rounded-3xl border border-slate-200/90 bg-white p-6 shadow-[0_8px_24px_rgba(15,23,42,0.08)] max-sm:rounded-l-3xl max-sm:rounded-r-none sm:rounded-3xl">
                <p className={textStyles.lead}>
                  Our AI engine handles the complexity-data integration,
                  transformation, modeling, and prediction-so your team can
                  focus on decision-making, not data wrangling.
                </p>
              </article>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {capabilityCards.map((card) => (
                  <article
                    key={card.title}
                    className="w-full rounded-2xl border border-slate-200/90 bg-white p-5 shadow-[0_8px_22px_rgba(15,23,42,0.08)] max-sm:rounded-l-2xl max-sm:rounded-r-none sm:rounded-2xl"
                  >
                    <div className="mb-4 h-[3px] w-9 rounded-full bg-cyan-500" />
                    <h3 className={textStyles.cardTitle}>{card.title}</h3>
                    <p className={cn(textStyles.bodySm, "mt-3")}>
                      {card.description}
                    </p>
                  </article>
                ))}
              </div>

              <article className="mt-auto w-full rounded-3xl bg-gradient-to-r from-cyan-600 to-cyan-500 p-7 shadow-[0_10px_28px_rgba(6,182,212,0.28)] max-sm:rounded-l-3xl max-sm:rounded-r-none sm:rounded-3xl">
                <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className={cn(textStyles.h3Dark, "sm:text-[26px] sm:leading-[31px]")}>
                      Ready to transform your data workflow?
                    </h3>
                    <p className={cn(textStyles.bodySmOnDark, "mt-3 max-w-sm")}>
                      Discover how our platform empowers your entire
                      organization
                    </p>
                  </div>
                  <button
                    type="button"
                    className="inline-flex min-h-[52px] items-center justify-center whitespace-nowrap rounded-xl bg-white px-8 text-base font-semibold text-cyan-700 shadow-[0_8px_18px_rgba(3,105,161,0.22)] transition-colors hover:bg-cyan-50"
                  >
                    Learn More About our Platform
                  </button>
                </div>
              </article>
            </div>
          </motion.div>

          <LeadershipTeamBlock />

          <TestimonialsBlock />

          <motion.section
            {...fadeUpInView}
            className="relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2 pt-8"
          >
            <article className="relative overflow-hidden bg-[#0b1425] px-6 py-16 text-center shadow-[0_20px_50px_rgba(2,8,23,0.55)] sm:px-10 sm:py-20">
              <Image
                src="/images/images_01.png"
                alt=""
                fill
                sizes="100vw"
                className="object-cover opacity-25"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-900/55 to-slate-950/80" />
              <div className="relative z-10 mx-auto max-w-3xl">
                <span
                  className={cn(
                    textStyles.eyebrowPill,
                    "bg-cyan-500/20 text-cyan-200"
                  )}
                >
                  Start Your Journey
                </span>
                <h3 className={cn(textStyles.h2Dark, "mt-5")}>
                  <span className='text-white'>Ready to Transform Your </span>
                  <span className='bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-[rgba(0,0,0,0)]'>
                    Data Operations?
                  </span>
                </h3>
                <p className={cn(textStyles.bodyOnDark, "mx-auto mt-5 max-w-2xl")}>
                  Join hundreds of leading companies that have modernized their
                  analytics with INSIYA
                </p>

                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <button
                    type="button"
                    suppressHydrationWarning
                    className={cn(
                      textStyles.btn,
                      "inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 text-text-primary shadow-[0_10px_24px_rgba(8,145,178,0.4)] transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(8,145,178,0.5)]"
                    )}
                  >
                    Get Started Free
                    <span aria-hidden>→</span>
                  </button>
                  <button
                    type="button"
                    suppressHydrationWarning
                    className={cn(
                      textStyles.btn,
                      "inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-8 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                    )}
                  >
                    Watch Demo
                    <span aria-hidden>▶</span>
                  </button>
                </div>

                <div className="mt-7 flex flex-wrap items-center justify-center gap-x-7 gap-y-2">
                  <span
                    className={cn(
                      textStyles.caption,
                      "inline-flex items-center gap-2 text-white/60"
                    )}
                  >
                    <span className="text-cyan-400">★</span>
                    No credit card required
                  </span>
                  <span
                    className={cn(
                      textStyles.caption,
                      "inline-flex items-center gap-2 text-white/60"
                    )}
                  >
                    <span className="text-cyan-400">★</span>
                    Free 14-day trial
                  </span>
                  <span
                    className={cn(
                      textStyles.caption,
                      "inline-flex items-center gap-2 text-white/60"
                    )}
                  >
                    <span className="text-cyan-400">★</span>
                    Setup in minutes
                  </span>
                </div>
              </div>
            </article>
          </motion.section>
        </div>
      </div>
    </MorphSection>
  );
}
