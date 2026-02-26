import { useEffect, useState, type RefObject } from 'react';

export function useInViewOnce<T extends Element>(
  ref: RefObject<T | null>,
  options?: IntersectionObserverInit,
) {
  const [hasEntered, setHasEntered] = useState(() => {
    // If IO isn't supported, keep content visible immediately.
    if (typeof window !== 'undefined' && typeof IntersectionObserver === 'undefined') return true;
    return false;
  });

  useEffect(() => {
    if (hasEntered) return;

    // If IntersectionObserver isn't available, don't hide content.
    if (typeof window === 'undefined' || typeof IntersectionObserver === 'undefined') {
      setHasEntered(true);
      return;
    }

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) {
        setHasEntered(true);
        observer.disconnect();
      }
    }, options);

    observer.observe(node);
    return () => observer.disconnect();
  }, [hasEntered, options, ref]);

  return hasEntered;
}

export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(mediaQuery.matches);

    update();
    // Safari < 14 support
    if (mediaQuery.addEventListener) mediaQuery.addEventListener('change', update);
    else mediaQuery.addListener(update);

    return () => {
      if (mediaQuery.removeEventListener) mediaQuery.removeEventListener('change', update);
      else mediaQuery.removeListener(update);
    };
  }, []);

  return reduced;
}
