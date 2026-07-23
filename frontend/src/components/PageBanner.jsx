/**
 * PageBanner
 * ----------
 * The dark-teal hero strip shown at the top of every interior page.
 * Displays the page title and a "Home / [Page]" breadcrumb.
 *
 * Props:
 *   title {string} — the page heading displayed in white (e.g. "About Us")
 *   page  {string} — the breadcrumb label (e.g. "About Us")
 */

import { Link } from 'react-router-dom';

export default function PageBanner({ title, page }) {
  return (
    <div className="page-banner">
      <div className="container">
        <h1>{title}</h1>
        <nav className="page-banner__breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span>{page}</span>
        </nav>
      </div>
    </div>
  );
}
