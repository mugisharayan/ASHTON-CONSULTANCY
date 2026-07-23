/**
 * BackToTop
 * ---------
 * A floating button that appears in the bottom-right corner after
 * the user scrolls down 400px. Clicking it smoothly scrolls back
 * to the top of the page.
 *
 * Reuses the useScrolled hook with a higher threshold (400px)
 * so it only appears when the user is well into the page.
 *
 * Placed in Layout.jsx so it appears on every page automatically.
 */

import { useScrolled } from '../hooks/useScrolled';

export default function BackToTop() {
  const visible = useScrolled(400);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Render nothing until the user has scrolled far enough
  if (!visible) return null;

  return (
    <button
      className="back-to-top"
      onClick={scrollToTop}
      aria-label="Back to top"
      title="Back to top"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </button>
  );
}
