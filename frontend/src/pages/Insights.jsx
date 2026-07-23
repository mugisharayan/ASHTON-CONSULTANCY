/**
 * Insights & Resources Page
 * -------------------------
 * Assembles all Insights page sections in order.
 * Each section is its own component in src/components/insights/.
 *
 * Section order (matches the spec):
 *   1. PageBanner      — dark teal title strip with breadcrumb
 *   2. ArticleGrid     — category filter tabs + article card grid
 *   3. NewsletterBand  — email signup on dark teal background
 */

import '../styles/insights.css';

import PageBanner     from '../components/PageBanner';
import ArticleGrid    from '../components/insights/ArticleGrid';
import NewsletterBand from '../components/insights/NewsletterBand';

export default function Insights() {
  return (
    <>
      <PageBanner title="Insights & Resources" subtitle="Research updates, field notes, and expert perspectives from our team" />
      <ArticleGrid />
      <NewsletterBand />
    </>
  );
}
