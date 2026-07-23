/**
 * ServiceTabs
 * -----------
 * Horizontal tab row that controls which service detail block
 * is visible. Only one block is shown at a time.
 *
 * State:
 *   activeTab {string} — the id of the currently selected service.
 *
 * To add a new service:
 *   1. Add an entry to the SERVICES array below.
 *   2. No JSX changes needed — the template renders from the data.
 *
 * The image field accepts an imported asset. Currently null —
 * a styled placeholder is shown until real photos are provided.
 */

import { useState } from 'react';
import { Link } from 'react-router-dom';
import fieldPhoto from '../../assets/hero.png'; // replace per-service when photos available

const SERVICES = [
  {
    id: 'field-research',
    label: 'Field Research',
    description:
      'We collect high-quality primary data using proven methodologies and modern digital tools, ensuring accuracy and reliability at every stage.',
    checklist: [
      'Agricultural Surveys',
      'Research Design',
      'Household Surveys',
      'Enumerator Training',
      'Monitoring & Evaluation (M&E)',
      'Focus Group Discussions',
      'Digital Data Collection',
      'Key Informant Interviews',
    ],
    image: fieldPhoto,
  },
  {
    id: 'data-analysis',
    label: 'Data Analysis',
    description:
      'We transform raw data into actionable insights using advanced statistical and analytical techniques tailored to your research questions.',
    checklist: [
      'Quantitative Analysis',
      'Report Writing',
      'Qualitative Analysis',
      'Data Visualisation',
      'Statistical Modelling',
      'Dashboard Development',
      'Survey Data Processing',
      'Impact Evaluation',
    ],
    image: fieldPhoto,
  },
  {
    id: 'gis',
    label: 'GIS & Spatial',
    description:
      'We provide mapping, spatial analysis, and remote sensing services that help organisations understand and act on geographic patterns.',
    checklist: [
      'Land Use Mapping',
      'Remote Sensing',
      'Spatial Data Analysis',
      'GPS Data Collection',
      'Thematic Mapping',
      'Satellite Imagery Analysis',
      'Environmental Mapping',
      'GIS Training',
    ],
    image: fieldPhoto,
  },
  {
    id: 'agricultural-advisory',
    label: 'Agricultural Advisory',
    description:
      'We deliver practical, evidence-based recommendations that help farmers, agribusinesses, and development organisations improve productivity and sustainability.',
    checklist: [
      'Farm Management Advisory',
      'Value Chain Analysis',
      'Crop Production Planning',
      'Market Linkage Support',
      'Soil & Water Management',
      'Climate Adaptation Planning',
      'Agribusiness Development',
      'Extension Services Design',
    ],
    image: fieldPhoto,
  },
];

/* Checkmark icon — extracted to avoid repeating SVG markup in the loop */
function CheckIcon() {
  return (
    <span className="service-detail__check-icon" aria-hidden="true">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </span>
  );
}

export default function ServiceTabs() {
  const [activeTab, setActiveTab] = useState(SERVICES[0].id);

  const active = SERVICES.find(s => s.id === activeTab);

  return (
    <section className="service-tabs" aria-labelledby="services-tab-heading">
      <div className="container">

        {/* Tab navigation */}
        <nav className="service-tabs__nav" aria-label="Service categories">
          {SERVICES.map(({ id, label }) => (
            <button
              key={id}
              className={`service-tabs__btn ${activeTab === id ? 'active' : ''}`}
              onClick={() => setActiveTab(id)}
              aria-pressed={activeTab === id}
            >
              {label}
            </button>
          ))}
        </nav>

        {/* Active service detail block */}
        <div className="service-detail__grid">

          {/* Left: text + checklist + CTA */}
          <div>
            <p className="service-detail__label">Our Services</p>
            <h2 className="service-detail__title" id="services-tab-heading">
              {active.label}
            </h2>
            <p className="service-detail__desc">{active.description}</p>

            <ul className="service-detail__checklist" aria-label={`${active.label} service items`}>
              {active.checklist.map(item => (
                <li key={item} className="service-detail__check-item">
                  <CheckIcon />
                  {item}
                </li>
              ))}
            </ul>

            <Link to="/contact" className="btn-primary">
              Request Consultation
            </Link>
          </div>

          {/* Right: service photo */}
          <div>
            <img
              src={active.image}
              alt={`${active.label} — ASHTON CONSULTANCY field work`}
              className="service-detail__image"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
