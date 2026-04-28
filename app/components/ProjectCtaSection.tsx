import Link from "next/link";

export default function ProjectCtaSection() {
  return (
    <section id="project-cta" className="border-t border-slate-200 bg-[#FAFBFC] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-[74rem] text-center">
        <h2 className="text-5xl font-bold leading-tight text-slate-900 md:text-6xl">
          Let&apos;s build your next project
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-xl leading-7 text-slate-600">
          Ready to turn your ideas into reality? Get in touch with our team today.
        </p>

        <div className="mt-10">
          <Link
            href="#project-cta"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#2563eb] to-[#3b82f6] px-8 py-3 text-base font-semibold text-white shadow-[0_12px_24px_rgba(37,99,235,0.35)] transition-transform duration-200 hover:-translate-y-0.5"
          >
            Start Project <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
