/**
 * ArticleGrid
 * -----------
 * Category filter tabs + article card grid.
 *
 * State:
 *   activeCategory {string} — 'all' or a category id from CATEGORIES.
 *
 * To add an article, append an entry to the ARTICLES array.
 * The category value must match one of the ids in CATEGORIES.
 *
 * The `image` field accepts an imported asset — currently null,
 * which renders a styled placeholder div instead.
 */

import { useState } from 'react';

const CATEGORIES = [
  { id: 'all',         label: 'All'         },
  { id: 'agriculture', label: 'Agriculture' },
  { id: 'gis',         label: 'GIS'         },
  { id: 'research',    label: 'Research'    },
  { id: 'environment', label: 'Environment' },
  { id: 'technology',  label: 'Technology'  },
];

const ARTICLES = [
  {
    id: 1,
    title: 'Climate-Smart Agriculture Practices for Smallholder Farmers',
    date: 'May 10, 2024',
    category: 'agriculture',
    image: null,
  },
  {
    id: 2,
    title: 'GIS Applications in Modern Agriculture',
    date: 'April 28, 2024',
    category: 'gis',
    image: null,
  },
  {
    id: 3,
    title: 'Data-Driven Decision Making in Development Programmes',
    date: 'April 15, 2024',
    category: 'research',
    image: null,
  },
  {
    id: 4,
    title: 'Environmental Impact Assessment: A Practical Guide',
    date: 'March 30, 2024',
    category: 'environment',
    image: null,
  },
  {
    id: 5,
    title: 'Digital Tools Transforming Field Research in Uganda',
    date: 'March 12, 2024',
    category: 'technology',
    image: null,
  },
  {
    id: 6,
    title: 'Understanding Soil Health for Better Crop Yields',
    date: 'February 28, 2024',
    category: 'agriculture',
    image: null,
  },
];

/* Maps category id to its display label for the card badge */
const CATEGORY_LABELS = Object.fromEntries(
  CATEGORIES.filter(c => c.id !== 'all').map(c => [c.id, c.label])
);

export default function ArticleGrid() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [showAll, setShowAll] = useState(false);

  const filtered = activeCategory === 'all'
    ? ARTICLES
    : ARTICLES.filter(a => a.category === activeCategory);

  // Show 3 by default, all when "View All Articles" is clicked
  const visible = showAll ? filtered : filtered.slice(0, 3);
  const hasMore  = !showAll && filtered.length > 3;

  function handleCategoryChange(id) {
    setActiveCategory(id);
    setShowAll(false); // reset when switching category
  }

  return (
    <section className="insights-page" aria-labelledby="insights-heading">
      <div className="container">

        {/* Category filter tabs */}
        <nav className="insights-page__nav" aria-label="Filter articles by category">
          {CATEGORIES.map(({ id, label }) => (
            <button
              key={id}
              className={`insights-page__tab ${activeCategory === id ? 'active' : ''}`}
              onClick={() => handleCategoryChange(id)}
              aria-pressed={activeCategory === id}
            >
              {label}
            </button>
          ))}
        </nav>

        {/* Article card grid */}
        <div className="insights-page__grid">
          {visible.length === 0 ? (
            <p className="insights-page__empty">No articles found in this category.</p>
          ) : (
            visible.map(({ id, title, date, category, image }) => (
              <article key={id} className="article-card">

                {/* Article image or placeholder */}
                {image ? (
                  <img src={image} alt={title} className="article-card__image" />
                ) : (
                  <div
                    className="article-card__image"
                    role="img"
                    aria-label={`Photo placeholder for article: ${title}`}
                  />
                )}

                <div className="article-card__body">
                  <div className="article-card__meta">
                    <span className="article-card__date">{date}</span>
                    <span className="article-card__category">
                      {CATEGORY_LABELS[category]}
                    </span>
                  </div>
                  <h3 className="article-card__title">{title}</h3>
                  <a href="#" className="article-card__link">
                    Read More <span aria-hidden="true">→</span>
                  </a>
                </div>

              </article>
            ))
          )}
        </div>

        {/* View all / load more */}
        {hasMore && (
          <div className="insights-page__cta">
            <button
              className="btn-primary"
              onClick={() => setShowAll(true)}
            >
              View All Articles
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
