import FloatingBottle from './FloatingBottle';
import { IconArrowDown } from './Icons';
import bottle from '../assets/bottle-box-swatch.webp';
import innov8 from '../assets/innov8.webp';
import tetfund from '../assets/tetfund.webp';
import './Hero.css';

const SPECS = [
  ['Volume', '100 mL · 3.38 fl oz'],
  ['pH range', '5.0 to 7.0'],
  ['Made for', 'Dry facial skin'],
];

export default function Hero() {
  return (
    <section className="hero" id="top" data-theme="dark">
      <div className="hero__wash" aria-hidden="true" />

      <div className="shell">
        <p className="label hero__kicker" data-reveal>
          Castor · Fermented rice · Aloe vera · Milk
        </p>

        <h1 className="hero__title" data-reveal style={{ '--d': '70ms' }}>
          <span className="line">Four things that grew,</span>
          <span className="line">in one bottle.</span>
        </h1>

        <div className="hero__body">
          <div className="hero__left" data-reveal style={{ '--d': '160ms' }}>
            <p className="lead">
              Riz Lactoserum is a lightweight facial serum built from castor oil,
              fermented rice water, Aloe vera gel and cow milk. Oil phase and
              fermented aqueous phase, emulsified into something that spreads
              thin and sinks in.
            </p>
            <p className="hero__claims">
              <span>Nourishing</span>
              <span>Hydrating</span>
              <span>Skin-enhancing</span>
            </p>
          </div>

          <div className="hero__stage" data-reveal style={{ '--d': '80ms' }}>
            <FloatingBottle
              src={bottle}
              alt="Riz Lactoserum: the 100 mL pump bottle beside its carton, with a pressed swatch of the serum."
              className="fb--warm"
              depth={1.1}
              tiltMax={11}
              priority
            />
          </div>

          <dl className="hero__specs" data-reveal style={{ '--d': '240ms' }}>
            {SPECS.map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="shell hero__foot">
        <div className="hero__support" data-reveal>
          <p className="label label--mute">Supported by</p>
          <div className="hero__logos">
            <span className="plate"><img className="hero__logo hero__logo--innov8" src={innov8} alt="Innov8 Hub" /></span>
            <span className="plate"><img className="hero__logo hero__logo--tet" src={tetfund} alt="TETFund, Tertiary Education Trust Fund" /></span>
          </div>
        </div>
        <a className="hero__scroll" href="#formula" aria-label="Scroll to the formula">
          <IconArrowDown size={16} />
        </a>
      </div>
    </section>
  );
}
