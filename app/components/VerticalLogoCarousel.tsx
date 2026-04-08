"use client";

import Image from "next/image";

export type TechnologyLogo = { name: string; path: string };

interface VerticalLogoCarouselProps {
  logos: TechnologyLogo[];
  direction: "up" | "down";
  /** When true, shows logos in reverse order (for opposite side) */
  reverseOrder?: boolean;
  className?: string;
}

function LogoCard({ logo }: { logo: TechnologyLogo }) {
  return (
    <div
      className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 bg-white/90 backdrop-blur-sm rounded-2xl p-3 shadow-[0_10px_30px_rgba(15,23,42,0.08)] hover:shadow-[0_16px_45px_rgba(37,99,235,0.12)] transition-all duration-300 flex items-center justify-center border border-slate-200/80"
      title={logo.name}
    >
      <Image
        src={logo.path}
        alt={logo.name}
        width={64}
        height={64}
        className="object-contain w-full h-full"
      />
    </div>
  );
}

export default function VerticalLogoCarousel({
  logos,
  direction,
  reverseOrder = false,
  className = "",
}: VerticalLogoCarouselProps) {
  const animationClass =
    direction === "up"
      ? "animate-scroll-vertical-up"
      : "animate-scroll-vertical-down";
  const displayLogos = reverseOrder ? [...logos].reverse() : logos;

  return (
    <div
      className={`relative overflow-hidden h-[70vh] max-h-[500px] ${className}`}
      style={{ minHeight: "320px" }}
    >
      <div
        className={`flex flex-col gap-4 ${animationClass}`}
        style={{
          height: "max-content",
          width: "max-content",
          animationPlayState: "running",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.animationPlayState = "paused";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.animationPlayState = "running";
        }}
      >
        {displayLogos.map((logo, idx) => (
          <LogoCard key={`first-${idx}`} logo={logo} />
        ))}
        {displayLogos.map((logo, idx) => (
          <LogoCard key={`second-${idx}`} logo={logo} />
        ))}
      </div>
    </div>
  );
}
