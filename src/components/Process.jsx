import { IconBasket, IconFlask, IconHeat, IconBlend, IconCheck, IconBox } from './Icons';
import './Process.css';

const PHASES = [
  {
    n: '1',
    Icon: IconBasket,
    title: 'Sourcing',
    body: 'Castor oil, rice, cow milk, Aloe vera, emulsifier and preservative are brought in. Rice water is extracted from the rice.',
  },
  {
    n: '2',
    Icon: IconFlask,
    title: 'Fermentation',
    body: 'The rice-derived substrate ferments with cow milk and Aloe vera gel, which is where the enriched aqueous phase comes from.',
  },
  {
    n: '3',
    Icon: IconHeat,
    title: 'Concentration',
    body: 'Pasteurised, then tray-dried between 40 and 60 °C until it is a concentrated rice extract powder.',
  },
  {
    n: '4',
    Icon: IconBlend,
    title: 'Formulation',
    body: 'Castor oil and emulsifier make the oil phase. The powder goes in, then the whole thing is mixed and homogenised into a stable emulsion.',
  },
  {
    n: '5',
    Icon: IconCheck,
    title: 'Validation',
    body: 'pH, microbial load, stability, dermatoxicity and physicochemical properties are all measured before anything leaves the bench.',
  },
  {
    n: '6',
    Icon: IconBox,
    title: 'Packaging',
    body: 'Filled into an opaque, airtight, UV-resistant container, because a ferment and sunlight are a poor combination.',
  },
];

export default function Process() {
  return (
    <section className="section process" id="process">
      <div className="shell">
        <header className="process__head">
          <div>
            <p className="label" data-reveal>How it is made</p>
            <h2 className="process__title" data-reveal style={{ '--d': '60ms' }}>
              Rice goes in wet.
              <br />
              It comes out powder.
            </h2>
          </div>
          <p className="lead process__lead" data-reveal style={{ '--d': '130ms' }}>
            The long part is the middle. Fermenting the rice water, then drying
            it down to a concentrate, is what lets a water-based ferment live
            inside an oil-based serum without splitting.
          </p>
        </header>

        <ol className="phases">
          {PHASES.map((p, i) => (
            <li key={p.title} data-reveal style={{ '--d': `${i * 70}ms` }}>
              <span className="phases__rail" aria-hidden="true">
                <span className="phases__dot" />
              </span>
              <span className="phases__icon"><p.Icon size={22} /></span>
              <h3><span className="phases__n">{p.n}</span>{p.title}</h3>
              <p className="phases__body">{p.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
