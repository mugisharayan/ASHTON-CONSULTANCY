/**
 * useTheme
 * --------
 * Custom hook that manages the site's light/dark theme.
 *
 * Behaviour:
 * - On first load, reads the saved preference from localStorage.
 *   If none exists, checks the OS preference (prefers-color-scheme).
 * - Applies the theme by setting data-theme="dark" or removing it
 *   on the <html> element. All dark mode styles are CSS variable
 *   overrides scoped to [data-theme="dark"] in tokens.css.
 * - Saves the chosen preference to localStorage on every toggle
 *   so it persists across page visits.
 *
 * Usage:
 *   const { theme, toggleTheme } = useTheme();
 *
 * Returns:
 *   theme       {string}   — 'light' or 'dark'
 *   toggleTheme {function} — call this to switch between modes
 */

import { useState, useEffect } from 'react';

const STORAGE_KEY = 'ashton-theme';

function getInitialTheme() {
  // 1. Check if user has a saved preference
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === 'dark' || saved === 'light') return saved;

  // 2. Fall back to OS preference
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';

  // 3. Default to light
  return 'light';
}

export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;

    if (theme === 'dark') {
      root.setAttribute('data-theme', 'dark');
    } else {
      root.removeAttribute('data-theme');
    }

    // Persist preference so it survives page refresh
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  function toggleTheme() {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  }

  return { theme, toggleTheme };
}
