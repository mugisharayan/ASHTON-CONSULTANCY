/**
 * Services Page
 * -------------
 * Sections (to be built):
 *   1. PageBanner
 *   2. Filter tabs (All, Field Research, Data Analysis, GIS, Agricultural Advisory)
 *   3. Service detail blocks (one per tab)
 *   4. FAQ accordion
 */

import PageBanner from '../components/PageBanner';

export default function Services() {
  return (
    <>
      <PageBanner title="Our Services" page="Services" />
      <p style={{ padding: '4rem', textAlign: 'center', color: '#6B7280' }}>
        Services page — coming soon
      </p>
    </>
  );
}
