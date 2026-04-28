const testimonials = [
  {
    quote:
      '"Honestly? This is witchcraft. We used to wait 3 days for a sales report. Now I type \\"show me top deals\\" and boom - there it is. Our CFO literally asked if I hired someone."',
    initials: "SC",
    name: "Sarah Chen",
    role: "Head of Ops @ Velocity",
  },
  {
    quote:
      '"I\'m not technical. Like, at all. But I built a live dashboard that tracks our entire marketing funnel in 20 minutes. My boss thought I outsourced it. Nope - just INSIA."',
    initials: "MT",
    name: "Marcus Torres",
    role: "Marketing Lead @ GrowthBox",
  },
  {
    quote:
      '"We were paying $8K/month for analytics tools we barely used. Switched to INSIA, cut costs by 60%, and somehow got BETTER insights. Feels illegal."',
    initials: "PK",
    name: "Priya Kapoor",
    role: "CFO @ DataFlow",
  },
  {
    quote:
      '"The AI actually catches things I miss. Last week it flagged a revenue dip 2 days before I would\'ve noticed. Literally saved us $40K. Worth every penny."',
    initials: "JM",
    name: "Jake Morrison",
    role: "CEO @ TechNova",
  },
  {
    quote:
      '"My entire team can now make data-driven decisions without bugging me. They just ask the AI. I got 6 hours of my week back. Game. Changer."',
    initials: "AR",
    name: "Aisha Rahman",
    role: "Data Lead @ CloudPeak",
  },
  {
    quote:
      '"Setup took 15 minutes. FIFTEEN. We connected Salesforce, Stripe, and Google Analytics before my coffee got cold. Then it just...worked."',
    initials: "TB",
    name: "Tom Bennett",
    role: "VP Sales @ Revenue Inc",
  },
];

const trustPoints = ["Proven ROI", "4.9/5 rating", "99% uptime", "No contracts"];

export default function TestimonialsSection() {
  return (
    <section className="bg-[#FFFFFF] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-[74rem]">
        <div className="text-center">
          <h2 className='font-["ui-sans-serif,system-ui,sans-serif,\\"Apple_Color_Emoji\\",\\"Segoe_UI_Emoji\\",\\"Segoe_UI_Symbol\\",\\"Noto_Color_Emoji\\""] text-[60px] leading-[60px] font-bold text-[oklch(0.208_0.042_265.755)]'>
            What our customers say
          </h2>
          <p className='mx-auto mt-4 max-w-2xl font-["ui-sans-serif,system-ui,sans-serif,\\"Apple_Color_Emoji\\",\\"Segoe_UI_Emoji\\",\\"Segoe_UI_Symbol\\",\\"Noto_Color_Emoji\\""] text-[20px] leading-7 font-normal text-[oklch(0.446_0.043_257.281)]'>
            Real experiences from real teams
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="cursor-pointer rounded-2xl border border-slate-200 bg-white px-6 py-6 transition-all duration-200 hover:border-blue-500 hover:shadow-[0_10px_28px_rgba(37,99,235,0.14)]"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-3xl font-bold text-blue-600">
                <span className="inline-flex h-full w-full items-center justify-center leading-none">❝</span>
              </span>
              <p className='mt-4 font-["ui-sans-serif,system-ui,sans-serif,\\"Apple_Color_Emoji\\",\\"Segoe_UI_Emoji\\",\\"Segoe_UI_Symbol\\",\\"Noto_Color_Emoji\\""] text-base leading-[26px] font-normal text-[oklch(0.372_0.044_257.287)]'>
                {item.quote}
              </p>
              <div className="my-5 h-px bg-slate-200" />
              <div className="flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                  {item.initials}
                </span>
                <div>
                  <p className='font-["ui-sans-serif,system-ui,sans-serif,\\"Apple_Color_Emoji\\",\\"Segoe_UI_Emoji\\",\\"Segoe_UI_Symbol\\",\\"Noto_Color_Emoji\\""] text-base leading-6 font-bold text-[oklch(0.208_0.042_265.755)]'>
                    {item.name}
                  </p>
                  <p className='font-["ui-sans-serif,system-ui,sans-serif,\\"Apple_Color_Emoji\\",\\"Segoe_UI_Emoji\\",\\"Segoe_UI_Symbol\\",\\"Noto_Color_Emoji\\""] text-sm leading-5 font-normal text-[oklch(0.446_0.043_257.281)]'>
                    {item.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className='mt-10 flex flex-wrap items-center justify-center gap-8 font-["ui-sans-serif,system-ui,sans-serif,\\"Apple_Color_Emoji\\",\\"Segoe_UI_Emoji\\",\\"Segoe_UI_Symbol\\",\\"Noto_Color_Emoji\\""] text-sm leading-5 font-medium text-[oklch(0.372_0.044_257.287)]'>
          {trustPoints.map((point) => (
            <span key={point} className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
              {point}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
