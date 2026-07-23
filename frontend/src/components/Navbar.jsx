/**
 * Navbar
 * ------
 * Main navigation bar. Sticky at the top of the viewport while scrolling.
 *
 * Behaviour:
 * - Uses NavLink (react-router-dom) so the current route automatically
 *   receives the "active" CSS class, which triggers the underline indicator.
 * - On mobile (≤768px) the links collapse behind a hamburger toggle.
 * - Clicking a nav link on mobile closes the menu automatically.
 */

import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';

const NAV_LINKS = [
  { label: 'Home',      to: '/'         },
  { label: 'About Us',  to: '/about'    },
  { label: 'Services',  to: '/services' },
  { label: 'Projects',  to: '/projects' },
  { label: 'Insights',  to: '/insights' },
  { label: 'Contact',   to: '/contact'  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <nav className="navbar" aria-label="Main navigation">
      <div className="container">
        <div className="navbar__inner">

          {/* Logo — links back to home */}
          <Link to="/" className="navbar__logo" onClick={closeMenu} aria-label="ASHTON CONSULTANCY — go to homepage">
            <img src={logo} alt="ASHTON CONSULTANCY logo" />
          </Link>

          {/* Desktop nav links */}
          <div className={`navbar__links ${menuOpen ? 'open' : ''}`}>
            {NAV_LINKS.map(({ label, to }) => (
              <NavLink
                key={to}
                to={to}
                // NavLink passes { isActive } so we can apply the class cleanly
                className={({ isActive }) => isActive ? 'active' : undefined}
                onClick={closeMenu}
                end={to === '/'} // "end" prevents "/" matching every route
              >
                {label}
              </NavLink>
            ))}

            {/* CTA inside mobile menu */}
            <Link to="/contact" className="btn-primary navbar__cta--mobile" onClick={closeMenu}>
              Request Consultation
            </Link>
          </div>

          {/* Desktop CTA button */}
          <Link to="/contact" className="btn-primary navbar__cta">
            Request Consultation
          </Link>

          {/* Mobile hamburger toggle */}
          <button
            className="navbar__toggle"
            onClick={() => setMenuOpen(prev => !prev)}
            aria-expanded={menuOpen}
            aria-controls="navbar-links"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            <span />
            <span />
            <span />
          </button>

        </div>
      </div>
    </nav>
  );
}
