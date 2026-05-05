"use client";

import Image from "next/image";
import { motion } from "motion/react";
import MorphSection from "./MorphSection";

const easeSmooth = [0.25, 0.46, 0.45, 0.94] as const;

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeSmooth },
  },
};

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
      '"INSIA transformed our data operations completely. What used to take our team weeks now happens in real-time. The ROI was immediate."',
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
      '"We consolidated 5 different tools into INSIA and cut our analytics costs by 40%. The AI predictions have become essential to our planning."',
    name: "Emily Watson",
    role: "Director of Operations",
    company: "Enterprise Inc",
    image: "/images/images_06.jpg",
  },
] as const;

export default function AboutSection() {
  return (
    <MorphSection
      id="about"
      variant="light"
      className="bg-white py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-[1200px]">
        <motion.div
          className="space-y-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <motion.div variants={itemVariants} className="max-w-4xl">
            <span className='inline-flex rounded-full bg-cyan-100 px-4 py-1.5 text-xs font-semibold leading-5 text-[oklch(0.52_0.105_223.128)] sm:text-[14px] [font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif]'>
              Designed for Everyone
            </span>
            <h2 className='mt-5 text-3xl font-semibold leading-tight tracking-tight text-[oklch(0.208_0.042_265.755)] sm:text-4xl md:text-[44px] md:leading-[53px] [font-family:"General_Sans",-apple-system,BlinkMacSystemFont,sans-serif]'>
              Human-Centered AI for Every Business
            </h2>
            <p className='mt-6 max-w-3xl text-base font-normal leading-7 text-[oklch(0.446_0.043_257.281)] sm:text-[17px] md:text-[18px] md:leading-[29px] [font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif]'>
              We believe intelligence should amplify human capabilities-not
              replace them. INSIA is designed to make every team member more
              effective, from executives to analysts.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 gap-5 lg:grid-cols-[1fr_1.35fr] lg:items-stretch"
          >
            <article className="group relative overflow-hidden rounded-3xl border border-slate-200/90 bg-slate-100">
              <div className="relative h-full min-h-[30rem] w-full lg:min-h-[36rem]">
                <Image
                  src="/images/images_06.jpg"
                  alt="Team collaborating with sticky notes"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/20 via-slate-900/10 to-slate-950/75" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="mb-4 h-[3px] w-10 rounded-full bg-cyan-500" />
                  <p className='max-w-md text-base font-normal leading-7 text-[oklab(0.999994_0.0000455678_0.0000200868_/_0.9)] sm:text-[17px] md:text-[18px] md:leading-[29px] [font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif]'>
                    INSIA&apos;s no-code platform democratizes data analytics
                    across your organization. Business users can ask questions
                    in natural language, build dashboards with drag-and-drop
                    simplicity, and uncover insights without waiting on
                    technical teams.
                  </p>
                </div>
              </div>
            </article>

            <div className="flex h-full flex-col gap-5 lg:min-h-[36rem]">
              <article className="rounded-3xl border border-slate-200/90 bg-white p-6 shadow-[0_8px_24px_rgba(15,23,42,0.08)]">
                <p className='text-lg font-light leading-8 text-[oklch(0.372_0.044_257.287)] sm:text-[20px] sm:leading-[35px] [font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif]'>
                  Our AI engine handles the complexity-data integration,
                  transformation, modeling, and prediction-so your team can
                  focus on decision-making, not data wrangling.
                </p>
              </article>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {capabilityCards.map((card) => (
                  <article
                    key={card.title}
                    className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-[0_8px_22px_rgba(15,23,42,0.08)]"
                  >
                    <div className="mb-4 h-[3px] w-9 rounded-full bg-cyan-500" />
                    <h3 className='text-base font-bold leading-5 text-[oklch(0.208_0.042_265.755)] sm:text-[17px] [font-family:"General_Sans",-apple-system,BlinkMacSystemFont,sans-serif]'>
                      {card.title}
                    </h3>
                    <p className='mt-3 text-sm font-normal leading-6 text-[oklch(0.446_0.043_257.281)] sm:text-[15px] [font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif]'>
                      {card.description}
                    </p>
                  </article>
                ))}
              </div>

              <article className="mt-auto max-w-[760px] rounded-3xl bg-gradient-to-r from-cyan-600 to-cyan-500 p-7 shadow-[0_10px_28px_rgba(6,182,212,0.28)]">
                <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className='text-2xl font-bold leading-tight text-white sm:text-[26px] sm:leading-[31px] [font-family:"General_Sans",-apple-system,BlinkMacSystemFont,sans-serif]'>
                      Ready to transform your data workflow?
                    </h3>
                    <p className='mt-3 max-w-sm text-[15px] font-normal leading-6 text-[oklab(0.984_-0.0177531_-0.00676966_/_0.9)] sm:text-[16px] sm:leading-[26px] [font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif]'>
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

          <motion.section
            variants={itemVariants}
            className="border-t border-slate-200/80 pt-14"
          >
            <div className="mx-auto max-w-5xl text-center">
              <span className='inline-flex rounded-full bg-cyan-100 px-4 py-1.5 text-xs font-semibold leading-5 text-[oklch(0.52_0.105_223.128)] sm:text-[14px] [font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif]'>
                Our Team
              </span>
              <h3 className='mt-5 text-3xl font-semibold leading-tight text-[oklch(0.208_0.042_265.755)] sm:text-4xl md:text-[44px] md:leading-[53px] [font-family:"General_Sans",-apple-system,BlinkMacSystemFont,sans-serif]'>
                Leadership Team
              </h3>
              <p className='mt-3 text-base font-normal leading-7 text-[oklch(0.446_0.043_257.281)] sm:text-[17px] md:text-[18px] md:leading-[31px] [font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif]'>
                Industry experts building the future of data intelligence
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {leadershipTeam.map((member) => (
                <article key={member.name} className="text-center">
                  <div className="mx-auto h-64 w-64 overflow-hidden rounded-full border border-slate-200 bg-slate-100 shadow-[0_8px_20px_rgba(15,23,42,0.08)]">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={176}
                      height={176}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h4 className='mt-5 text-2xl font-bold leading-tight text-[oklch(0.208_0.042_265.755)] sm:text-[26px] sm:leading-[31px] [font-family:"General_Sans",-apple-system,BlinkMacSystemFont,sans-serif]'>
                    {member.name}
                  </h4>
                  <p className='mt-1 text-[15px] font-normal leading-6 text-[oklch(0.554_0.046_257.417)] sm:text-[16px] [font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif]'>{member.role}</p>
                </article>
              ))}
            </div>
          </motion.section>

          <motion.section
            variants={itemVariants}
            className="border-t border-slate-200/80 pt-14"
          >
            <div className="mx-auto max-w-5xl text-center">
              <span className='inline-flex rounded-full bg-cyan-100 px-4 py-1.5 text-xs font-semibold leading-5 text-[oklch(0.52_0.105_223.128)] sm:text-[14px] [font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif]'>
                Testimonials
              </span>
              <h3 className='mt-5 text-3xl font-semibold leading-tight text-[oklch(0.208_0.042_265.755)] sm:text-4xl md:text-[44px] md:leading-[53px] [font-family:"General_Sans",-apple-system,BlinkMacSystemFont,sans-serif]'>
                Trusted by Industry Leaders
              </h3>
              <p className='mt-3 text-base font-normal leading-7 text-[oklch(0.446_0.043_257.281)] sm:text-[17px] md:text-[18px] md:leading-[29px] [font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif]'>
                See what our clients say about transforming their data
                operations
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-3">
              {testimonials.map((item) => (
                <article
                  key={item.name}
                  className="rounded-2xl border border-slate-200/90 bg-white px-6 py-8 shadow-[0_8px_22px_rgba(15,23,42,0.06)]"
                >
                  <p className="mb-4 text-6xl leading-none text-cyan-200">“</p>
                  <p className='min-h-[120px] text-[15px] font-normal leading-6 text-[oklch(0.372_0.044_257.287)] sm:text-[16px] sm:leading-[26px] [font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif]'>
                    {item.quote}
                  </p>
                  <div className="mt-5 flex items-center gap-3">
                    <div className="h-12 w-12 overflow-hidden rounded-full border border-slate-200">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={48}
                        height={48}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="text-left">
                      <p className='text-[15px] font-semibold leading-6 text-[oklch(0.208_0.042_265.755)] [font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif]'>
                        {item.name}
                      </p>
                      <p className='text-[14px] font-normal leading-5 text-[oklch(0.554_0.046_257.417)] [font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif]'>{item.role}</p>
                      <p className='text-[12px] font-medium leading-4 text-[oklch(0.609_0.126_221.723)] [font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif]'>{item.company}</p>
                    </div>
                  </div>
                </article>
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
              <p className='text-[14px] font-medium leading-5 text-[oklch(0.372_0.044_257.287)] [font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif]'>
                Trusted by <span className='text-[14px] font-semibold leading-5 text-[oklch(0.609_0.126_221.723)] [font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif]'>500+</span> companies
                worldwide
              </p>
            </div>
          </motion.section>

          <motion.section
            variants={itemVariants}
            className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 pt-8"
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
                <span className='inline-flex rounded-full bg-cyan-500/20 px-4 py-1.5 text-xs font-semibold leading-5 text-[oklch(0.865_0.127_207.078)] sm:text-[14px] [font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif]'>
                  Start Your Journey
                </span>
                <h3 className='mt-5 text-3xl font-semibold leading-tight sm:text-4xl md:text-[44px] md:leading-[53px] [font-family:"General_Sans",-apple-system,BlinkMacSystemFont,sans-serif]'>
                  <span className='text-white'>Ready to Transform Your </span>
                  <span className='bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-[rgba(0,0,0,0)]'>
                    Data Operations?
                  </span>
                </h3>
                <p className='mx-auto mt-5 max-w-2xl text-base font-normal leading-7 text-[oklab(0.999994_0.0000455677_0.0000200868_/_0.7)] sm:text-[17px] md:text-[18px] md:leading-[31px] [font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif]'>
                  Join hundreds of leading companies that have modernized their
                  analytics with INSIA
                </p>

                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <button
                    type="button"
                    suppressHydrationWarning
                    className='inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 text-base font-semibold leading-7 text-[oklch(0.208_0.042_265.755)] sm:text-[18px] [font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif] shadow-[0_10px_24px_rgba(8,145,178,0.4)] transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(8,145,178,0.5)]'
                  >
                    Get Started Free
                    <span aria-hidden>→</span>
                  </button>
                  <button
                    type="button"
                    suppressHydrationWarning
                    className='inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-8 text-base font-semibold leading-7 text-white sm:text-[18px] [font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif] backdrop-blur-sm transition-colors hover:bg-white/20'
                  >
                    Watch Demo
                    <span aria-hidden>▶</span>
                  </button>
                </div>

                <div className="mt-7 flex flex-wrap items-center justify-center gap-x-7 gap-y-2">
                  <span className='inline-flex items-center gap-2 text-[14px] font-normal leading-5 text-[oklab(0.999994_0.0000455677_0.0000200868_/_0.6)] [font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif]'>
                    <span className="text-cyan-400">★</span>
                    No credit card required
                  </span>
                  <span className='inline-flex items-center gap-2 text-[14px] font-normal leading-5 text-[oklab(0.999994_0.0000455677_0.0000200868_/_0.6)] [font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif]'>
                    <span className="text-cyan-400">★</span>
                    Free 14-day trial
                  </span>
                  <span className='inline-flex items-center gap-2 text-[14px] font-normal leading-5 text-[oklab(0.999994_0.0000455677_0.0000200868_/_0.6)] [font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif]'>
                    <span className="text-cyan-400">★</span>
                    Setup in minutes
                  </span>
                </div>
              </div>
            </article>
          </motion.section>
        </motion.div>
      </div>
    </MorphSection>
  );
}
