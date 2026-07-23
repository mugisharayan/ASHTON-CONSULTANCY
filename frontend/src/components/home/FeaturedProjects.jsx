/**
 * FeaturedProjects
 * ----------------
 * Displays 4 featured project cards in a grid.
 *
 * The `image` field in each project object should be an imported
 * image asset or a URL. Currently set to null — the card renders
 * a styled placeholder until real photos are provided.
 *
 * To add a real photo:
 *   1. Add the image file to src/assets/
 *   2. Import it at the top of this file
 *   3. Set it as the `image` value in the PROJECTS array
 */

import { Link } from 'react-router-dom';
import { useInView } from '../../hooks/useInView';

const PROJECTS = [
  {
    id: 1,
    title: 'Agricultural Baseline Survey',
    region: 'Central Region, Uganda',
    image: null, // replace with imported image asset
  },
  {
    id: 2,
    title: 'GIS Mapping for Land Use',
    region: 'Western Region, Uganda',
    image: null,
  },
  {
    id: 3,
    title: 'Coffee Value Chain Study',
    region: 'Eastern Region, Uganda',
    image: null,
  },
  {
    id: 4,
    title: 'Climate Smart Agriculture',
    region: 'Northern Region, Uganda',
    image: null,
  },
];

export default function FeaturedProjects() {
  const { ref: headingRef, inView: headingIn } = useInView();

  return (
    <section className="section" aria-labelledby="projects-heading">
      <div className="container">

        <div
          ref={headingRef}
          className={`section-heading animate fade-up ${headingIn ? 'in-view' : ''}`}
        >
          <h2 id="projects-heading">Featured Projects</h2>
          <p>A selection of our recent work across Uganda.</p>
        </div>

        <div className="projects__grid">
          {PROJECTS.map(({ id, title, region, image }, index) => (
            <ProjectCard
              key={id}
              title={title}
              region={region}
              image={image}
              delay={index + 1}
            />
          ))}
        </div>

        <div className="projects__cta">
          <Link to="/projects" className="btn-primary">View All Projects</Link>
        </div>

      </div>
    </section>
  );
}

function ProjectCard({ title, region, image, delay }) {
  const { ref, inView } = useInView();
  return (
    <article
      ref={ref}
      className={`project-card animate fade-up animate--delay-${delay} ${inView ? 'in-view' : ''}`}
    >
      {image ? (
        <img src={image} alt={title} className="project-card__image" />
      ) : (
        <div className="project-card__image" role="img" aria-label={`Photo for ${title} — placeholder`} />
      )}
      <div className="project-card__body">
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__region">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          {region}
        </p>
        <Link to="/projects" className="project-card__link">
          View Project <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
