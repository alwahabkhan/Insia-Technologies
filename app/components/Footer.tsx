import Link from "next/link";

const link =
  "text-sm font-medium leading-5 text-slate-800 underline-offset-2 hover:text-blue-600 hover:underline";

/** Compact tap targets on small widths (~414px) so the full footer fits typical phone heights. */
const linkMobile =
  "min-h-[40px] items-center justify-start py-1.5 text-[#0f172a] sm:min-h-0 sm:py-0";

export default function Footer() {
  return (
    <footer
      id="site-footer"
      className="flex min-h-0 w-full flex-col overflow-visible border-t-2 border-slate-300 bg-slate-50 px-4 py-4 text-slate-900 sm:px-6 sm:py-8 lg:px-8"
      style={{
        paddingBottom:
          "max(1.5rem, calc(env(safe-area-inset-bottom, 0px) + 0.75rem))",
      }}
    >
      <div className="mx-auto flex min-h-0 w-full min-w-0 max-w-[74rem] flex-col gap-4 sm:gap-8">
        <div className="grid min-h-0 min-w-0 gap-4 sm:gap-10 lg:grid-cols-4">
          <div>
            <h3 className="text-xl font-bold text-slate-950">INSIA</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-700">
              Business analytics platform for modern teams
            </p>
          </div>

          <div className="grid min-h-0 min-w-0 grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-8 lg:col-span-3">
            <nav aria-label="Product">
              <h4 className="text-base font-bold text-slate-950">Product</h4>
              <div className="mt-3 flex flex-col gap-1 sm:gap-3">
                <Link href="#home" className={link}>
                  Features
                </Link>
                <Link href="#comparison" className={link}>
                  Solutions
                </Link>
                <Link href="#project-cta" className={link}>
                  Pricing
                </Link>
              </div>
            </nav>

            <nav aria-label="Company">
              <h4 className="text-base font-bold text-slate-950">Company</h4>
              <div className="mt-3 flex flex-col gap-1 sm:gap-3">
                <Link href="#about" className={link}>
                  About
                </Link>
                <Link href="#testimonials" className={link}>
                  Blog
                </Link>
                <Link href="#project-cta" className={link}>
                  Careers
                </Link>
              </div>
            </nav>

            <nav
              aria-label="Legal"
              className="relative z-[1] overflow-visible pb-1"
            >
              <h4 className="text-base font-bold text-slate-950">Legal</h4>
              <div
                id="footer-legal-links"
                className="mt-3 flex flex-col gap-1 sm:gap-3"
              >
                <Link href="#project-cta" className={`${link} ${linkMobile} inline-flex`}>
                  Privacy
                </Link>
                <Link href="#project-cta" className={`${link} ${linkMobile} inline-flex`}>
                  Terms
                </Link>
                <Link href="#enterprise-security" className={`${link} ${linkMobile} inline-flex`}>
                  Security
                </Link>
              </div>
            </nav>
          </div>
        </div>

        {/* Copyright + social */}
        <div
          id="footer-bottom"
          className="relative z-[1] mt-2 shrink-0 overflow-visible -mx-4 w-[calc(100%+2rem)] px-4 py-3 sm:py-4 md:mx-0 md:w-auto md:px-3 md:py-5"
          style={{
            paddingBottom:
              "max(0.875rem, calc(env(safe-area-inset-bottom, 0px) + 0.5rem))",
          }}
        >
          <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:gap-4 sm:text-left">
            <p className="text-sm font-semibold leading-snug text-[#0f172a]">
              © {new Date().getFullYear()} INSIA. All rights reserved.
            </p>
            <div className="flex w-full max-w-sm flex-wrap justify-center gap-x-6 gap-y-3 sm:w-auto sm:max-w-none sm:justify-end">
              <Link
                href="#project-cta"
                className={`${link} inline-flex min-h-[40px] items-center font-semibold text-[#0f172a] sm:min-h-0`}
              >
                Twitter
              </Link>
              <Link
                href="#project-cta"
                className={`${link} inline-flex min-h-[40px] items-center font-semibold text-[#0f172a] sm:min-h-0`}
              >
                LinkedIn
              </Link>
              <Link
                href="#project-cta"
                className={`${link} inline-flex min-h-[40px] items-center font-semibold text-[#0f172a] sm:min-h-0`}
              >
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
