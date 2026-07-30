import { useEffect } from 'react';

export function useSmoothScroll(): void {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    function onClick(e: MouseEvent) {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // Find closest anchor element
      const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href || href === '#' || href.startsWith('#!')) return;

      // Only handle same-page anchors
      const url = new URL(anchor.href, window.location.href);
      if (url.pathname !== window.location.pathname) return;

      const el = document.querySelector(href) as HTMLElement | null;
      if (!el) return;

      e.preventDefault();

      // Use native smooth scroll
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });

      // Ensure element becomes focusable for keyboard users
      const prevTab = el.getAttribute('tabindex');
      if (!el.hasAttribute('tabindex')) {
        el.setAttribute('tabindex', '-1');
        el.focus({ preventScroll: true });
        // remove the tabindex after a tick so it remains reachable later
        window.setTimeout(() => {
          if (prevTab === null) el.removeAttribute('tabindex');
        }, 1000);
      } else {
        el.focus({ preventScroll: true });
      }
    }

    document.addEventListener('click', onClick);

    return () => {
      document.removeEventListener('click', onClick);
    };
  }, []);
}
