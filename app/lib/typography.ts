/**
 * Shared typography tokens for Insiya marketing site.
 * Use `font-display` (General Sans) for headings, `font-sans` (Inter) for UI/body.
 */

export const fontDisplay =
  '"General Sans", var(--font-inter), ui-sans-serif, system-ui, sans-serif';

export const fontBody =
  "var(--font-inter), Inter, ui-sans-serif, system-ui, sans-serif";

/** Composable Tailwind class bundles — spacing/layout applied at call site */
export const textStyles = {
  eyebrow:
    "font-sans text-[13px] font-semibold not-italic leading-[21px] tracking-normal text-accent",
  eyebrowPill:
    "inline-flex rounded-full bg-cyan-100 px-4 py-1.5 font-sans text-[13px] font-semibold not-italic leading-[21px] tracking-normal text-accent",

  display:
    "font-display text-[32px] font-semibold not-italic leading-[37px] tracking-tight text-primary sm:text-[2.625rem] sm:leading-[3rem] md:text-[56px] md:leading-[62px]",
  h2: "font-display text-[28px] font-semibold not-italic leading-[34px] tracking-normal text-primary sm:text-4xl sm:leading-tight md:text-[44px] md:leading-[53px]",
  h2Intro:
    "font-display text-[36px] font-semibold not-italic leading-[43px] tracking-normal text-primary sm:text-4xl sm:leading-tight md:text-[44px] md:leading-[53px]",
  h2Dark:
    "font-display text-[28px] font-semibold not-italic leading-[34px] tracking-normal text-white sm:text-4xl sm:leading-tight md:text-[44px] md:leading-[53px]",
  h3: "font-display text-[22px] font-semibold not-italic leading-[28px] tracking-normal text-primary md:text-2xl md:leading-tight",
  h3Dark:
    "font-display text-[22px] font-semibold not-italic leading-[28px] tracking-normal text-white md:text-2xl md:leading-tight",
  h4: "font-display text-[20px] font-bold not-italic leading-[24px] tracking-normal text-primary sm:text-[22px] sm:leading-[28px]",
  cardTitle:
    "font-display text-[17px] font-bold not-italic leading-[20px] tracking-normal text-primary",

  lead: "font-sans text-[19px] font-light not-italic leading-[33px] tracking-normal text-secondary sm:text-[20px] sm:leading-[35px]",
  body: "font-sans text-[16px] font-normal not-italic leading-[26px] tracking-normal text-secondary sm:text-[17px] sm:leading-7 md:text-[18px] md:leading-[29px]",
  bodySm:
    "font-sans text-[15px] font-normal not-italic leading-[24px] tracking-normal text-secondary sm:text-[16px] sm:leading-[26px]",
  caption:
    "font-sans text-[13px] font-medium not-italic leading-[20px] tracking-normal text-muted",
  label:
    "font-sans text-[14px] font-semibold not-italic leading-[22px] tracking-normal text-secondary",

  bodyOnDark:
    "font-sans text-[16px] font-normal not-italic leading-[26px] tracking-normal text-white/80 sm:text-[17px] sm:leading-8 md:text-[18px] md:leading-[31px]",
  bodySmOnDark:
    "font-sans text-[15px] font-normal not-italic leading-[24px] tracking-normal text-white/70 sm:text-[16px] sm:leading-[26px]",

  statValue:
    "font-sans text-[52px] font-bold not-italic leading-[52px] tracking-normal text-cyan-400 sm:text-[56px] sm:leading-none md:text-[60px]",
  statLabel:
    "font-sans text-[17px] font-semibold not-italic leading-[27px] tracking-normal text-white",
  statDesc:
    "font-sans text-[15px] font-normal not-italic leading-[24px] tracking-normal text-white/60",

  btn:
    "font-sans text-[15px] font-semibold not-italic leading-[23px] tracking-normal sm:text-base sm:leading-6",
  navLink:
    "font-sans text-[15px] font-medium not-italic leading-6 tracking-normal",

  trustedLabel:
    "font-sans text-center uppercase tracking-[0.24em] text-muted max-md:text-[12px] max-md:font-medium max-md:leading-[19px] md:text-[11px] md:font-semibold md:leading-5",
  trustedBrand:
    "font-sans text-[16px] font-medium not-italic leading-[26px] tracking-tight text-[#90a1b9] md:text-[1.65rem] md:font-semibold md:leading-tight md:text-slate-400",
  logo:
    "font-display uppercase text-2xl font-semibold not-italic leading-tight sm:text-[30px] sm:leading-[48px]",
  mobileMenuLink:
    "font-sans block text-[16px] font-medium not-italic leading-6 text-[#314158]",
  link: "font-sans text-[15px] font-semibold not-italic leading-[24px] text-cyan-700 transition-colors hover:text-cyan-800",
} as const;

export function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
