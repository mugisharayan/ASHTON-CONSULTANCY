/**
 * OurApproach
 * -----------
 * Full-width dark teal band showing the 6-step methodology.
 *
 * The horizontal connector line between steps is drawn using
 * the .approach__steps::before CSS pseudo-element — no extra
 * markup is needed for it.
 *
 * To update a step, edit the STEPS array below.
 */

import { useInView } from '../../hooks/useInView';

const STEPS = [
  {
    id: 'research',
    label: 'Research',
    description: 'Define objectives and review existing literature.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    id: 'collect',
    label: 'Collect',
    description: 'Gather primary data using proven field methods.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    id: 'analyze',
    label: 'Analyze',
    description: 'Process and interpret data using advanced analytics.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4"  />
        <line x1="6"  y1="20" x2="6"  y2="14" />
      </svg>
    ),
  },
  {
    id: 'map',
    label: 'Map',
    description: 'Visualise findings using GIS and spatial tools.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
        <line x1="8"  y1="2"  x2="8"  y2="18" />
        <line x1="16" y1="6"  x2="16" y2="22" />
      </svg>
    ),
  },
  {
    id: 'recommend',
    label: 'Recommend',
    description: 'Deliver clear, evidence-based recommendations.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
  {
    id: 'impact',
    label: 'Impact',
    description: 'Support implementation and measure real-world outcomes.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9"  y1="9"  x2="9.01"  y2="9"  />
        <line x1="15" y1="9"  x2="15.01" y2="9"  />
      </svg>
    ),
  },
];

export default function OurApproach() {
  const { ref: headingRef, inView: headingIn } = useInView();

  return (
    <section className="section section--dark" aria-labelledby="approach-heading">
      <div className="container">

        <div
          ref={headingRef}
          className={`section-heading animate fade-up ${headingIn ? 'in-view' : ''}`}
        >
          <h2 id="approach-heading">Our Approach</h2>
          <p>We use a systematic and evidence-based approach to deliver measurable results.</p>
        </div>

        <div className="approach__steps">
          {STEPS.map(({ id, label, description, icon }, index) => (
            <ApproachStep
              key={id}
              label={label}
              description={description}
              icon={icon}
              delay={index + 1}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

function ApproachStep({ label, description, icon, delay }) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={`approach__step animate fade-up animate--delay-${delay} ${inView ? 'in-view' : ''}`}
    >
      <div className="approach__step-icon" aria-hidden="true">{icon}</div>
      <p className="approach__step-label">{label}</p>
      <p className="approach__step-desc">{description}</p>
    </div>
  );
}
