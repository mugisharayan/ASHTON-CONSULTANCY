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

import { useState, useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import { useTheme } from '../hooks/useTheme';
import { useScrolled } from '../hooks/useScrolled';

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
  const { theme, toggleTheme } = useTheme();
  const scrolled = useScrolled();
  const isDark = theme === 'dark';
  const navRef = useRef(null);

  function closeMenu() {
    setMenuOpen(false);
  }

  // Close mobile menu when user clicks outside the navbar
  useEffect(() => {
    function handleOutsideClick(e) {
      if (menuOpen && navRef.current && !navRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [menuOpen]);

  return (
    <nav ref={navRef} className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} aria-label="Main navigation">
      <div className="container">
        <div className="navbar__inner">

          {/* Logo — links back to home */}
          <Link to="/" className="navbar__logo" onClick={closeMenu} aria-label="ASHTON CONSULTANCY — go to homepage">
            <img src={logo} alt="ASHTON CONSULTANCY logo" />
          </Link>

          {/* Nav links */}
          <div className={`navbar__links ${menuOpen ? 'open' : ''}`}>
            {NAV_LINKS.map(({ label, to }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) => isActive ? 'active' : undefined}
                onClick={closeMenu}
                end={to === '/'}
              >
                {label}
              </NavLink>
            ))}
          </div>

          {/* Right side: CTA + theme toggle */}
          <div className="navbar__actions">
            <Link to="/contact" className="navbar__cta" onClick={closeMenu}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.06 6.06l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z"/>
              </svg>
              Request Consultation
            </Link>

            {/* Theme toggle */}
            <button
              className="navbar__theme-toggle"
              onClick={toggleTheme}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1"  x2="12" y2="3"  />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22"  x2="5.64" y2="5.64"  />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1"  y1="12" x2="3"  y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>
          </div>

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
