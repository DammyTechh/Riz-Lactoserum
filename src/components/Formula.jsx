import { IconOil, IconRice, IconAloe, IconMilk } from './Icons';
import './Formula.css';

const NATURALS = [
  {
    Icon: IconOil,
    name: 'Castor oil',
    latin: 'Ricinus communis seed oil',
    body: 'The oil phase. Thick and occlusive, it is the reason the serum stays on the skin instead of evaporating off it.',
  },
  {
    Icon: IconRice,
    name: 'Fermented rice water',
    latin: 'Oryza sativa ferment filtrate',
    body: 'Rice is steeped for its water, then fermented into the enriched aqueous phase the whole formula is built around.',
  },
  {
    Icon: IconAloe,
    name: 'Aloe vera gel',
    latin: 'Aloe barbadensis',
    body: 'Goes into the ferment rather than on top of it, so it is part of the water phase from the very start.',
  },
  {
    Icon: IconMilk,
    name: 'Cow milk',
    latin: 'Fresh, whole',
    body: 'Fresh milk ferments the rice substrate alongside the Aloe. It is what the lacto in the name is doing.',
  },
];

export default function Formula() {
  return (
    <section className="section formula" id="formula">
      <div className="shell">
        <header className="formula__head">
          <div>
            <p className="label" data-reveal>The formula</p>
            <h2 className="formula__title" data-reveal style={{ '--d': '60ms' }}>
              Nothing in here
              <br />
              needed inventing.
            </h2>
          </div>
          <p className="lead formula__lead" data-reveal style={{ '--d': '130ms' }}>
            Four ingredients, three of them things people already eat. The work
            was not in finding them. It was in getting an oil and a ferment to
            hold together in the same bottle, and stay that way.
          </p>
        </header>

        <ul className="naturals">
          {NATURALS.map((n, i) => (
            <li key={n.name} data-reveal style={{ '--d': `${i * 90}ms` }}>
              <span className="naturals__icon"><n.Icon size={24} /></span>
              <h3>{n.name}</h3>
              <p className="naturals__latin">{n.latin}</p>
              <p className="naturals__body">{n.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
