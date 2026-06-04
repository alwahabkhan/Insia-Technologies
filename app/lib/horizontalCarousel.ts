export function getCarouselSlides(
  carousel: HTMLElement,
  slideSelector: string
): HTMLElement[] {
  return Array.from(carousel.querySelectorAll<HTMLElement>(slideSelector));
}

export function getActiveCarouselIndex(
  carousel: HTMLElement,
  slideSelector: string
): number {
  const slides = getCarouselSlides(carousel, slideSelector);
  if (slides.length === 0) return 0;

  let closest = 0;
  let minDistance = Infinity;

  slides.forEach((slide, index) => {
    const distance = Math.abs(slide.offsetLeft - carousel.scrollLeft);
    if (distance < minDistance) {
      minDistance = distance;
      closest = index;
    }
  });

  return closest;
}

/** Scrolls the carousel track horizontally only — does not move the page vertically. */
export function scrollCarouselToIndex(
  carousel: HTMLElement,
  slideSelector: string,
  index: number,
  behavior: ScrollBehavior = "smooth"
): void {
  const slides = getCarouselSlides(carousel, slideSelector);
  const slide = slides[index];
  if (!slide) return;

  carousel.scrollTo({
    left: slide.offsetLeft,
    behavior,
  });
}

export function advanceCarousel(
  carousel: HTMLElement,
  slideSelector: string,
  behavior: ScrollBehavior = "smooth"
): void {
  const slides = getCarouselSlides(carousel, slideSelector);
  if (slides.length <= 1) return;

  const current = getActiveCarouselIndex(carousel, slideSelector);
  const next = (current + 1) % slides.length;
  scrollCarouselToIndex(carousel, slideSelector, next, behavior);
}
