/**
 * Home Page
 * ---------
 * Assembles all Home page sections in order.
 * Each section is its own component in src/components/home/.
 *
 * Section order (matches the spec):
 *   1. HeroSection       — full-width banner with CTA buttons
 *   2. WhoWeAre          — two-column intro with photo
 *   3. CoreServices      — 4-column service card grid
 *   4. ImpactStats       — dark teal band with 5 stat numbers
 *   5. FeaturedProjects  — 4-column project card grid
 *   6. ContactSection    — contact details + form + map
 */

import '../styles/home.css'; // section-specific styles

import HeroSection      from '../components/home/HeroSection';
import WhoWeAre         from '../components/home/WhoWeAre';
import CoreServices     from '../components/home/CoreServices';
import ImpactStats      from '../components/home/ImpactStats';
import FeaturedProjects from '../components/home/FeaturedProjects';
import ContactSection   from '../components/home/ContactSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhoWeAre />
      <CoreServices />
      <ImpactStats />
      <FeaturedProjects />
      <ContactSection />
    </>
  );
}
