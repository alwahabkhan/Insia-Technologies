"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const CURSOR_RED = "#ef4444";
const CURSOR_HERO = "#2dd4bf";
const CURSOR_HERO_NAV_UP = "#2563eb";
const INTERACTIVE_SELECTOR =
  "a, button, [role='button'], input, select, textarea, summary";

function useFinePointer() {
  const [fine, setFine] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const sync = () => setFine(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);
  return fine;
}

export function cursorColorForElement(
  el: Element | null,
  navElevated: boolean,
): string {
  if (!el) return CURSOR_RED;
  if (el.closest("[data-contact-modal]")) return CURSOR_RED;
  if (el.closest("[data-contact-form]")) return CURSOR_RED;
  if (el.closest('nav[aria-label="Main"]')) {
    return navElevated ? CURSOR_HERO_NAV_UP : CURSOR_HERO;
  }
  if (el.closest("#home")) {
    return navElevated ? CURSOR_HERO_NAV_UP : CURSOR_HERO;
  }
  return CURSOR_RED;
}

type CustomCursorProps = {
  navElevated: boolean;
};

export default function CustomCursor({ navElevated }: CustomCursorProps) {
  const finePointer = useFinePointer();
  const [mounted, setMounted] = useState(false);
  const dotRef = useRef({ x: 0, y: 0 });
  const ringRef = useRef({ x: 0, y: 0 });
  const lastPos = useRef({ x: 0, y: 0 });
  const dotElRef = useRef<HTMLDivElement>(null);
  const ringElRef = useRef<HTMLDivElement>(null);
  const colorRef = useRef(CURSOR_RED);
  /** Hero overlay nav: white cursor + difference blend (text inverts under ring) */
  const heroNavBlendRef = useRef(false);
  const scaleRef = useRef(1);
  const targetScaleRef = useRef(1);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!finePointer) return;
    const { x, y } = lastPos.current;
    if (x === 0 && y === 0) return;
    const el = document.elementFromPoint(x, y);
    colorRef.current = cursorColorForElement(el, navElevated);
  }, [finePointer, navElevated]);

  useEffect(() => {
    if (!finePointer) return;
    const onMove = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;
      lastPos.current = { x, y };
      dotRef.current = { x, y };
      const raw = e.target;
      const el =
        raw instanceof Element
          ? raw
          : document.elementFromPoint(x, y);
      colorRef.current = cursorColorForElement(el, navElevated);
      heroNavBlendRef.current =
        !navElevated &&
        !!el?.closest(
          'nav[aria-label="Main"] a, nav[aria-label="Main"] button',
        );
      targetScaleRef.current = el?.closest(INTERACTIVE_SELECTOR) ? 1.45 : 1;
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [finePointer, navElevated]);

  useEffect(() => {
    if (!finePointer) return;
    let cancelled = false;
    let rafId = 0;
    const loop = () => {
      if (cancelled) return;
      const t = dotRef.current;
      const r = ringRef.current;
      scaleRef.current += (targetScaleRef.current - scaleRef.current) * 0.24;
      const ringScale = scaleRef.current;
      const dotScale = 1 + (ringScale - 1) * 0.6;
      r.x += (t.x - r.x) * 0.14;
      r.y += (t.y - r.y) * 0.14;
      const c = colorRef.current;
      const blend = heroNavBlendRef.current;
      const dot = dotElRef.current;
      const ring = ringElRef.current;
      if (dot) {
        dot.style.transform = `translate3d(${t.x}px, ${t.y}px, 0) translate(-50%, -50%) scale(${dotScale})`;
        if (blend) {
          dot.style.backgroundColor = "#ffffff";
          dot.style.mixBlendMode = "difference";
        } else {
          dot.style.mixBlendMode = "";
          dot.style.backgroundColor = c;
        }
      }
      if (ring) {
        ring.style.transform = `translate3d(${r.x}px, ${r.y}px, 0) translate(-50%, -50%) scale(${ringScale})`;
        if (blend) {
          ring.style.border = "1px solid #ffffff";
          ring.style.mixBlendMode = "difference";
          ring.style.background = "transparent";
        } else {
          ring.style.mixBlendMode = "";
          ring.style.border = `1px solid ${c}`;
          ring.style.background = "transparent";
        }
      }
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);
    return () => {
      cancelled = true;
      cancelAnimationFrame(rafId);
    };
  }, [finePointer, navElevated]);

  if (!mounted || !finePointer) return null;

  return createPortal(
    <>
      <div
        ref={ringElRef}
        className="pointer-events-none fixed left-0 top-0 z-[2147483646] will-change-transform"
        style={{
          width: 44,
          height: 44,
          borderRadius: 9999,
          border: `1px solid ${CURSOR_RED}`,
          background: "transparent",
        }}
        aria-hidden
      />
      <div
        ref={dotElRef}
        className="pointer-events-none fixed left-0 top-0 z-[2147483647] will-change-transform rounded-full"
        style={{
          width: 8,
          height: 8,
          backgroundColor: CURSOR_RED,
        }}
        aria-hidden
      />
    </>,
    document.body,
  );
}
