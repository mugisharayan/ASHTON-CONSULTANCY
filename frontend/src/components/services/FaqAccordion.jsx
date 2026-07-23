/**
 * FaqAccordion
 * ------------
 * Expand/collapse FAQ list on a dark teal background.
 * Only one item is open at a time — clicking an open item closes it.
 *
 * State:
 *   openId {number|null} — the id of the currently open FAQ item,
 *                          or null if all are closed.
 *
 * To add a question, append an entry to the FAQS array below.
 */

import { useState } from 'react';
import { Link } from 'react-router-dom';

const FAQS = [
  {
    id: 1,
    question: 'What services does ASHTON CONSULTANCY provide?',
    answer:
      'We provide four core services: Field Research, Data Analysis, GIS & Spatial Analysis, and Agricultural Advisory. Each service is tailored to the specific needs of our clients across Uganda and East Africa.',
  },
  {
    id: 2,
    question: 'Which regions do you operate in?',
    answer:
      'We operate across all regions of Uganda — Central, Eastern, Western, and Northern — and have experience working in neighbouring East African countries. Contact us to discuss your specific location.',
  },
  {
    id: 3,
    question: 'How do I request consultancy services?',
    answer:
      'You can reach us through the Contact page, by email at info@ashtonconsultancy.com, or by calling +256 700 123 456. We will respond within one business day to discuss your needs.',
  },
  {
    id: 4,
    question: 'Do you provide GIS mapping services?',
    answer:
      'Yes. Our GIS & Spatial Analysis service covers land use mapping, thematic mapping, remote sensing, satellite imagery analysis, GPS data collection, and GIS training for your team.',
  },
  {
    id: 5,
    question: 'How long does a consultancy project take?',
    answer:
      'Project timelines vary depending on scope and complexity. A focused survey or analysis may take 2–4 weeks, while a comprehensive research programme can span several months. We provide a detailed timeline during the proposal stage.',
  },
];

/* Chevron icon — rotates when the item is open */
function Chevron({ isOpen }) {
  return (
    <svg
      className={`faq__chevron ${isOpen ? 'open' : ''}`}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

export default function FaqAccordion() {
  const [openId, setOpenId] = useState(null);

  function toggle(id) {
    // If the clicked item is already open, close it; otherwise open it
    setOpenId(prev => (prev === id ? null : id));
  }

  return (
    <section className="faq" aria-labelledby="faq-heading">
      <div className="container">

        <div className="section-heading">
          <h2 id="faq-heading">Frequently Asked Questions</h2>
          <p style={{ color: 'rgba(255,255,255,0.75)' }}>
            Answers to the questions we hear most often.
          </p>
        </div>

        <div className="faq__grid">

          {/* Left: accordion list */}
          <div className="faq__list">
            {FAQS.map(({ id, question, answer }) => {
              const isOpen = openId === id;
              return (
                <div key={id} className="faq__item">
                  <button
                    className="faq__question"
                    onClick={() => toggle(id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${id}`}
                  >
                    {question}
                    <Chevron isOpen={isOpen} />
                  </button>

                  {isOpen && (
                    <div
                      id={`faq-answer-${id}`}
                      className="faq__answer"
                      role="region"
                      aria-labelledby={`faq-question-${id}`}
                    >
                      {answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right: still have questions card */}
          <div className="faq__card">
            <div className="faq__card-icon" aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
            </div>
            <h3 className="faq__card-title">Still have questions?</h3>
            <p className="faq__card-text">
              Can&apos;t find the answer you&apos;re looking for? Our team is
              happy to help — reach out and we&apos;ll get back to you promptly.
            </p>
            <Link to="/contact" className="btn-primary">
              Request Consultation
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
