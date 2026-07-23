/**
 * useInView
 * ---------
 * Detects when a DOM element enters the visible viewport using the
 * native IntersectionObserver API. No external library needed.
 *
 * Usage:
 *   const { ref, inView } = useInView();
 *   <div ref={ref} className={`animate fade-up ${inView ? 'in-view' : ''}`} />
 *
 * Options:
 *   threshold {number} — 0 to 1. How much of the element must be visible
 *                        before triggering. Default 0.15 (15%).
 *   once      {boolean} — if true, stops observing after first trigger.
 *                         Default true — animations only play once.
 */

import { useEffect, useRef, useState } from 'react';

export function useInView({ threshold = 0.15, once = true } = {}) {
  const ref     = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          // Stop observing after first trigger if once = true
          if (once) observer.unobserve(element);
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold }
    );

    observer.observe(element);

    // Cleanup: disconnect observer when component unmounts
    return () => observer.disconnect();
  }, [threshold, once]);

  return { ref, inView };
}
