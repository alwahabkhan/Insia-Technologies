"use client";

const trustedCompanies = [
  "Velocity",
  "DataFlow",
  "CloudPeak",
  "Revenue Inc",
  "GrowthBox",
  "TechNova",
];

export default function TrustedBySection() {
  return (
    <section className="border-y border-slate-100 bg-slate-50/90 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[74rem]">
        <p className='text-center font-["ui-sans-serif,system-ui,sans-serif,\\"Apple_Color_Emoji\\",\\"Segoe_UI_Emoji\\",\\"Segoe_UI_Symbol\\",\\"Noto_Color_Emoji\\""] text-sm leading-5 font-semibold text-[oklch(0.554_0.046_257.417)]'>
          Trusted by Growing Businesses
        </p>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 sm:gap-x-12">
          {trustedCompanies.map((company) => (
            <span
              key={company}
              className='font-["ui-sans-serif,system-ui,sans-serif,\\"Apple_Color_Emoji\\",\\"Segoe_UI_Emoji\\",\\"Segoe_UI_Symbol\\",\\"Noto_Color_Emoji\\""] text-[20px] leading-7 font-bold tracking-tight text-slate-300 transition-colors duration-200 hover:text-[oklch(0.208_0.042_265.755)]'
            >
              {company}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
