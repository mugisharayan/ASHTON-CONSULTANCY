/**
 * CoreServices
 * ------------
 * Displays the 4 main services as a card grid.
 *
 * To add or edit a service, update the SERVICES array below.
 * The JSX template stays the same — no markup changes needed.
 */

import { Link } from 'react-router-dom';

const SERVICES = [
  {
    id: 'field-research',
    title: 'Field Research',
    description:
      'High-quality data collection through surveys, interviews, FGDs, and digital tools.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    id: 'data-analysis',
    title: 'Data Analysis',
    description:
      'Transforming raw data into actionable insights using advanced analytics.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4"  />
        <line x1="6"  y1="20" x2="6"  y2="14" />
      </svg>
    ),
  },
  {
    id: 'gis',
    title: 'GIS & Spatial Analysis',
    description:
      'Mapping, spatial analysis, and remote sensing for better decision-making.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <line x1="2"  y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    id: 'agricultural-advisory',
    title: 'Agricultural Advisory',
    description:
      'Practical recommendations to improve productivity and sustainability.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22V12" />
        <path d="M12 12C12 12 7 9 7 4a5 5 0 0 1 10 0c0 5-5 8-5 8z" />
        <path d="M12 12c0 0-3 2-3 6" />
        <path d="M12 12c0 0 3 2 3 6" />
      </svg>
    ),
  },
];

export default function CoreServices() {
  return (
    <section className="section section--alt" aria-labelledby="services-heading">
      <div className="container">

        <div className="section-heading">
          <h2 id="services-heading">Our Core Services</h2>
          <p>Delivering evidence-based solutions across four key disciplines.</p>
        </div>

        <div className="services__grid">
          {SERVICES.map(({ id, title, description, icon }) => (
            <article key={id} className="service-card">
              <div className="service-card__icon">{icon}</div>
              <h3 className="service-card__title">{title}</h3>
              <p className="service-card__desc">{description}</p>
              <Link to="/services" className="service-card__link">
                Learn More <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
