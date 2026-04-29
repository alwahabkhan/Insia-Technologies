"use client";

import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white bg-[linear-gradient(to_right,rgba(241,245,249,0.55)_1px,transparent_1px),linear-gradient(to_bottom,rgba(241,245,249,0.55)_1px,transparent_1px)] bg-[size:60px_60px] px-4 pt-28 pb-16 sm:px-6 lg:px-8 lg:pt-32 lg:pb-24"
    >
      <div className="mx-auto grid max-w-[74rem] items-center gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-14">
        <div className="max-w-xl">
          <h1 className='font-["ui-sans-serif,system-ui,sans-serif,\\"Apple_Color_Emoji\\",\\"Segoe_UI_Emoji\\",\\"Segoe_UI_Symbol\\",\\"Noto_Color_Emoji\\""] text-4xl leading-[1.08] font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl xl:text-[72px] xl:leading-[79px]'>
            <span className="block text-[oklch(0.208_0.042_265.755)]">Smarter</span>
            <span className="block text-[oklch(0.208_0.042_265.755)]">Marketing</span>
            <span className="block text-blue-600">Bigger Impacts</span>
          </h1>
          <p className='mt-7 max-w-xl font-["ui-sans-serif,system-ui,sans-serif,\\"Apple_Color_Emoji\\",\\"Segoe_UI_Emoji\\",\\"Segoe_UI_Symbol\\",\\"Noto_Color_Emoji\\""] text-base leading-relaxed font-normal text-[oklch(0.446_0.043_257.281)] sm:text-lg md:text-xl md:leading-[33px]'>
            Build powerful digital products that transform businesses. We create scalable solutions that drive real growth and innovation.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-blue-600 px-10 py-4 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(37,99,235,0.35)] transition-[transform,background-color,box-shadow] duration-300 ease-out will-change-transform hover:-translate-y-1 hover:bg-blue-700"
            >
              Get Started{" "}
              <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </Link>
            <Link
              href="#services"
              className="group inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-10 py-4 text-sm font-semibold text-slate-700 transition-[transform,border-color,box-shadow] duration-300 ease-out will-change-transform hover:-translate-y-1 hover:border-slate-400"
            >
              Learn More{" "}
              <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-1">
                ☼
              </span>
            </Link>
          </div>
          <div className="mt-10 grid max-w-md grid-cols-3 divide-x divide-slate-200">
            <div className="pr-4">
              <p className="text-2xl font-bold text-slate-900 sm:text-3xl md:text-4xl">500+</p>
              <p className='mt-1 font-["ui-sans-serif,system-ui,sans-serif,\\"Apple_Color_Emoji\\",\\"Segoe_UI_Emoji\\",\\"Segoe_UI_Symbol\\",\\"Noto_Color_Emoji\\""] text-sm leading-5 font-medium text-[oklch(0.554_0.046_257.417)]'>Projects</p>
            </div>
            <div className="px-4">
              <p className="text-2xl font-bold text-slate-900 sm:text-3xl md:text-4xl">98%</p>
              <p className='mt-1 font-["ui-sans-serif,system-ui,sans-serif,\\"Apple_Color_Emoji\\",\\"Segoe_UI_Emoji\\",\\"Segoe_UI_Symbol\\",\\"Noto_Color_Emoji\\""] text-sm leading-5 font-medium text-[oklch(0.554_0.046_257.417)]'>Satisfaction</p>
            </div>
            <div className="pl-4">
              <p className="text-2xl font-bold text-slate-900 sm:text-3xl md:text-4xl">24/7</p>
              <p className='mt-1 font-["ui-sans-serif,system-ui,sans-serif,\\"Apple_Color_Emoji\\",\\"Segoe_UI_Emoji\\",\\"Segoe_UI_Symbol\\",\\"Noto_Color_Emoji\\""] text-sm leading-5 font-medium text-[oklch(0.554_0.046_257.417)]'>Support</p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
          <div className="dashboard-card dashboard-enter min-h-[450px] rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-[0_28px_70px_rgba(15,23,42,0.18)] backdrop-blur-sm md:p-8">
            <div className="mb-6 flex items-start justify-between">
              <div>
                <p className='font-["ui-sans-serif,system-ui,sans-serif,\\"Apple_Color_Emoji\\",\\"Segoe_UI_Emoji\\",\\"Segoe_UI_Symbol\\",\\"Noto_Color_Emoji\\""] text-base leading-6 font-normal text-[rgb(17,24,39)]'>Dashboard</p>
                <h3 className='mt-2 font-["ui-sans-serif,system-ui,sans-serif,\\"Apple_Color_Emoji\\",\\"Segoe_UI_Emoji\\",\\"Segoe_UI_Symbol\\",\\"Noto_Color_Emoji\\""] text-lg leading-7 font-bold text-[oklch(0.208_0.042_265.755)] sm:text-xl'>Analytics Overview</h3>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <span className="h-7 w-7 rounded-full bg-blue-600" />
                <span className="h-7 w-7 rounded-full bg-slate-200" />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className='font-["ui-sans-serif,system-ui,sans-serif,\\"Apple_Color_Emoji\\",\\"Segoe_UI_Emoji\\",\\"Segoe_UI_Symbol\\",\\"Noto_Color_Emoji\\""] text-xs leading-4 font-semibold text-[oklch(0.554_0.046_257.417)]'>Revenue</p>
                <p className='mt-2 font-["ui-sans-serif,system-ui,sans-serif,\\"Apple_Color_Emoji\\",\\"Segoe_UI_Emoji\\",\\"Segoe_UI_Symbol\\",\\"Noto_Color_Emoji\\""] text-2xl leading-8 font-bold text-[oklch(0.208_0.042_265.755)] sm:text-3xl md:text-[30px] md:leading-9'>$48.5K</p>
                <div className="mt-5 h-14 rounded-lg bg-gradient-to-b from-blue-100 to-transparent" />
                <p className='mt-2 font-["ui-sans-serif,system-ui,sans-serif,\\"Apple_Color_Emoji\\",\\"Segoe_UI_Emoji\\",\\"Segoe_UI_Symbol\\",\\"Noto_Color_Emoji\\""] text-xs leading-4 font-semibold text-[oklch(0.546_0.245_262.881)]'>↑ 23% from last month</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className='font-["ui-sans-serif,system-ui,sans-serif,\\"Apple_Color_Emoji\\",\\"Segoe_UI_Emoji\\",\\"Segoe_UI_Symbol\\",\\"Noto_Color_Emoji\\""] text-xs leading-4 font-semibold text-[oklch(0.554_0.046_257.417)]'>Growth</p>
                <p className='mt-2 font-["ui-sans-serif,system-ui,sans-serif,\\"Apple_Color_Emoji\\",\\"Segoe_UI_Emoji\\",\\"Segoe_UI_Symbol\\",\\"Noto_Color_Emoji\\""] text-2xl leading-8 font-bold text-[oklch(0.546_0.245_262.881)] sm:text-3xl md:text-[30px] md:leading-9'>+32%</p>
                <div className="mt-4 flex h-16 items-end gap-2">
                  <div className="h-7 w-14 rounded-md bg-blue-600" />
                  <div className="h-9 w-14 rounded-md bg-blue-600" />
                  <div className="h-12 w-14 rounded-md bg-blue-600" />
                </div>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <div>
                <div className='mb-2 flex justify-between font-["ui-sans-serif,system-ui,sans-serif,\\"Apple_Color_Emoji\\",\\"Segoe_UI_Emoji\\",\\"Segoe_UI_Symbol\\",\\"Noto_Color_Emoji\\""] text-xs leading-4 font-semibold text-[oklch(0.446_0.043_257.281)]'>
                  <span>Conversion Rate</span>
                  <span>68%</span>
                </div>
                <div className="h-2 rounded-full bg-slate-200">
                  <div className="h-2 w-[68%] rounded-full bg-blue-600" />
                </div>
              </div>
              <div>
                <div className='mb-2 flex justify-between font-["ui-sans-serif,system-ui,sans-serif,\\"Apple_Color_Emoji\\",\\"Segoe_UI_Emoji\\",\\"Segoe_UI_Symbol\\",\\"Noto_Color_Emoji\\""] text-xs leading-4 font-semibold text-[oklch(0.446_0.043_257.281)]'>
                  <span>Customer Retention</span>
                  <span>85%</span>
                </div>
                <div className="h-2 rounded-full bg-slate-200">
                  <div className="h-2 w-[85%] rounded-full bg-blue-600" />
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-7 -left-4 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-lg">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-sm text-white">
                ✓
              </span>
              <div>
                <p className="text-sm font-semibold text-slate-900">Verified Partner</p>
                <p className="text-xs text-slate-500">ISO Certified</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
