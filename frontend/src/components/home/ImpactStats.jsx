/**
 * ImpactStats
 * -----------
 * Full-width dark teal band showing 5 key impact numbers.
 *
 * To update a stat, edit the STATS array below.
 * The dark background comes from the .section--dark utility class
 * defined in index.css — no custom background color needed here.
 */

import { useInView } from '../../hooks/useInView';

const STATS = [
  { number: '150+',  label: 'Projects Completed' },
  { number: '250K+', label: 'Farmers Reached'     },
  { number: '500+',  label: 'Surveys Conducted'   },
  { number: '50+',   label: 'Districts Covered'   },
  { number: '120+',  label: 'Research Reports'    },
];

export default function ImpactStats() {
  const { ref: headingRef, inView: headingIn } = useInView();

  return (
    <section className="section section--dark" aria-labelledby="impact-heading">
      <div className="container">

        <div
          ref={headingRef}
          className={`section-heading animate fade-up ${headingIn ? 'in-view' : ''}`}
        >
          <h2 id="impact-heading">Our Impact in Numbers</h2>
        </div>

        <div className="impact__grid">
          {STATS.map(({ number, label }, index) => (
            <StatItem key={label} number={number} label={label} delay={index + 1} />
          ))}
        </div>

      </div>
    </section>
  );
}

function StatItem({ number, label, delay }) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={`animate fade-up animate--delay-${delay} ${inView ? 'in-view' : ''}`}
    >
      <span className="impact__stat-number">{number}</span>
      <span className="impact__stat-label">{label}</span>
    </div>
  );
}
