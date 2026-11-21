import FloatingBottle from './FloatingBottle';
import swatch from '../assets/bottle-swatch.webp';
import './Texture.css';

const NOTES = [
  ['Phase', 'Oil in water'],
  ['Feel', 'Light, spreads thin'],
  ['Finish', 'Absorbs, no film'],
];

export default function Texture() {
  return (
    <section className="section texture" id="texture">
      <div className="shell texture__shell">
        <div className="texture__stage" data-reveal>
          <FloatingBottle
            src={swatch}
            alt="The Riz Lactoserum bottle beside a pressed swatch of the serum, showing a soft white emulsion."
            className="fb--warm fb--tall"
            depth={0.75}
            tiltMax={9}
          />
        </div>

        <div className="texture__copy">
          <p className="label" data-reveal>Texture</p>
          <h2 className="texture__title" data-reveal style={{ '--d': '60ms' }}>
            An emulsion,
            <br />
            not a mixture.
          </h2>
          <p className="lead texture__lead" data-reveal style={{ '--d': '130ms' }}>
            Oil and fermented water do not want to stay together. An emulsifier
            holds them in one phase and a preservative system keeps the ferment
            in check, which is what turns two separate things into a serum you
            can pump.
          </p>

          <dl className="texture__notes" data-reveal style={{ '--d': '200ms' }}>
            {NOTES.map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
