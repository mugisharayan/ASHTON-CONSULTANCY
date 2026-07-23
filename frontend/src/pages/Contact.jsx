/**
 * Contact Page
 * ------------
 * Reuses the ContactSection component built for the Home page.
 * No new components needed — this is why ContactSection was built
 * as a standalone reusable component from the start.
 *
 * Section order:
 *   1. PageBanner      — dark teal title strip with breadcrumb
 *   2. ContactSection  — contact details + form + map (shared with Home)
 */

import '../styles/home.css'; // ContactSection styles live in home.css

import PageBanner      from '../components/PageBanner';
import ContactSection  from '../components/home/ContactSection';

export default function Contact() {
  return (
    <>
      <PageBanner title="Contact Us" subtitle="Reach out to our team — we'd love to hear about your project" />
      <ContactSection />
    </>
  );
}
