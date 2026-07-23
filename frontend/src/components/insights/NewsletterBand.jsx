/**
 * NewsletterBand
 * --------------
 * Full-width dark teal band with an email signup form.
 * Reusable — can be dropped into any page that needs it.
 *
 * State:
 *   email     {string}  — controlled input value
 *   submitted {boolean} — shows success message after submit
 *   error     {string}  — inline validation message
 *
 * On submit, extend handleSubmit() with your API call.
 */

import { useState } from 'react';

/* Basic email format check — avoids a full validation library dependency */
function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default function NewsletterBand() {
  const [email, setEmail]         = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError]         = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setError('');

    if (!email.trim()) {
      setError('Please enter your email address.');
      return;
    }

    if (!isValidEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    /*
     * TODO: replace with your API call, e.g.:
     *   await fetch('/api/newsletter', { method: 'POST', body: JSON.stringify({ email }) })
     */
    setSubmitted(true);
    setEmail('');
  }

  return (
    <section className="section section--dark newsletter" aria-labelledby="newsletter-heading">
      <div className="container">

        <div className="section-heading">
          <h2 id="newsletter-heading">Subscribe to Our Newsletter</h2>
          <p style={{ color: 'rgba(255,255,255,0.75)' }}>
            Get the latest insights, research updates, and news from
            ASHTON CONSULTANCY delivered to your inbox.
          </p>
        </div>

        {submitted ? (
          <p className="newsletter__success">
            ✓ Thank you for subscribing! You&apos;ll hear from us soon.
          </p>
        ) : (
          <form
            className="newsletter__form"
            onSubmit={handleSubmit}
            noValidate
            aria-label="Newsletter signup form"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              type="email"
              id="newsletter-email"
              className="newsletter__input"
              placeholder="Enter your email address"
              value={email}
              onChange={e => setEmail(e.target.value)}
              autoComplete="email"
              aria-describedby={error ? 'newsletter-error' : undefined}
            />
            <button type="submit" className="newsletter__btn">
              Subscribe
            </button>
          </form>
        )}

        {error && (
          <p
            id="newsletter-error"
            role="alert"
            style={{ textAlign: 'center', color: '#fca5a5', fontSize: 'var(--text-sm)', marginTop: 'var(--space-3)' }}
          >
            {error}
          </p>
        )}

      </div>
    </section>
  );
}
