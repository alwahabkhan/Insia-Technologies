'use client';

import Image from "next/image";

interface TechnologyLogo {
  name: string;
  path: string;
}

interface TechnologyCarouselProps {
  logos: TechnologyLogo[];
}

export default function TechnologyCarousel({ logos }: TechnologyCarouselProps) {
  return (
    <div className="relative overflow-hidden mb-16 w-full">
      <div 
        className="flex space-x-8" 
        style={{ 
          width: 'max-content',
          animation: 'scroll 40s linear infinite',
          willChange: 'transform'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.animationPlayState = 'paused';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.animationPlayState = 'running';
        }}
      >
        {/* First set of logos */}
        {logos.map((tech, idx) => (
          <div
            key={`first-${idx}`}
            className="flex-shrink-0 w-32 h-32 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-[0_10px_30px_rgba(15,23,42,0.08)] hover:shadow-[0_16px_45px_rgba(37,99,235,0.12)] transition-all duration-300 flex items-center justify-center border border-slate-200/80"
            title={tech.name}
          >
            <Image
              src={tech.path}
              alt={tech.name}
              width={80}
              height={80}
              className="object-contain w-full h-full"
            />
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {logos.map((tech, idx) => (
          <div
            key={`second-${idx}`}
            className="flex-shrink-0 w-32 h-32 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-[0_10px_30px_rgba(15,23,42,0.08)] hover:shadow-[0_16px_45px_rgba(37,99,235,0.12)] transition-all duration-300 flex items-center justify-center border border-slate-200/80"
            title={tech.name}
          >
            <Image
              src={tech.path}
              alt={tech.name}
              width={80}
              height={80}
              className="object-contain w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
