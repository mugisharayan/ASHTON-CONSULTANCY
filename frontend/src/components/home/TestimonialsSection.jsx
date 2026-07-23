import { useState, useEffect, useCallback } from 'react';
import { useInView } from '../../hooks/useInView';

/* TODO: Replace with real testimonials */
const TESTIMONIALS = [
  {
    id: 1,
    quote:
      "Ashton Consultancy delivered a thorough environmental impact assessment that exceeded our expectations. Their expertise and professionalism were evident throughout the entire project.",
    name: 'Jane Nakato',
    role: 'Project Director, Ministry of Agriculture',
    initials: 'JN',
  },
  {
    id: 2,
    quote:
      "Their social research methodology was rigorous and culturally sensitive. The insights they provided shaped our community development programme in ways we hadn't anticipated.",
    name: 'Dr. Robert Ssemakula',
    role: 'Programme Manager, USAID Uganda',
    initials: 'RS',
  },
  {
    id: 3,
    quote:
      "We've partnered with Ashton on three consecutive projects. Their consistency, depth of local knowledge, and commitment to quality make them our go-to consultancy in East Africa.",
    name: 'Amina Ochieng',
    role: 'Country Director, GIZ Uganda',
    initials: 'AO',
  },
  {
    id: 4,
    quote:
      "The agricultural value chain analysis they conducted was comprehensive and actionable. We implemented their recommendations and saw measurable improvements within six months.",
    name: 'Peter Muwanga',
    role: 'CEO, Uganda Agribusiness Alliance',
    initials: 'PM',
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const { ref, inView } = useInView();

  const next = useCallback(() => setActive(i => (i + 1) % TESTIMONIALS.length), []);
  const prev = () => setActive(i => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [paused, next]);

  const t = TESTIMONIALS[active];

  return (
    <section className="testimonials-section">
      <div className="container">

        {/* Header */}
        <div ref={ref} className={`testimonials-section__header animate fade-up ${inView ? 'in-view' : ''}`}>
          <span className="testimonials-section__eyebrow">
            <span className="testimonials-section__eyebrow-line" />
            Client Voices
            <span className="testimonials-section__eyebrow-line" />
          </span>
          <h2 className="testimonials-section__title">
            Trusted by Leaders <span>Across East Africa</span>
          </h2>
        </div>

        {/* Carousel */}
        <div
          className="testimonials-section__card"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Large decorative quote mark */}
          <svg className="testimonials-section__bigquote" viewBox="0 0 60 45" aria-hidden="true">
            <text x="0" y="44" fontSize="72" fontFamily="Georgia, serif" fill="currentColor">"</text>
          </svg>

          <p className="testimonials-section__quote">{t.quote}</p>

          <div className="testimonials-section__divider" />

          <div className="testimonials-section__author">
            <div className="testimonials-section__avatar">{t.initials}</div>
            <div className="testimonials-section__author-info">
              <strong className="testimonials-section__name">{t.name}</strong>
              <span className="testimonials-section__role">{t.role}</span>
            </div>
          </div>

          {/* Arrows */}
          <button className="testimonials-section__arrow testimonials-section__arrow--prev" onClick={prev} aria-label="Previous">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6" /></svg>
          </button>
          <button className="testimonials-section__arrow testimonials-section__arrow--next" onClick={next} aria-label="Next">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6" /></svg>
          </button>
        </div>

        {/* Dots */}
        <div className="testimonials-section__dots">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              aria-label={`Testimonial ${i + 1}`}
              className={`testimonials-section__dot${i === active ? ' testimonials-section__dot--active' : ''}`}
              onClick={() => setActive(i)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
