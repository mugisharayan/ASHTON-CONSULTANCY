/**
 * OurTeam
 * -------
 * Displays 4 team member cards in a grid.
 *
 * The `photo` field accepts an imported image asset.
 * Currently set to null — a placeholder avatar is shown instead.
 *
 * To add a real headshot:
 *   1. Add the image to src/assets/
 *   2. Import it at the top of this file
 *   3. Set it as the `photo` value in the TEAM array
 */

const TEAM = [
  {
    id: 1,
    name: 'Dr. John Asiimwe',
    role: 'Managing Director',
    photo: null, // replace with imported image asset
  },
  {
    id: 2,
    name: 'Sarah Nakato',
    role: 'Research Manager',
    photo: null,
  },
  {
    id: 3,
    name: 'Michael Ojara',
    role: 'GIS Specialist',
    photo: null,
  },
  {
    id: 4,
    name: 'Grace Namutebi',
    role: 'Data Analyst',
    photo: null,
  },
];

/* Fallback avatar icon shown when no photo is provided */
function AvatarPlaceholder({ name }) {
  return (
    <div className="team-card__photo-placeholder" aria-label={`Photo placeholder for ${name}`}>
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    </div>
  );
}

export default function OurTeam() {
  return (
    <section className="section section--alt" aria-labelledby="team-heading">
      <div className="container">

        <div className="section-heading">
          <h2 id="team-heading">Our Team</h2>
          <p>The people behind our evidence-based solutions.</p>
        </div>

        <div className="team__grid">
          {TEAM.map(({ id, name, role, photo }) => (
            <article key={id} className="team-card">
              {photo ? (
                <img
                  src={photo}
                  alt={name}
                  className="team-card__photo"
                />
              ) : (
                <AvatarPlaceholder name={name} />
              )}
              <h3 className="team-card__name">{name}</h3>
              <p className="team-card__role">{role}</p>
            </article>
          ))}
        </div>

        <div className="team__cta">
          <button className="btn-outline-accent">View All Team Members</button>
        </div>

      </div>
    </section>
  );
}
