"use client";

import Link from "next/link";
import MorphSection from "./MorphSection";

const PRODUCT_LINKS = [
  "Data Integration",
  "Data Transformation",
  "Advanced Analytics",
  "AI Predictions",
];

const SOLUTION_LINKS = [
  "Sales Analytics",
  "Marketing Intelligence",
  "Operations",
  "Finance",
];

const COMPANY_LINKS = ["About Us", "Careers", "Contact", "Privacy Policy"];

export default function Footer() {
  return (
    <MorphSection
      as="footer"
      variant="plain"
      className="bg-gradient-to-b from-[#0b1529] to-[#0a1224] py-14 px-4 text-slate-200 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-2 gap-8 border-b border-white/10 pb-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-3xl font-bold text-white sm:text-4xl">INSIA</h3>
            <p className="mt-3 max-w-[240px] text-sm leading-6 text-slate-300 sm:text-[15px]">
              AI-powered data analytics platform for modern enterprises.
            </p>
          </div>

          <div>
            <h4 className="text-base font-semibold text-white sm:text-[1.15rem]">Product</h4>
            <ul className="mt-3 space-y-1.5">
              {PRODUCT_LINKS.map((item) => (
                <li key={item}>
                  <Link
                    href="#services"
                    className="text-sm text-slate-300 transition-colors hover:text-white sm:text-[15px]"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-base font-semibold text-white sm:text-[1.15rem]">Solutions</h4>
            <ul className="mt-3 space-y-1.5">
              {SOLUTION_LINKS.map((item) => (
                <li key={item}>
                  <Link
                    href="#services"
                    className="text-sm text-slate-300 transition-colors hover:text-white sm:text-[15px]"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-base font-semibold text-white sm:text-[1.15rem]">Company</h4>
            <ul className="mt-3 space-y-1.5">
              {COMPANY_LINKS.map((item) => (
                <li key={item}>
                  <Link
                    href={item === "About Us" ? "#about" : item === "Contact" ? "#contact" : "#"}
                    className="text-sm text-slate-300 transition-colors hover:text-white sm:text-[15px]"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-7 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p className="text-sm text-slate-400">
            &copy; 2026 INSIA. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {["𝕏", "in", "◔"].map((icon) => (
              <button
                key={icon}
                type="button"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 text-sm text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
                aria-label="social link"
              >
                {icon}
              </button>
            ))}
          </div>
        </div>
      </div>
    </MorphSection>
  );
}
