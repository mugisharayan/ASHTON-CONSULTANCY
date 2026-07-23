/**
 * Projects / Portfolio Page
 * -------------------------
 * Assembles all Projects page sections in order.
 * Each section is its own component in src/components/projects/.
 *
 * Section order (matches the spec):
 *   1. PageBanner   — dark teal title strip with breadcrumb
 *   2. ProjectGrid  — filter tabs + card grid + load more
 */

import '../styles/projects.css';

import PageBanner   from '../components/PageBanner';
import ProjectGrid  from '../components/projects/ProjectGrid';

export default function Projects() {
  return (
    <>
      <PageBanner title="Projects / Portfolio" page="Projects" />
      <ProjectGrid />
    </>
  );
}
