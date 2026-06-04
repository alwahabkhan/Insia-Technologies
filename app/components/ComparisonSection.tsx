const oldWayPoints = [
  "Juggling 5 different tools that don't talk to each other",
  "Spending 3 hours building a report no one reads",
  "Waiting for the data team to get back to you next week",
  "Learning SQL because you have to",
  "Staring at last month's numbers",
];

const insiyaPoints = [
  "One place. All your data. Finally.",
  "Ask a question, get an answer. 5 seconds.",
  "Be the data team. No waiting.",
  "Just type what you want to know",
  "AI shows you next month's numbers",
];

export default function ComparisonSection() {
  return (
    <section id="comparison" className="bg-[#FFFFFF] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-[74rem]">
        <div className="text-center">
          <h2 className='font-["ui-sans-serif,system-ui,sans-serif,\\"Apple_Color_Emoji\\",\\"Segoe_UI_Emoji\\",\\"Segoe_UI_Symbol\\",\\"Noto_Color_Emoji\\""] text-3xl leading-[1.1] font-bold text-[oklch(0.208_0.042_265.755)] sm:text-4xl md:text-5xl lg:text-[56px] xl:text-[60px] xl:leading-[60px]'>
            A better way to work with data
          </h2>
          <p className='mx-auto mt-4 max-w-2xl font-["ui-sans-serif,system-ui,sans-serif,\\"Apple_Color_Emoji\\",\\"Segoe_UI_Emoji\\",\\"Segoe_UI_Symbol\\",\\"Noto_Color_Emoji\\""] text-base leading-7 font-normal text-[oklch(0.446_0.043_257.281)] sm:text-lg md:text-xl'>
            See what changes when you switch to INSIYA
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_1px_0_rgba(15,23,42,0.04)] sm:p-6">
            <h3 className='font-["ui-sans-serif,system-ui,sans-serif,\\"Apple_Color_Emoji\\",\\"Segoe_UI_Emoji\\",\\"Segoe_UI_Symbol\\",\\"Noto_Color_Emoji\\""] text-lg leading-7 font-bold text-[oklch(0.208_0.042_265.755)] sm:text-xl'>
              The Old Way
            </h3>
            <p className='mt-2 font-["ui-sans-serif,system-ui,sans-serif,\\"Apple_Color_Emoji\\",\\"Segoe_UI_Emoji\\",\\"Segoe_UI_Symbol\\",\\"Noto_Color_Emoji\\""] text-sm leading-5 font-medium text-[oklch(0.554_0.046_257.417)]'>
              Slow, fragmented, manual
            </p>

            <div className="mt-5 space-y-3">
              {oldWayPoints.map((point) => (
                <div
                  key={point}
                  className='rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 font-["ui-sans-serif,system-ui,sans-serif,\\"Apple_Color_Emoji\\",\\"Segoe_UI_Emoji\\",\\"Segoe_UI_Symbol\\",\\"Noto_Color_Emoji\\""] text-sm leading-[23px] font-normal text-[oklch(0.372_0.044_257.287)]'
                >
                  {point}
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-2xl border border-blue-500 bg-white p-5 shadow-[0_8px_24px_rgba(37,99,235,0.14)] sm:p-6">
            <h3 className='font-["ui-sans-serif,system-ui,sans-serif,\\"Apple_Color_Emoji\\",\\"Segoe_UI_Emoji\\",\\"Segoe_UI_Symbol\\",\\"Noto_Color_Emoji\\""] text-lg leading-7 font-bold text-[oklch(0.208_0.042_265.755)] sm:text-xl'>
              With INSIYA
            </h3>
            <p className='mt-2 font-["ui-sans-serif,system-ui,sans-serif,\\"Apple_Color_Emoji\\",\\"Segoe_UI_Emoji\\",\\"Segoe_UI_Symbol\\",\\"Noto_Color_Emoji\\""] text-sm leading-5 font-semibold text-[oklch(0.546_0.245_262.881)]'>
              Fast, unified, intelligent
            </p>

            <div className="mt-5 space-y-3">
              {insiyaPoints.map((point) => (
                <div
                  key={point}
                  className='rounded-xl border border-blue-100 bg-blue-50/60 px-4 py-3 font-["ui-sans-serif,system-ui,sans-serif,\\"Apple_Color_Emoji\\",\\"Segoe_UI_Emoji\\",\\"Segoe_UI_Symbol\\",\\"Noto_Color_Emoji\\""] text-sm leading-[23px] font-medium text-[oklch(0.208_0.042_265.755)]'
                >
                  {point}
                </div>
              ))}
            </div>
          </article>
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="#contact"
            className='relative inline-flex items-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-r from-[#2563eb] to-[#3b82f6] px-12 py-4 font-["ui-sans-serif,system-ui,sans-serif,\\"Apple_Color_Emoji\\",\\"Segoe_UI_Emoji\\",\\"Segoe_UI_Symbol\\",\\"Noto_Color_Emoji\\""] text-base leading-6 font-semibold text-white shadow-[0_14px_30px_rgba(37,99,235,0.4)] transition-transform duration-200 hover:-translate-y-0.5'
          >
            <span
              aria-hidden
              className="pointer-events-none absolute left-0 top-0 h-0 w-0 border-t-[28px] border-r-[16px] border-t-white/25 border-r-transparent"
            />
            <span className='font-["ui-sans-serif,system-ui,sans-serif,\\"Apple_Color_Emoji\\",\\"Segoe_UI_Emoji\\",\\"Segoe_UI_Symbol\\",\\"Noto_Color_Emoji\\""] text-base leading-6 font-semibold text-white'>
              See how it works
            </span>
            <span
              aria-hidden
              className="inline-flex h-6 w-6 items-center justify-center rounded-full border-2 border-white text-[10px]"
            >
              ▷
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
