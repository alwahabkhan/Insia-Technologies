import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[74rem]">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <h3 className='font-["ui-sans-serif,system-ui,sans-serif,\\"Apple_Color_Emoji\\",\\"Segoe_UI_Emoji\\",\\"Segoe_UI_Symbol\\",\\"Noto_Color_Emoji\\""] text-[20px] leading-7 font-bold text-[oklch(0.208_0.042_265.755)]'>INSIA</h3>
            <p className='mt-3 max-w-[220px] font-["ui-sans-serif,system-ui,sans-serif,\\"Apple_Color_Emoji\\",\\"Segoe_UI_Emoji\\",\\"Segoe_UI_Symbol\\",\\"Noto_Color_Emoji\\""] text-sm leading-5 font-normal text-[oklch(0.446_0.043_257.281)]'>
              Business analytics platform for modern teams
            </p>
          </div>

          <div>
            <h4 className='font-["ui-sans-serif,system-ui,sans-serif,\\"Apple_Color_Emoji\\",\\"Segoe_UI_Emoji\\",\\"Segoe_UI_Symbol\\",\\"Noto_Color_Emoji\\""] text-base leading-6 font-bold text-[oklch(0.208_0.042_265.755)]'>Product</h4>
            <ul className="mt-3 space-y-2">
              <li><Link href="#home" className='font-["ui-sans-serif,system-ui,sans-serif,\\"Apple_Color_Emoji\\",\\"Segoe_UI_Emoji\\",\\"Segoe_UI_Symbol\\",\\"Noto_Color_Emoji\\""] text-sm leading-5 font-normal text-slate-600 transition-colors hover:text-blue-600'>Features</Link></li>
              <li><Link href="#comparison" className='font-["ui-sans-serif,system-ui,sans-serif,\\"Apple_Color_Emoji\\",\\"Segoe_UI_Emoji\\",\\"Segoe_UI_Symbol\\",\\"Noto_Color_Emoji\\""] text-sm leading-5 font-normal text-slate-600 transition-colors hover:text-blue-600'>Solutions</Link></li>
              <li><Link href="#project-cta" className='font-["ui-sans-serif,system-ui,sans-serif,\\"Apple_Color_Emoji\\",\\"Segoe_UI_Emoji\\",\\"Segoe_UI_Symbol\\",\\"Noto_Color_Emoji\\""] text-sm leading-5 font-normal text-slate-600 transition-colors hover:text-blue-600'>Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className='font-["ui-sans-serif,system-ui,sans-serif,\\"Apple_Color_Emoji\\",\\"Segoe_UI_Emoji\\",\\"Segoe_UI_Symbol\\",\\"Noto_Color_Emoji\\""] text-base leading-6 font-bold text-[oklch(0.208_0.042_265.755)]'>Company</h4>
            <ul className="mt-3 space-y-2">
              <li><Link href="#about" className='font-["ui-sans-serif,system-ui,sans-serif,\\"Apple_Color_Emoji\\",\\"Segoe_UI_Emoji\\",\\"Segoe_UI_Symbol\\",\\"Noto_Color_Emoji\\""] text-sm leading-5 font-normal text-slate-600 transition-colors hover:text-blue-600'>About</Link></li>
              <li><Link href="#testimonials" className='font-["ui-sans-serif,system-ui,sans-serif,\\"Apple_Color_Emoji\\",\\"Segoe_UI_Emoji\\",\\"Segoe_UI_Symbol\\",\\"Noto_Color_Emoji\\""] text-sm leading-5 font-normal text-slate-600 transition-colors hover:text-blue-600'>Blog</Link></li>
              <li><Link href="#project-cta" className='font-["ui-sans-serif,system-ui,sans-serif,\\"Apple_Color_Emoji\\",\\"Segoe_UI_Emoji\\",\\"Segoe_UI_Symbol\\",\\"Noto_Color_Emoji\\""] text-sm leading-5 font-normal text-slate-600 transition-colors hover:text-blue-600'>Careers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className='font-["ui-sans-serif,system-ui,sans-serif,\\"Apple_Color_Emoji\\",\\"Segoe_UI_Emoji\\",\\"Segoe_UI_Symbol\\",\\"Noto_Color_Emoji\\""] text-base leading-6 font-bold text-[oklch(0.208_0.042_265.755)]'>Legal</h4>
            <ul className="mt-3 space-y-2">
              <li><Link href="#project-cta" className='font-["ui-sans-serif,system-ui,sans-serif,\\"Apple_Color_Emoji\\",\\"Segoe_UI_Emoji\\",\\"Segoe_UI_Symbol\\",\\"Noto_Color_Emoji\\""] text-sm leading-5 font-normal text-slate-600 transition-colors hover:text-blue-600'>Privacy</Link></li>
              <li><Link href="#project-cta" className='font-["ui-sans-serif,system-ui,sans-serif,\\"Apple_Color_Emoji\\",\\"Segoe_UI_Emoji\\",\\"Segoe_UI_Symbol\\",\\"Noto_Color_Emoji\\""] text-sm leading-5 font-normal text-slate-600 transition-colors hover:text-blue-600'>Terms</Link></li>
              <li><Link href="#enterprise-security" className='font-["ui-sans-serif,system-ui,sans-serif,\\"Apple_Color_Emoji\\",\\"Segoe_UI_Emoji\\",\\"Segoe_UI_Symbol\\",\\"Noto_Color_Emoji\\""] text-sm leading-5 font-normal text-slate-600 transition-colors hover:text-blue-600'>Security</Link></li>
            </ul>
          </div>
        </div>

        <div className='mt-10 flex flex-col gap-4 border-t border-slate-200 pt-8 font-["ui-sans-serif,system-ui,sans-serif,\\"Apple_Color_Emoji\\",\\"Segoe_UI_Emoji\\",\\"Segoe_UI_Symbol\\",\\"Noto_Color_Emoji\\""] text-sm leading-5 font-normal text-slate-500 md:flex-row md:items-center md:justify-between'>
          <p className='font-["ui-sans-serif,system-ui,sans-serif,\\"Apple_Color_Emoji\\",\\"Segoe_UI_Emoji\\",\\"Segoe_UI_Symbol\\",\\"Noto_Color_Emoji\\""] text-sm leading-5 font-normal text-[oklch(0.446_0.043_257.281)]'>&copy; {new Date().getFullYear()} INSIA. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#project-cta" className='font-["ui-sans-serif,system-ui,sans-serif,\\"Apple_Color_Emoji\\",\\"Segoe_UI_Emoji\\",\\"Segoe_UI_Symbol\\",\\"Noto_Color_Emoji\\""] text-sm leading-5 font-medium transition-colors hover:text-blue-600'>Twitter</Link>
            <Link href="#project-cta" className='font-["ui-sans-serif,system-ui,sans-serif,\\"Apple_Color_Emoji\\",\\"Segoe_UI_Emoji\\",\\"Segoe_UI_Symbol\\",\\"Noto_Color_Emoji\\""] text-sm leading-5 font-medium transition-colors hover:text-blue-600'>LinkedIn</Link>
            <Link href="#project-cta" className='font-["ui-sans-serif,system-ui,sans-serif,\\"Apple_Color_Emoji\\",\\"Segoe_UI_Emoji\\",\\"Segoe_UI_Symbol\\",\\"Noto_Color_Emoji\\""] text-sm leading-5 font-medium transition-colors hover:text-blue-600'>GitHub</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
