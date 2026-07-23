/**
 * ProjectGrid
 * -----------
 * Filter tabs + project card grid with status badges.
 *
 * State:
 *   activeFilter {string}  — 'all' | 'completed' | 'ongoing'
 *   visibleCount {number}  — how many cards are currently shown.
 *                            Increases by BATCH_SIZE on "Load More".
 *
 * To add a project, append an entry to the PROJECTS array.
 * The `image` field accepts an imported asset — currently null,
 * which renders a styled placeholder div instead.
 *
 * Status values must be exactly 'completed' or 'ongoing' so the
 * filter and badge logic work without any other changes.
 */

import { useState } from 'react';
import { Link } from 'react-router-dom';

const BATCH_SIZE = 6; // cards shown initially and added on each "Load More"

const PROJECTS = [
  {
    id: 1,
    title: 'Agricultural Baseline Survey',
    region: 'Central Region, Uganda',
    status: 'completed',
    image: null,
  },
  {
    id: 2,
    title: 'GIS Mapping for Land Use',
    region: 'Western Region, Uganda',
    status: 'completed',
    image: null,
  },
  {
    id: 3,
    title: 'Coffee Value Chain Study',
    region: 'Eastern Region, Uganda',
    status: 'completed',
    image: null,
  },
  {
    id: 4,
    title: 'Climate Smart Agriculture',
    region: 'Northern Region, Uganda',
    status: 'ongoing',
    image: null,
  },
  {
    id: 5,
    title: 'Market Assessment Study',
    region: 'Kampala, Uganda',
    status: 'ongoing',
    image: null,
  },
  {
    id: 6,
    title: 'Environmental Impact Study',
    region: 'South Western Region, Uganda',
    status: 'ongoing',
    image: null,
  },
];

const TABS = [
  { id: 'all',       label: 'All Projects' },
  { id: 'completed', label: 'Completed'    },
  { id: 'ongoing',   label: 'Ongoing'      },
];

const STATUS_LABELS = {
  completed: 'Completed',
  ongoing:   'Ongoing',
};

export default function ProjectGrid() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);

  // Filter projects by active tab
  const filtered = activeFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.status === activeFilter);

  // Only show up to visibleCount cards
  const visible = filtered.slice(0, visibleCount);

  const hasMore = visibleCount < filtered.length;

  function handleTabChange(tabId) {
    setActiveFilter(tabId);
    setVisibleCount(BATCH_SIZE); // reset visible count when filter changes
  }

  return (
    <section className="projects-page" aria-labelledby="projects-page-heading">
      <div className="container">

        {/* Filter tabs */}
        <nav className="projects-page__nav" aria-label="Filter projects by status">
          {TABS.map(({ id, label }) => (
            <button
              key={id}
              className={`projects-page__tab ${activeFilter === id ? 'active' : ''}`}
              onClick={() => handleTabChange(id)}
              aria-pressed={activeFilter === id}
            >
              {label}
            </button>
          ))}
        </nav>

        {/* Project card grid */}
        <div className="projects-page__grid">
          {visible.length === 0 ? (
            <p className="projects-page__empty">No projects found.</p>
          ) : (
            visible.map(({ id, title, region, status, image }) => (
              <article key={id} className="project-card--full">

                {/* Project photo or placeholder */}
                {image ? (
                  <img
                    src={image}
                    alt={title}
                    className="project-card--full__image"
                  />
                ) : (
                  <div
                    className="project-card--full__image"
                    role="img"
                    aria-label={`Photo placeholder for ${title}`}
                  />
                )}

                <div className="project-card--full__body">
                  <div className="project-card--full__header">
                    <h3 className="project-card--full__title">{title}</h3>
                    <span className={`badge badge--${status}`}>
                      {STATUS_LABELS[status]}
                    </span>
                  </div>

                  <p className="project-card--full__region">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    {region}
                  </p>

                  <Link to="/projects" className="project-card--full__link">
                    View Details <span aria-hidden="true">→</span>
                  </Link>
                </div>

              </article>
            ))
          )}
        </div>

        {/* Load more — only shown when more cards exist */}
        {hasMore && (
          <div className="projects-page__cta">
            <button
              className="btn-primary"
              onClick={() => setVisibleCount(prev => prev + BATCH_SIZE)}
            >
              Load More Projects
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
