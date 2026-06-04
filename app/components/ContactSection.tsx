"use client";

import { motion } from "motion/react";
import { cn, textStyles } from "@/app/lib/typography";
import MorphSection from "./MorphSection";

const easeSmooth = [0.25, 0.46, 0.45, 0.94] as const;

const headerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const headerItemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeSmooth },
  },
};

const formFromBottomVariants = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeSmooth },
  },
};

export default function ContactSection() {
  return (
    <MorphSection
      id="contact"
      variant="light"
      className="bg-white py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-[1200px]">
        <motion.div
          className="mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={headerContainerVariants}
        >
          <motion.h2 className={textStyles.h2} variants={headerItemVariants}>
            Get in Touch
          </motion.h2>
          <motion.p
            className={cn(textStyles.body, "mt-3")}
            variants={headerItemVariants}
          >
            Ready to transform your data operations? Let&apos;s talk about your
            needs.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_0.95fr]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={formFromBottomVariants}
        >
          <form
            className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_10px_26px_rgba(15,23,42,0.06)]"
            data-contact-form
            suppressHydrationWarning
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 placeholder:text-slate-400 transition-all focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/45 focus:shadow-[0_0_0_2px_rgba(6,182,212,0.18)]"
                  placeholder="First Name *"
                  suppressHydrationWarning
                />
              </div>
              <div>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 placeholder:text-slate-400 transition-all focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/45 focus:shadow-[0_0_0_2px_rgba(6,182,212,0.18)]"
                  placeholder="Last Name *"
                  suppressHydrationWarning
                />
              </div>
            </div>

            <div>
              <input
                type="email"
                id="businessEmail"
                name="businessEmail"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 placeholder:text-slate-400 transition-all focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/45 focus:shadow-[0_0_0_2px_rgba(6,182,212,0.18)]"
                placeholder="Business Email *"
                suppressHydrationWarning
              />
            </div>

            <div>
              <input
                type="text"
                id="companyName"
                name="companyName"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 placeholder:text-slate-400 transition-all focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/45 focus:shadow-[0_0_0_2px_rgba(6,182,212,0.18)]"
                placeholder="Company Name"
                suppressHydrationWarning
              />
            </div>

            <div>
              <label
                htmlFor="interest"
                className={cn(textStyles.label, "mb-2 block")}
              >
                What are you interested in?
              </label>
              <select
                id="interest"
                name="interest"
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-700 transition-all focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/45 focus:shadow-[0_0_0_2px_rgba(6,182,212,0.18)]"
                defaultValue=""
              >
                <option value="" disabled>
                  Select a topic
                </option>
                <option value="analytics">Analytics Platform</option>
                <option value="integration">Data Integration</option>
                <option value="automation">Automation</option>
                <option value="ai">AI Solutions</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className={cn(textStyles.label, "mb-2 block")}
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 placeholder:text-slate-400 transition-all focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/45 focus:shadow-[0_0_0_2px_rgba(6,182,212,0.18)]"
                placeholder="Tell us about your data analytics needs..."
                suppressHydrationWarning
              />
            </div>

            <label className="mt-2 inline-flex items-start gap-2 text-sm text-slate-500">
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 rounded border-slate-300 text-cyan-600 focus:ring-cyan-500/40"
              />
              I agree to receive communications from INSIYA about products,
              services, and events
            </label>

            <button
              type="submit"
              className="mt-2 w-full rounded-xl bg-gradient-to-r from-cyan-600 to-blue-500 px-8 py-3.5 text-base font-semibold text-white shadow-[0_10px_22px_rgba(6,182,212,0.3)] transition-all hover:from-cyan-700 hover:to-blue-600 hover:shadow-[0_14px_30px_rgba(6,182,212,0.4)]"
              suppressHydrationWarning
            >
              Submit Request
            </button>
          </form>

          <div className="space-y-5">
            <article className="rounded-2xl bg-[linear-gradient(135deg,#00799A_0%,#008FB4_50%,#007A76_100%)] p-6 text-white shadow-[0_14px_32px_rgba(14,116,144,0.32)]">
              <h3 className={cn(textStyles.h3Dark, "sm:text-[24px]")}>
                Global Presence
              </h3>
              <p className={cn(textStyles.bodySmOnDark, "mt-3")}>
                We serve customers across the globe with local expertise and
                24/7 support.
              </p>
              <div className="mt-5 space-y-4">
                <div>
                  <p className={cn(textStyles.bodySm, "font-semibold text-white sm:leading-[26px]")}>
                    ◎ North America
                  </p>
                  <p className={cn(textStyles.caption, "text-white/80")}>
                    San Francisco, New York, Toronto
                  </p>
                </div>
                <div>
                  <p className={cn(textStyles.bodySm, "font-semibold text-white sm:leading-[26px]")}>
                    ◎ Europe
                  </p>
                  <p className={cn(textStyles.caption, "text-white/80")}>
                    London, Berlin, Paris
                  </p>
                </div>
                <div>
                  <p className={cn(textStyles.bodySm, "font-semibold text-white sm:leading-[26px]")}>
                    ◎ Asia-Pacific
                  </p>
                  <p className={cn(textStyles.caption, "text-white/80")}>
                    Singapore, Tokyo, Sydney
                  </p>
                </div>
              </div>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_10px_24px_rgba(15,23,42,0.06)]">
              <h3 className={cn(textStyles.h3, "sm:text-[24px] sm:leading-[29px]")}>
                24/7 Support
              </h3>
              <p className={cn(textStyles.bodySm, "mt-3")}>
                Our customer success team is available around the clock to
                ensure your analytics initiatives succeed.
              </p>
              <button
                type="button"
                className={cn(
                  textStyles.btn,
                  "mt-5 w-full rounded-xl bg-gradient-to-r from-cyan-600 to-blue-500 px-8 py-3 font-medium text-white shadow-[0_10px_20px_rgba(6,182,212,0.28)] transition-all hover:from-cyan-700 hover:to-blue-600"
                )}
              >
                Contact Support
              </button>
            </article>
          </div>
        </motion.div>
      </div>
    </MorphSection>
  );
}
