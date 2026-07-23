/**
 * Footer
 * ------
 * Site-wide footer. Dark teal background, 4-column grid on desktop,
 * stacked on mobile (handled in components.css).
 *
 * Columns:
 *   1. Logo + tagline + social icons
 *   2. Quick Links (internal routes)
 *   3. Our Services (internal routes)
 *   4. Contact Info
 *
 * This is a purely presentational component — no props, no state.
 * Update the data constants below if content changes.
 */

import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';

const QUICK_LINKS = [
  { label: 'Home',      to: '/'         },
  { label: 'About Us',  to: '/about'    },
  { label: 'Services',  to: '/services' },
  { label: 'Projects',  to: '/projects' },
  { label: 'Insights',  to: '/insights' },
  { label: 'Contact',   to: '/contact'  },
  { label: 'FAQ',       to: '/services#faq' },
];

const SERVICE_LINKS = [
  { label: 'Field Research',        to: '/services' },
  { label: 'Data Analysis',         to: '/services' },
  { label: 'GIS & Spatial Analysis',to: '/services' },
  { label: 'Agricultural Advisory', to: '/services' },
];

const SOCIAL_LINKS = [
  {
    label: 'Facebook',
    href: 'https://facebook.com',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: 'Twitter / X',
    href: 'https://twitter.com',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M4 4l16 16M4 20L20 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">

          {/* Column 1: Logo + tagline + social */}
          <div className="footer__col">
            <img src={logo} alt="ASHTON CONSULTANCY logo" className="footer__logo" />
            <p className="footer__tagline">
              Evidence-based solutions for agriculture and environmental impact
              through research, data, and innovation.
            </p>
            <nav className="footer__social" aria-label="Social media links">
              {SOCIAL_LINKS.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                >
                  {icon}
                </a>
              ))}
            </nav>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer__col">
            <h3>Quick Links</h3>
            <nav className="footer__links" aria-label="Quick links">
              {QUICK_LINKS.map(({ label, to }) => (
                <Link key={label} to={to}>{label}</Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Our Services */}
          <div className="footer__col">
            <h3>Our Services</h3>
            <nav className="footer__links" aria-label="Services links">
              {SERVICE_LINKS.map(({ label, to }) => (
                <Link key={label} to={to}>{label}</Link>
              ))}
            </nav>
          </div>

          {/* Column 4: Contact Info */}
          <div className="footer__col">
            <h3>Contact Info</h3>

            <div className="footer__contact-item">
              {/* Location icon */}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <address style={{ fontStyle: 'normal' }}>
                Plot 123, Makerere Hill Road,<br />Kampala, Uganda
              </address>
            </div>

            <div className="footer__contact-item">
              {/* Phone icon */}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.06 6.06l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z" />
              </svg>
              <a href="tel:+256700123456">+256 700 123 456</a>
            </div>

            <div className="footer__contact-item">
              {/* Email icon */}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <a href="mailto:info@ashtonconsultancy.com">info@ashtonconsultancy.com</a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="footer__bottom">
          <span>© {currentYear} ASHTON CONSULTANCY. All Rights Reserved.</span>
          <span>
            <a href="/privacy">Privacy Policy</a>
            {' | '}
            <a href="/terms">Terms of Use</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
