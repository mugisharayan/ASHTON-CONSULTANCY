/**
 * ContactSection
 * --------------
 * Reusable contact section used on both the Home page and Contact page.
 *
 * Three columns:
 *   1. Contact details (address, phone, email, hours)
 *   2. Contact form (controlled inputs with basic validation)
 *   3. Map placeholder (replace iframe src with a real embed URL)
 *
 * Form behaviour:
 *   - All fields are controlled via a single state object.
 *   - On submit, basic required-field validation runs before
 *     sending. Extend handleSubmit() to call your API endpoint.
 *   - Success/error feedback is shown inline without a page reload.
 */

import { useState } from 'react';

const SERVICES_OPTIONS = [
  'Field Research',
  'Data Analysis',
  'GIS & Spatial Analysis',
  'Agricultural Advisory',
  'Other',
];

const CONTACT_DETAILS = [
  {
    id: 'address',
    label: 'Office Address',
    value: 'Plot 123, Makerere Hill Road, Kampala, Uganda',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    id: 'phone',
    label: 'Phone Number',
    value: '+256 700 123 456',
    href: 'tel:+256700123456',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.06 6.06l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z" />
      </svg>
    ),
  },
  {
    id: 'email',
    label: 'Email Address',
    value: 'info@ashtonconsultancy.com',
    href: 'mailto:info@ashtonconsultancy.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    id: 'hours',
    label: 'Business Hours',
    value: 'Mon – Fri, 8:00 AM – 5:00 PM',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
];

const EMPTY_FORM = {
  fullName:    '',
  organisation:'',
  email:       '',
  phone:       '',
  service:     '',
  message:     '',
};

export default function ContactSection() {
  const [form, setForm]       = useState(EMPTY_FORM);
  const [error, setError]     = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setError('');

    // Basic required-field validation
    const required = ['fullName', 'email', 'service', 'message'];
    const missing  = required.filter(field => !form[field].trim());

    if (missing.length > 0) {
      setError('Please fill in all required fields.');
      return;
    }

    /*
     * TODO: replace this block with your actual API call, e.g.:
     *   await fetch('/api/contact', { method: 'POST', body: JSON.stringify(form) })
     */
    setSubmitted(true);
    setForm(EMPTY_FORM);
  }

  return (
    <section className="section section--alt" aria-labelledby="contact-heading">
      <div className="container">

        <div className="section-heading">
          <h2 id="contact-heading">Contact Us</h2>
          <p>Get in touch — we&apos;d love to hear from you.</p>
        </div>

        <div className="contact__grid">

          {/* Column 1: Contact details */}
          <div className="contact__details">
            <h3 className="contact__details-title">Get In Touch</h3>
            {CONTACT_DETAILS.map(({ id, label, value, href, icon }) => (
              <div key={id} className="contact__detail-item">
                <div className="contact__detail-icon">{icon}</div>
                <div>
                  <p className="contact__detail-label">{label}</p>
                  {href ? (
                    <a href={href} className="contact__detail-value">{value}</a>
                  ) : (
                    <p className="contact__detail-value">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Column 2: Contact form */}
          <div className="contact__form-col">
            <h3 className="contact__form-title">Send Us a Message</h3>

            {submitted ? (
              <p style={{ color: 'var(--color-accent)', fontWeight: 600 }}>
                ✓ Thank you! Your message has been sent. We&apos;ll be in touch shortly.
              </p>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit} noValidate>

                <div className="contact__form-row">
                  <div className="form-group">
                    <label htmlFor="fullName">Full Name <span aria-hidden="true">*</span></label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={form.fullName}
                      onChange={handleChange}
                      placeholder="John Doe"
                      autoComplete="name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="organisation">Organisation</label>
                    <input
                      type="text"
                      id="organisation"
                      name="organisation"
                      value={form.organisation}
                      onChange={handleChange}
                      placeholder="Your organisation"
                      autoComplete="organization"
                    />
                  </div>
                </div>

                <div className="contact__form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email Address <span aria-hidden="true">*</span></label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      autoComplete="email"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+256 700 000 000"
                      autoComplete="tel"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="service">Service Required <span aria-hidden="true">*</span></label>
                  <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                  >
                    <option value="">Select a service…</option>
                    {SERVICES_OPTIONS.map(opt => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message <span aria-hidden="true">*</span></label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project or enquiry…"
                  />
                </div>

                {error && (
                  <p role="alert" style={{ color: 'red', fontSize: 'var(--text-sm)' }}>
                    {error}
                  </p>
                )}

                <button type="submit" className="btn-primary">
                  Send Message
                </button>

              </form>
            )}
          </div>

          {/* Column 3: Map */}
          <div className="contact__map">
            <h3 className="contact__map-title">Find Us</h3>
            {/*
              Replace the div below with a real Google Maps embed:
              <iframe
                src="https://www.google.com/maps/embed?pb=..."
                width="100%" height="320" style={{ border: 0 }}
                allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ASHTON CONSULTANCY office location"
              />
            */}
            <div className="contact__map-placeholder" role="img" aria-label="Map placeholder — Kampala, Uganda">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <p style={{ fontSize: 'var(--text-sm)' }}>Kampala, Uganda</p>
              <p style={{ fontSize: 'var(--text-xs)' }}>Map embed goes here</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
