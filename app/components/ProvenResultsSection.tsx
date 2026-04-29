const results = [
  {
    value: "90%",
    title: "Faster answers",
    description: "Questions that took 2 days now take 2 minutes",
  },
  {
    value: "60%",
    title: "Lower costs",
    description: "Replace 3 tools with one that actually works",
  },
  {
    value: "90%",
    title: "Faster setup",
    description: "Live in 15 minutes, not 15 weeks",
  },
  {
    value: "10x",
    title: "More productive",
    description: "Your team makes 10x more data-driven calls",
  },
];

export default function ProvenResultsSection() {
  return (
    <section className="bg-[#F8FAFC] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-[74rem]">
        <div className="text-center">
          <h2 className='font-["ui-sans-serif,system-ui,sans-serif,\\"Apple_Color_Emoji\\",\\"Segoe_UI_Emoji\\",\\"Segoe_UI_Symbol\\",\\"Noto_Color_Emoji\\""] text-3xl leading-[1.1] font-bold text-[oklch(0.208_0.042_265.755)] sm:text-4xl md:text-5xl lg:text-[56px] xl:text-[60px] xl:leading-[60px]'>
            Proven results
          </h2>
          <p className='mx-auto mt-4 max-w-2xl font-["ui-sans-serif,system-ui,sans-serif,\\"Apple_Color_Emoji\\",\\"Segoe_UI_Emoji\\",\\"Segoe_UI_Symbol\\",\\"Noto_Color_Emoji\\""] text-base leading-7 font-normal text-[oklch(0.446_0.043_257.281)] sm:text-lg md:text-xl'>
            Average improvements in the first 3 months
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {results.map((result) => (
            <article
              key={result.title}
              className="group cursor-pointer rounded-2xl border border-slate-200 bg-white px-6 py-8 text-center transition-all duration-200 hover:-translate-y-1 hover:border-blue-300 hover:shadow-[0_12px_26px_rgba(37,99,235,0.14)]"
            >
              <p className='font-["ui-sans-serif,system-ui,sans-serif,\\"Apple_Color_Emoji\\",\\"Segoe_UI_Emoji\\",\\"Segoe_UI_Symbol\\",\\"Noto_Color_Emoji\\""] text-4xl leading-none font-bold text-[oklch(0.546_0.245_262.881)] transition-transform duration-200 group-hover:scale-[1.03] sm:text-5xl md:text-6xl lg:text-[60px] lg:leading-[60px]'>
                {result.value}
              </p>
              <p className='mt-4 font-["ui-sans-serif,system-ui,sans-serif,\\"Apple_Color_Emoji\\",\\"Segoe_UI_Emoji\\",\\"Segoe_UI_Symbol\\",\\"Noto_Color_Emoji\\""] text-base leading-7 font-bold text-slate-900 transition-colors duration-200 group-hover:text-blue-600 md:text-lg'>
                {result.title}
              </p>
              <p className='mt-3 font-["ui-sans-serif,system-ui,sans-serif,\\"Apple_Color_Emoji\\",\\"Segoe_UI_Emoji\\",\\"Segoe_UI_Symbol\\",\\"Noto_Color_Emoji\\""] text-sm leading-[23px] font-normal text-[oklch(0.446_0.043_257.281)]'>
                {result.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-[#BEDBFF] bg-[#F0F7FF] px-6 py-12 text-center shadow-[0_1px_0_rgba(15,23,42,0.04)] sm:px-8">
          <h3 className='font-["ui-sans-serif,system-ui,sans-serif,\\"Apple_Color_Emoji\\",\\"Segoe_UI_Emoji\\",\\"Segoe_UI_Symbol\\",\\"Noto_Color_Emoji\\""] text-2xl leading-9 font-bold text-[oklch(0.208_0.042_265.755)] sm:text-3xl md:text-4xl lg:text-[36px] lg:leading-10'>
            See your numbers improve
          </h3>
          <p className='mx-auto mt-4 max-w-3xl font-["ui-sans-serif,system-ui,sans-serif,\\"Apple_Color_Emoji\\",\\"Segoe_UI_Emoji\\",\\"Segoe_UI_Symbol\\",\\"Noto_Color_Emoji\\""] text-base leading-7 font-normal text-[oklch(0.446_0.043_257.281)] md:text-lg'>
            Most teams see ROI in the first month. Track exactly how much time and money you&apos;re saving with built-in analytics.
          </p>
          <a
            href="#contact"
            className='mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#2563eb] to-[#3b82f6] px-8 py-3 font-["ui-sans-serif,system-ui,sans-serif,\\"Apple_Color_Emoji\\",\\"Segoe_UI_Emoji\\",\\"Segoe_UI_Symbol\\",\\"Noto_Color_Emoji\\""] text-base leading-6 font-semibold text-white shadow-[0_12px_24px_rgba(37,99,235,0.35)] transition-transform duration-200 hover:-translate-y-0.5'
          >
            Start your free trial <span aria-hidden>✓</span>
          </a>
        </div>
      </div>
    </section>
  );
}
