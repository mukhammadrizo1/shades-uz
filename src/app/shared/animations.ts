// ─── SHADES — Shared Animations (DRY) ───
import { afterNextRender, DestroyRef, inject } from '@angular/core';

/**
 * IntersectionObserver asosidagi reveal animatsiya.
 * Komponentlar bu funksiyani constructorda chaqiradi.
 */
export function useRevealAnimation(): void {
  const destroyRef = inject(DestroyRef);

  afterNextRender(() => {
    const elements = document.querySelectorAll('.reveal');
    if (!elements.length) return;

    // Check if element is already in initial viewport
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px 40px 0px' }
    );

    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top <= windowHeight) {
        // Already visible in viewport
        el.classList.add('is-visible');
      } else {
        // Prepare for smooth reveal
        el.classList.add('will-reveal');
        observer.observe(el);
      }
    });

    destroyRef.onDestroy(() => observer.disconnect());
  });
}
