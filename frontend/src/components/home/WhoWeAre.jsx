/**
 * WhoWeAre
 * --------
 * Two-column section: descriptive text on the left, photo on the right.
 *
 * The image src uses the hero.png placeholder — replace with the actual
 * field photo (man in teal polo with tablet) when available.
 * Just swap the import at the top; no other changes needed.
 */

import { Link } from 'react-router-dom';
import fieldPhoto from '../../assets/hero.png'; // replace with actual photo

export default function WhoWeAre() {
  return (
    <section className="section" aria-labelledby="who-we-are-heading">
      <div className="container">
        <div className="who-we-are__grid">

          {/* Left: text content */}
          <div>
            <p className="who-we-are__label">Who We Are</p>
            <h2 className="who-we-are__title" id="who-we-are-heading">
              A Trusted Partner in Research &amp; Advisory
            </h2>
            <p className="who-we-are__body">
              ASHTON CONSULTANCY is a leading consultancy firm providing
              professional services in field research, data analysis, GIS &amp;
              spatial analysis, and agricultural advisory. Based in Kampala,
              Uganda, we serve organisations across East Africa and beyond.
            </p>
            <p className="who-we-are__body">
              We help organisations make informed decisions through accurate
              data, advanced analytics, and practical solutions — combining
              local knowledge with modern technology to deliver measurable,
              sustainable impact.
            </p>
            <div className="who-we-are__cta">
              <Link to="/about" className="btn-outline-accent">
                Learn More About Us
              </Link>
            </div>
          </div>

          {/* Right: photo */}
          <div>
            <img
              src={fieldPhoto}
              alt="ASHTON CONSULTANCY researcher working in a crop field with a tablet"
              className="who-we-are__image"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
