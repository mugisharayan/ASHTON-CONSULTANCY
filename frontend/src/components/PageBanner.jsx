/**
 * PageBanner
 * ----------
 * The hero strip shown at the top of every interior page.
 * Dark teal background with a subtle dot pattern overlay,
 * a page title, an accent divider, and an optional subtitle.
 *
 * Props:
 *   title    {string} — main page heading (e.g. "About Us")
 *   subtitle {string} — short descriptive line beneath the title
 */

export default function PageBanner({ title, subtitle }) {
  return (
    <div className="page-banner">
      {/* Decorative dot grid overlay — pure CSS, no image needed */}
      <div className="page-banner__pattern" aria-hidden="true" />

      <div className="container">
        <div className="page-banner__content">
          <div className="page-banner__accent" aria-hidden="true" />
          <h1 className="page-banner__title">{title}</h1>
          {subtitle && <p className="page-banner__subtitle">{subtitle}</p>}
        </div>
      </div>
    </div>
  );
}
