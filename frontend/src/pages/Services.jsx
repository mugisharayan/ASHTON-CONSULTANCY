/**
 * Services Page
 * -------------
 * Assembles all Services page sections in order.
 * Each section is its own component in src/components/services/.
 *
 * Section order (matches the spec):
 *   1. PageBanner    — dark teal title strip with breadcrumb
 *   2. ServiceTabs   — filter tabs + service detail blocks
 *   3. FaqAccordion  — expand/collapse FAQ + contact card
 */

import '../styles/services.css';

import PageBanner    from '../components/PageBanner';
import ServiceTabs   from '../components/services/ServiceTabs';
import FaqAccordion  from '../components/services/FaqAccordion';

export default function Services() {
  return (
    <>
      <PageBanner title="Our Services" page="Services" />
      <ServiceTabs />
      <FaqAccordion />
    </>
  );
}
