/**
 * About Us Page
 * -------------
 * Sections (to be built):
 *   1. PageBanner
 *   2. Our Story (vision, mission, values)
 *   3. Our Approach (6-step process)
 *   4. Our Team
 */

import PageBanner from '../components/PageBanner';

export default function About() {
  return (
    <>
      <PageBanner title="About Us" page="About Us" />
      <p style={{ padding: '4rem', textAlign: 'center', color: '#6B7280' }}>
        About Us page — coming soon
      </p>
    </>
  );
}
