const securityCards = [
  {
    title: "Your data stays yours",
    description:
      "We can't see your data. Ever. Zero-knowledge encryption means only you hold the keys.",
  },
  {
    title: "SOC 2 Type II certified",
    description:
      "Independent auditors verify our security. Annual pen tests. Real compliance, not checkboxes.",
  },
  {
    title: "GDPR & HIPAA ready",
    description:
      "Need to handle EU or healthcare data? We've got you covered with full compliance.",
  },
  {
    title: "Always available",
    description:
      "99.9% uptime SLA. Redundant infrastructure. Your data is backed up in real-time across regions.",
  },
];

const securityStats = [
  { value: "256-bit", label: "Encryption" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "24/7", label: "Monitoring" },
  { value: "ISO 27001", label: "Certified" },
];

export default function EnterpriseSecuritySection() {
  return (
    <section className="bg-[#F8FAFC] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-[74rem]">
        <div className="text-center">
          <h2 className='font-["ui-sans-serif,system-ui,sans-serif,\\"Apple_Color_Emoji\\",\\"Segoe_UI_Emoji\\",\\"Segoe_UI_Symbol\\",\\"Noto_Color_Emoji\\""] text-3xl leading-[1.1] font-bold text-[oklch(0.208_0.042_265.755)] sm:text-4xl md:text-5xl lg:text-[56px] xl:text-[60px] xl:leading-[60px]'>
            Enterprise-grade security
          </h2>
          <p className='mx-auto mt-4 max-w-3xl font-["ui-sans-serif,system-ui,sans-serif,\\"Apple_Color_Emoji\\",\\"Segoe_UI_Emoji\\",\\"Segoe_UI_Symbol\\",\\"Noto_Color_Emoji\\""] text-base leading-7 font-normal text-[oklch(0.446_0.043_257.281)] sm:text-lg md:text-xl'>
            Your data is protected with industry-leading security standards
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {securityCards.map((card) => (
            <article
              key={card.title}
              className="group cursor-pointer rounded-2xl border border-slate-200 bg-white px-6 py-6 transition-all duration-200 hover:border-[oklch(0.546_0.245_262.881)] hover:shadow-[0_12px_30px_rgba(37,99,235,0.14)]"
            >
              <h3 className='font-["ui-sans-serif,system-ui,sans-serif,\\"Apple_Color_Emoji\\",\\"Segoe_UI_Emoji\\",\\"Segoe_UI_Symbol\\",\\"Noto_Color_Emoji\\""] text-lg leading-7 font-bold text-slate-900 transition-colors duration-200 group-hover:text-[oklch(0.546_0.245_262.881)] sm:text-xl'>
                {card.title}
              </h3>
              <p className='mt-3 font-["ui-sans-serif,system-ui,sans-serif,\\"Apple_Color_Emoji\\",\\"Segoe_UI_Emoji\\",\\"Segoe_UI_Symbol\\",\\"Noto_Color_Emoji\\""] text-base leading-[26px] font-normal text-[oklch(0.446_0.043_257.281)]'>
                {card.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-slate-200 bg-white px-8 py-10">
          <div className="grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
            {securityStats.map((item) => (
              <div key={item.value}>
                <p className='font-["ui-sans-serif,system-ui,sans-serif,\\"Apple_Color_Emoji\\",\\"Segoe_UI_Emoji\\",\\"Segoe_UI_Symbol\\",\\"Noto_Color_Emoji\\""] text-2xl leading-8 font-bold text-[oklch(0.546_0.245_262.881)] sm:text-3xl md:text-[30px] md:leading-9'>
                  {item.value}
                </p>
                <p className='mt-2 font-["ui-sans-serif,system-ui,sans-serif,\\"Apple_Color_Emoji\\",\\"Segoe_UI_Emoji\\",\\"Segoe_UI_Symbol\\",\\"Noto_Color_Emoji\\""] text-sm leading-5 font-medium text-[oklch(0.446_0.043_257.281)]'>
                  {item.label}
                </p>
              </div>
            ))}
          </div>
          <p className='mt-8 text-center font-["ui-sans-serif,system-ui,sans-serif,\\"Apple_Color_Emoji\\",\\"Segoe_UI_Emoji\\",\\"Segoe_UI_Symbol\\",\\"Noto_Color_Emoji\\""] text-sm leading-5 font-normal text-[oklch(0.446_0.043_257.281)]'>
            Questions about our security? Talk to our security team directly.
          </p>
        </div>
      </div>
    </section>
  );
}
