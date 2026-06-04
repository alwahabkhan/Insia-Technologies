"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  advanceCarousel,
  getActiveCarouselIndex,
  scrollCarouselToIndex,
} from "@/app/lib/horizontalCarousel";

type UseHorizontalCarouselOptions = {
  slideSelector: string;
  slideCount: number;
  intervalMs?: number;
  /** When set, auto-advance only runs while this media query matches (e.g. mobile layout). */
  activeMediaQuery?: string;
};

export function useHorizontalCarousel({
  slideSelector,
  slideCount,
  intervalMs = 4000,
  activeMediaQuery,
}: UseHorizontalCarouselOptions) {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [mediaMatches, setMediaMatches] = useState(true);

  useEffect(() => {
    if (!activeMediaQuery) {
      setMediaMatches(true);
      return;
    }

    const mq = window.matchMedia(activeMediaQuery);
    const update = () => setMediaMatches(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [activeMediaQuery]);

  const goToSlide = useCallback(
    (index: number) => {
      const carousel = carouselRef.current;
      if (!carousel) return;
      scrollCarouselToIndex(carousel, slideSelector, index);
    },
    [slideSelector]
  );

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel || slideCount <= 1 || !mediaMatches) return;

    let isVisible = false;
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.1 }
    );
    observer.observe(carousel);

    const intervalId = window.setInterval(() => {
      if (!isVisible) return;
      advanceCarousel(carousel, slideSelector);
    }, intervalMs);

    return () => {
      observer.disconnect();
      window.clearInterval(intervalId);
    };
  }, [intervalMs, mediaMatches, slideCount, slideSelector]);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const onScroll = () => {
      setActiveIndex(getActiveCarouselIndex(carousel, slideSelector));
    };

    carousel.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => carousel.removeEventListener("scroll", onScroll);
  }, [slideSelector]);

  return { carouselRef, activeIndex, goToSlide };
}
