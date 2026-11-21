import FloatingBottle from './FloatingBottle';
import bottle from '../assets/bottle-front.webp';
import innov8 from '../assets/innov8.webp';
import tetfund from '../assets/tetfund.webp';
import './Closing.css';

const CARE = [
  ['pH', 'Held between 5.0 and 7.0'],
  ['Microbial quality', 'Measured against the acceptance target'],
  ['Stability', 'Tested across the storage period'],
  ['Review', 'Prepared for NAFDAC'],
];

export default function Closing() {
  return (
    <section className="section closing" id="closing" data-theme="dark">
      <div className="shell closing__shell">
        <div className="closing__copy">
          <p className="label closing__label" data-reveal>Checked</p>
          <h2 className="closing__title" data-reveal style={{ '--d': '60ms' }}>
            Four numbers
            <br />
            we keep an eye on.
          </h2>

          <dl className="care" data-reveal style={{ '--d': '130ms' }}>
            {CARE.map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>

          <div className="supporters" data-reveal style={{ '--d': '220ms' }}>
            <p className="label closing__label">Supported by</p>
            <div className="supporters__row">
              <span className="plate"><img className="supporters__innov8" src={innov8} alt="Innov8 Hub" /></span>
              <span className="plate"><img className="supporters__tet" src={tetfund} alt="TETFund, Tertiary Education Trust Fund" /></span>
            </div>
          </div>
        </div>

        <div className="closing__shot" data-reveal style={{ '--d': '100ms' }}>
          <FloatingBottle
            src={bottle}
            alt="The Riz Lactoserum bottle, front view, with the wheat-sprig mark on the label."
            className="fb--warm fb--tall"
            depth={0.8}
            tiltMax={9}
          />
        </div>
      </div>
    </section>
  );
}
