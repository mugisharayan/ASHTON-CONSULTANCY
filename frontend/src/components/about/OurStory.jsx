/**
 * OurStory
 * --------
 * Two-column section: text content on the left, photo on the right.
 *
 * The left column contains:
 *   - Two descriptive paragraphs about the company
 *   - Three value rows: Vision, Mission, Core Values
 *
 * The image src uses hero.png as a placeholder.
 * Replace the import with the actual field photo when available
 * (man kneeling in maize field with tablet/clipboard).
 */

import fieldPhoto from '../../assets/hero.png';
import { useInView } from '../../hooks/useInView';

const VALUES = [
  {
    id: 'vision',
    title: 'Vision',
    text: 'A sustainable future where data drives positive change.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="3"  />
      </svg>
    ),
  },
  {
    id: 'mission',
    title: 'Mission',
    text: 'To provide reliable data, insightful analysis, and practical recommendations for sustainable development.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    id: 'values',
    title: 'Core Values',
    text: 'Precision · Compassion · Innovation · Integrity · Sustainability',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
];

export default function OurStory() {
  const { ref: leftRef,  inView: leftIn  } = useInView();
  const { ref: rightRef, inView: rightIn } = useInView();

  return (
    <section className="section" aria-labelledby="our-story-heading">
      <div className="container">
        <div className="our-story__grid">

          <div ref={leftRef} className={`animate fade-right ${leftIn ? 'in-view' : ''}`}>
            <p className="our-story__label">Our Story</p>
            <h2 className="our-story__title" id="our-story-heading">
              Founded on a Passion for Excellence
            </h2>
            <p className="our-story__body">
              ASHTON CONSULTANCY was founded with a deep passion for excellence
              and a commitment to sustainability. Over the years we have grown
              into a trusted partner for organisations across Uganda and beyond,
              delivering research and advisory services that make a real
              difference on the ground.
            </p>
            <p className="our-story__body">
              We combine local knowledge with modern technology to deliver
              solutions that transform communities and protect the environment —
              because we believe that good data, honestly analysed, is the
              foundation of every lasting positive change.
            </p>
            <div className="our-story__values">
              {VALUES.map(({ id, title, text, icon }) => (
                <div key={id} className="our-story__value-item">
                  <div className="our-story__value-icon">{icon}</div>
                  <div>
                    <p className="our-story__value-title">{title}</p>
                    <p className="our-story__value-text">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div ref={rightRef} className={`animate fade-left ${rightIn ? 'in-view' : ''}`}>
            <img
              src={fieldPhoto}
              alt="ASHTON CONSULTANCY researcher kneeling in a maize field reviewing data on a tablet"
              className="our-story__image"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
