import { useEffect } from 'react';

type UseRevealOptions = {
  selectors?: string[];
  rootMargin?: string;
  threshold?: number;
};

export function useReveal({
  selectors = ['.reveal'],
  rootMargin = '0px 0px -80px 0px',
  threshold = 0.12,
}: UseRevealOptions = {}): void {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const elements = Array.from(document.querySelectorAll(selectors.join(','))) as HTMLElement[];
    if (!elements.length) return;

    // Apply small staggered delay to make reveal feel nicer
    elements.forEach((el, idx) => {
      const delay = (idx % 6) * 90; // up to ~540ms
      el.style.transitionDelay = `${delay}ms`;
    });

    if (!('IntersectionObserver' in window)) {
      // Fallback: reveal all immediately
      elements.forEach((el) => el.classList.add('visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const target = entry.target as HTMLElement;
          target.classList.add('visible');
          obs.unobserve(target);
        });
      },
      { root: null, rootMargin, threshold }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [selectors, rootMargin, threshold]);
}
