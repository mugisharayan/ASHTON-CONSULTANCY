/**
 * useScrolled
 * -----------
 * Returns true when the page scroll position exceeds the given
 * threshold (default 60px). Used by Navbar to apply a stronger
 * shadow and background when the user scrolls down.
 *
 * Usage:
 *   const scrolled = useScrolled();
 *
 * The event listener is cleaned up on unmount to prevent memory leaks.
 */

import { useState, useEffect } from 'react';

export function useScrolled(threshold = 60) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > threshold);
    }

    // Check immediately in case page loads mid-scroll
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return scrolled;
}
