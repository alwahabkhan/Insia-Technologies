"use client";

import type { ElementType, ReactNode } from "react";

export type MorphVariant = "hero" | "light" | "soft" | "muted" | "plain";

type MorphSectionProps = {
  id?: string;
  variant: MorphVariant;
  className?: string;
  children: ReactNode;
  as?: ElementType;
};

const BLOB_CLASSES: Record<MorphVariant, string[]> = {
  hero: [
    "top-[-12%] left-[-8%] w-[min(100vw,480px)] h-[min(100vw,480px)] bg-gradient-to-br from-blue-400/40 via-sky-300/20 to-transparent morph-blob morph-blob-a",
    "bottom-[5%] right-[-10%] w-[min(90vw,400px)] h-[min(90vw,400px)] bg-gradient-to-br from-purple-400/35 to-fuchsia-400/18 morph-blob morph-blob-b",
    "top-[38%] left-[52%] w-[min(45vw,280px)] h-[min(45vw,280px)] bg-gradient-to-br from-cyan-400/25 to-blue-400/20 morph-blob morph-blob-c",
  ],
  light: [
    "top-[-8%] right-[-5%] w-[min(85vw,380px)] h-[min(85vw,380px)] bg-gradient-to-br from-blue-400/28 to-indigo-300/15 morph-blob morph-blob-a",
    "bottom-[-5%] left-[-8%] w-[min(80vw,340px)] h-[min(80vw,340px)] bg-gradient-to-br from-violet-400/22 to-purple-300/12 morph-blob morph-blob-b",
    "top-[45%] left-[40%] w-[200px] h-[200px] bg-gradient-to-br from-sky-400/18 to-transparent morph-blob morph-blob-c",
  ],
  soft: [
    "top-[-10%] left-[-6%] w-[min(90vw,420px)] h-[min(90vw,420px)] bg-gradient-to-br from-blue-400/25 to-cyan-300/12 morph-blob morph-blob-b",
    "bottom-[0%] right-[-6%] w-[min(85vw,360px)] h-[min(85vw,360px)] bg-gradient-to-br from-indigo-400/22 to-violet-300/12 morph-blob morph-blob-c",
    "top-[30%] right-[20%] w-[220px] h-[220px] bg-gradient-to-br from-slate-300/20 to-blue-200/15 morph-blob morph-blob-a",
  ],
  muted: [
    "top-[-6%] right-[-4%] w-[min(80vw,360px)] h-[min(80vw,360px)] bg-gradient-to-br from-blue-400/20 to-purple-400/15 morph-blob morph-blob-a",
    "bottom-[10%] left-[-8%] w-[min(75vw,320px)] h-[min(75vw,320px)] bg-gradient-to-br from-violet-400/18 to-fuchsia-300/10 morph-blob morph-blob-c",
  ],
  plain: [],
};

export default function MorphSection({
  id,
  variant,
  className = "",
  children,
  as: Component = "section",
}: MorphSectionProps) {
  const blobs = BLOB_CLASSES[variant];

  return (
    <Component id={id} className={`relative overflow-hidden ${className}`}>
      <div
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
        aria-hidden
      >
        {blobs.map((blobClass, i) => (
          <div
            key={i}
            className={`absolute rounded-full blur-3xl ${blobClass}`}
          />
        ))}
      </div>
      <div className="relative z-10 h-full">{children}</div>
    </Component>
  );
}
