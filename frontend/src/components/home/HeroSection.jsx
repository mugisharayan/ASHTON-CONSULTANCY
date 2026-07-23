/**
 * HeroSection
 * -----------
 * Full-width banner at the top of the Home page.
 *
 * - Background image with a dark overlay (defined in home.css)
 *   ensures white text is readable regardless of the photo.
 * - "Agriculture & Environment" is wrapped in a <span> so it
 *   can be styled in lime green via the .hero__title span rule.
 * - Both buttons use global utility classes from index.css so
 *   button styles stay consistent across the whole site.
 */

import { Link } from 'react-router-dom';
import { useInView } from '../../hooks/useInView';

export default function HeroSection() {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section className="hero" aria-label="Hero banner">
      <div className="container">
        <div
          ref={ref}
          className={`hero__content animate fade-up ${inView ? 'in-view' : ''}`}
        >
          <h1 className="hero__title">
            Evidence-Based Solutions for<br />
            <span>Agriculture &amp; Environment</span>
          </h1>
          <p className="hero__subtitle">
            We deliver reliable field research, data analysis, GIS solutions,
            and agricultural advisory services that drive sustainable impact.
          </p>
          <div className="hero__actions">
            <Link to="/services" className="btn-primary">Our Services</Link>
            <Link to="/contact"  className="btn-outline">Request Consultation</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
