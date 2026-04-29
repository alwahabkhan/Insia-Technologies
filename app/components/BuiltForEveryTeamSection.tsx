const teamCards = [
  {
    title: "Sales",
    metric: "34% higher close rate",
    challenge: "Unclear pipeline visibility and inaccurate forecasting",
    solution: "AI-powered deal scoring, risk detection, and revenue predictions",
  },
  {
    title: "Marketing",
    metric: "2.3x better ROI",
    challenge: "Attribution gaps and campaign performance blind spots",
    solution: "Multi-touch attribution, real-time ROI tracking, and optimization",
  },
  {
    title: "Operations",
    metric: "40% faster workflows",
    challenge: "Hidden inefficiencies slowing down workflows",
    solution: "Automated bottleneck detection and process optimization",
  },
  {
    title: "Finance",
    metric: "91% forecast accuracy",
    challenge: "Manual forecasting with low accuracy",
    solution: "Predictive cash flow modeling and automated financial close",
  },
  {
    title: "Product",
    metric: "28% less churn",
    challenge: "Unclear product usage patterns and churn drivers",
    solution: "Behavioral analytics, churn prediction, and feature prioritization",
  },
];

function TeamCard({
  title,
  metric,
  challenge,
  solution,
}: {
  title: string;
  metric: string;
  challenge: string;
  solution: string;
}) {
  return (
    <article className="group rounded-3xl border border-slate-200 bg-white p-6 transition-all duration-200 hover:border-blue-500 hover:shadow-[0_14px_34px_rgba(37,99,235,0.18)] sm:p-8">
      <h3 className='font-["ui-sans-serif,system-ui,sans-serif,\\"Apple_Color_Emoji\\",\\"Segoe_UI_Emoji\\",\\"Segoe_UI_Symbol\\",\\"Noto_Color_Emoji\\""] text-base leading-7 font-bold text-slate-900 transition-colors duration-200 group-hover:text-blue-600 sm:text-lg'>
        {title}
      </h3>
      <div className='mt-4 inline-flex rounded-full bg-blue-50 px-4 py-1 font-["ui-sans-serif,system-ui,sans-serif,\\"Apple_Color_Emoji\\",\\"Segoe_UI_Emoji\\",\\"Segoe_UI_Symbol\\",\\"Noto_Color_Emoji\\""] text-xs leading-4 font-bold text-blue-700'>
        {metric}
      </div>

      <div className="mt-7">
        <p className='font-["ui-sans-serif,system-ui,sans-serif,\\"Apple_Color_Emoji\\",\\"Segoe_UI_Emoji\\",\\"Segoe_UI_Symbol\\",\\"Noto_Color_Emoji\\""] text-xs leading-4 font-semibold uppercase tracking-[0.08em] text-[oklch(0.554_0.046_257.417)]'>
          Challenge
        </p>
        <p className='mt-2 font-["ui-sans-serif,system-ui,sans-serif,\\"Apple_Color_Emoji\\",\\"Segoe_UI_Emoji\\",\\"Segoe_UI_Symbol\\",\\"Noto_Color_Emoji\\""] text-sm leading-[23px] font-normal text-[oklch(0.372_0.044_257.287)]'>
          {challenge}
        </p>
      </div>

      <div className="my-7 h-px bg-slate-200" />

      <div>
        <p className='font-["ui-sans-serif,system-ui,sans-serif,\\"Apple_Color_Emoji\\",\\"Segoe_UI_Emoji\\",\\"Segoe_UI_Symbol\\",\\"Noto_Color_Emoji\\""] text-xs leading-4 font-semibold uppercase tracking-[0.08em] text-[oklch(0.554_0.046_257.417)]'>
          Solution
        </p>
        <p className='mt-2 font-["ui-sans-serif,system-ui,sans-serif,\\"Apple_Color_Emoji\\",\\"Segoe_UI_Emoji\\",\\"Segoe_UI_Symbol\\",\\"Noto_Color_Emoji\\""] text-sm leading-[23px] font-normal text-[oklch(0.372_0.044_257.287)]'>
          {solution}
        </p>
      </div>

      <a
        href="#contact"
        className='mt-8 inline-flex items-center gap-2 font-["ui-sans-serif,system-ui,sans-serif,\\"Apple_Color_Emoji\\",\\"Segoe_UI_Emoji\\",\\"Segoe_UI_Symbol\\",\\"Noto_Color_Emoji\\""] text-sm leading-5 font-semibold text-blue-600 opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100'
      >
        Learn more <span aria-hidden>›</span>
      </a>
    </article>
  );
}

export default function BuiltForEveryTeamSection() {
  return (
    <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-[74rem]">
        <div className="text-center">
          <h2 className='font-["Geist","Geist_Fallback",Arial,Helvetica,sans-serif] text-3xl font-bold tracking-tight text-[lab(7.78673_1.82346_-15.0537)] leading-[1.1] sm:text-4xl md:text-5xl lg:text-[56px] xl:text-[60px] xl:leading-[60px]'>
            Built for every team
          </h2>
          <p className='mx-auto mt-4 max-w-3xl font-["Geist","Geist_Fallback",Arial,Helvetica,sans-serif] text-sm leading-6 font-normal text-[lab(35.5623_-1.74978_-15.4316)] sm:text-base'>
            Tailored solutions for your specific business challenges
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {teamCards.slice(0, 3).map((card) => (
            <TeamCard key={card.title} {...card} />
          ))}
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {teamCards.slice(3).map((card) => (
            <TeamCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
