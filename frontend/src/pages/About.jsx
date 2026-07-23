/**
 * About Us Page
 * -------------
 * Assembles all About page sections in order.
 * Each section is its own component in src/components/about/.
 *
 * Section order (matches the spec):
 *   1. PageBanner   — dark teal title strip with breadcrumb
 *   2. OurStory     — two-column layout with vision/mission/values
 *   3. OurApproach  — dark teal band with 6-step process
 *   4. OurTeam      — 4-column team card grid
 */

import '../styles/about.css';

import PageBanner  from '../components/PageBanner';
import OurStory    from '../components/about/OurStory';
import OurApproach from '../components/about/OurApproach';
import OurTeam     from '../components/about/OurTeam';

export default function About() {
  return (
    <>
      <PageBanner title="About Us" subtitle="Who we are, what drives us, and the team behind our work" />
      <OurStory />
      <OurApproach />
      <OurTeam />
    </>
  );
}
