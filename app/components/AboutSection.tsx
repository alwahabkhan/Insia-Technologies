export default function AboutSection() {
  return (
    <section id="about" className="bg-[#F8F9FA] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto grid max-w-[74rem] items-center gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-12">
        <div className="relative">
          <div
            className="h-[560px] w-full rounded-3xl bg-cover bg-center shadow-[0_20px_45px_rgba(15,23,42,0.16)]"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80)",
            }}
            aria-hidden
          />
          <div className="absolute -bottom-4 right-5 rounded-2xl bg-white px-6 py-5 shadow-[0_14px_34px_rgba(15,23,42,0.16)]">
            <div className="flex items-center gap-5">
              <span className="inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-blue-600 text-white">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border-[3px] border-white text-lg leading-none">
                  ✓
                </span>
              </span>
              <div>
                <p className='font-["ui-sans-serif,system-ui,sans-serif,\\"Apple_Color_Emoji\\",\\"Segoe_UI_Emoji\\",\\"Segoe_UI_Symbol\\",\\"Noto_Color_Emoji\\""] text-2xl leading-8 font-bold text-[oklch(0.208_0.042_265.755)]'>5+ Years</p>
                <p className='mt-0.5 font-["ui-sans-serif,system-ui,sans-serif,\\"Apple_Color_Emoji\\",\\"Segoe_UI_Emoji\\",\\"Segoe_UI_Symbol\\",\\"Noto_Color_Emoji\\""] text-sm leading-5 font-medium text-[oklch(0.446_0.043_257.281)]'>Experience</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <span className='inline-flex rounded-full bg-sky-50 px-3 py-1 font-["ui-sans-serif,system-ui,sans-serif,\\"Apple_Color_Emoji\\",\\"Segoe_UI_Emoji\\",\\"Segoe_UI_Symbol\\",\\"Noto_Color_Emoji\\""] text-sm leading-5 font-semibold text-[oklch(0.546_0.245_262.881)]'>
            About Us
          </span>
          <h2 className='mt-5 font-["ui-sans-serif,system-ui,sans-serif,\\"Apple_Color_Emoji\\",\\"Segoe_UI_Emoji\\",\\"Segoe_UI_Symbol\\",\\"Noto_Color_Emoji\\""] text-[60px] leading-[60px] font-bold text-[oklch(0.208_0.042_265.755)]'>Who We Are</h2>
          <div className="mt-4 h-1 w-20 rounded-full bg-blue-600" />

          <p className='mt-8 font-["ui-sans-serif,system-ui,sans-serif,\\"Apple_Color_Emoji\\",\\"Segoe_UI_Emoji\\",\\"Segoe_UI_Symbol\\",\\"Noto_Color_Emoji\\""] text-[18px] leading-[29px] font-normal text-[oklch(0.446_0.043_257.281)]'>
            We are a software development company focused on delivering high-quality digital solutions for modern businesses.
          </p>
          <p className='mt-6 font-["ui-sans-serif,system-ui,sans-serif,\\"Apple_Color_Emoji\\",\\"Segoe_UI_Emoji\\",\\"Segoe_UI_Symbol\\",\\"Noto_Color_Emoji\\""] text-[18px] leading-[29px] font-normal text-[oklch(0.446_0.043_257.281)]'>
            Our team of experts combines technical excellence with business understanding to create products that drive real results.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className='font-["ui-sans-serif,system-ui,sans-serif,\\"Apple_Color_Emoji\\",\\"Segoe_UI_Emoji\\",\\"Segoe_UI_Symbol\\",\\"Noto_Color_Emoji\\""] text-[36px] leading-10 font-bold text-[oklch(0.546_0.245_262.881)]'>50+</p>
              <p className='mt-2 font-["ui-sans-serif,system-ui,sans-serif,\\"Apple_Color_Emoji\\",\\"Segoe_UI_Emoji\\",\\"Segoe_UI_Symbol\\",\\"Noto_Color_Emoji\\""] text-base leading-6 font-semibold text-[oklch(0.446_0.043_257.281)]'>Projects Delivered</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className='font-["ui-sans-serif,system-ui,sans-serif,\\"Apple_Color_Emoji\\",\\"Segoe_UI_Emoji\\",\\"Segoe_UI_Symbol\\",\\"Noto_Color_Emoji\\""] text-[36px] leading-10 font-bold text-[oklch(0.546_0.245_262.881)]'>98%</p>
              <p className='mt-2 font-["ui-sans-serif,system-ui,sans-serif,\\"Apple_Color_Emoji\\",\\"Segoe_UI_Emoji\\",\\"Segoe_UI_Symbol\\",\\"Noto_Color_Emoji\\""] text-base leading-6 font-semibold text-[oklch(0.446_0.043_257.281)]'>Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
