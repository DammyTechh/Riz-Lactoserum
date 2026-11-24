import team from '../assets/team.webp';
import './Team.css';

export default function Team() {
  return (
    <section className="section team" id="team">
      <div className="shell team__grid">
        <figure className="team__figure" data-reveal>
          <div className="team__frame">
            <img
              src={team}
              alt="The three members of the RIZ LACTOSERUM team, in TETFAIR shirts."
              loading="lazy"
            />
          </div>
        </figure>

        <div className="team__copy">
          <p className="label" data-reveal>The makers</p>
          <h2 className="team__title" data-reveal style={{ '--d': '60ms' }}>
            The team behind
            <br />
            RIZ <em>Lactoserum</em>
          </h2>
          <p className="lead team__lead" data-reveal style={{ '--d': '120ms' }}>
            Three people formulated the serum, ran the batches and wrote the
            stability and safety notes, under TETFAIR 2026.
          </p>
          <p className="team__sig" data-reveal style={{ '--d': '180ms' }}>
            Innov8 Hub, Nigeria
          </p>
        </div>
      </div>
    </section>
  );
}
