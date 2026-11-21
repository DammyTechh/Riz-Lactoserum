import { useState } from 'react';
import { IconShield, IconLeafTag, IconThermo, IconPlus } from './Icons';
import boxShot from '../assets/bottle-box.webp';
import './Inside.css';

const INCI = [
  'Aqua (Water)', 'Oryza Sativa (Rice) Ferment Filtrate', 'Glycerin', 'Niacinamide',
  'Ricinus Communis (Castor) Seed Oil', '1,3-Propanediol', 'Squalane',
  'Cetearyl Olivate', 'Sorbitan Olivate', 'Phenoxyethanol', 'Ethylhexylglycerin',
  'Allantoin', 'Tocopherol', 'Deglycyrrhizinated Licorice Root Extract',
  'Sodium Ascorbyl Phosphate', 'Saccharum Officinarum (Sugar Cane) Extract',
  'Xanthan Gum', 'Disodium EDTA', 'Hyaluronic Acid (HMW)', 'Hyaluronic Acid (LMW)',
];

const NOTES = [
  {
    Icon: IconShield,
    title: 'Caution',
    body: 'For external use only. Avoid direct contact with the eyes. Do not apply to broken or irritated skin, and keep it out of reach of children.',
  },
  {
    Icon: IconLeafTag,
    title: 'Allergy',
    body: 'Patch test first if you have a known sensitivity to milk or to rice-based ingredients.',
  },
  {
    Icon: IconThermo,
    title: 'Storage',
    body: 'Cool and dry, away from direct sunlight and heat. Keep the container closed and upright when it is not in use.',
  },
];

const PREVIEW = 10;

export default function Inside() {
  const [all, setAll] = useState(false);
  const shown = all ? INCI : INCI.slice(0, PREVIEW);

  return (
    <section className="section inside" id="inside">
      <div className="shell">
        <header className="inside__head">
          <div>
            <p className="label" data-reveal>Inside the bottle</p>
            <h2 className="inside__title" data-reveal style={{ '--d': '60ms' }}>
              The whole list,
              <br />
              not the nice half.
            </h2>
          </div>
          <p className="inside__count label label--mute" data-reveal>
            {INCI.length} ingredients
          </p>
        </header>

        <div className="inside__body">
          <div className="inci" data-reveal>
            <ul>
              {shown.map((x) => <li key={x}>{x}</li>)}
            </ul>
            {!all && (
              <button className="inci__more" onClick={() => setAll(true)}>
                <IconPlus size={15} />
                Show the other {INCI.length - PREVIEW}
              </button>
            )}
          </div>

          <div className="inside__pack" data-reveal style={{ '--d': '120ms' }}>
            <img src={boxShot} alt="The Riz Lactoserum bottle standing next to its carton." loading="lazy" />
          </div>
        </div>

        <ul className="notes">
          {NOTES.map((n, i) => (
            <li key={n.title} data-reveal style={{ '--d': `${i * 80}ms` }}>
              <span className="notes__icon"><n.Icon size={19} /></span>
              <h3>{n.title}</h3>
              <p>{n.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
