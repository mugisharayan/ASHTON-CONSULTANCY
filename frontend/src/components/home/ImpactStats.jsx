/**
 * ImpactStats
 * -----------
 * Full-width dark teal band showing 5 key impact numbers.
 *
 * To update a stat, edit the STATS array below.
 * The dark background comes from the .section--dark utility class
 * defined in index.css — no custom background color needed here.
 */

const STATS = [
  { number: '150+', label: 'Projects Completed'   },
  { number: '250K+', label: 'Farmers Reached'     },
  { number: '500+', label: 'Surveys Conducted'    },
  { number: '50+',  label: 'Districts Covered'    },
  { number: '120+', label: 'Research Reports'     },
];

export default function ImpactStats() {
  return (
    <section className="section section--dark" aria-labelledby="impact-heading">
      <div className="container">

        <div className="section-heading">
          <h2 id="impact-heading">Our Impact in Numbers</h2>
        </div>

        <div className="impact__grid">
          {STATS.map(({ number, label }) => (
            <div key={label}>
              <span className="impact__stat-number">{number}</span>
              <span className="impact__stat-label">{label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
