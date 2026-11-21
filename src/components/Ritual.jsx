import { IconDrop, IconBlend, IconSun } from './Icons';
import bottleBack from '../assets/bottle-back.webp';
import FloatingBottle from './FloatingBottle';
import './Ritual.css';

const STEPS = [
  {
    Icon: IconDrop,
    title: 'Two or three drops',
    body: 'Onto clean, slightly damp skin. Damp matters more than most people think, it gives the serum something to hold onto.',
  },
  {
    Icon: IconBlend,
    title: 'Massage it in',
    body: 'Work it gently across the face until it is fully absorbed. It should disappear rather than sit on top.',
  },
  {
    Icon: IconSun,
    title: 'Morning and evening',
    body: 'Twice a day, inside whatever routine you already have. In the morning, follow it with a sunscreen.',
  },
];

export default function Ritual() {
  return (
    <section className="section ritual" id="ritual">
      <div className="shell ritual__shell">
        <div className="ritual__copy">
          <p className="label" data-reveal>In use</p>
          <h2 className="ritual__title" data-reveal style={{ '--d': '60ms' }}>
            Two drops,
            <br />
            twice a day.
          </h2>
          <p className="lead ritual__lead" data-reveal style={{ '--d': '120ms' }}>
            Made for dry facial skin, and simple enough that it survives contact
            with an actual morning.
          </p>

          <ol className="steps">
            {STEPS.map((s, i) => (
              <li key={s.title} data-reveal style={{ '--d': `${160 + i * 90}ms` }}>
                <span className="steps__icon"><s.Icon size={20} /></span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="ritual__stage" data-reveal style={{ '--d': '100ms' }}>
          <FloatingBottle
            src={bottleBack}
            alt="The back of the Riz Lactoserum bottle, showing the product description, directions and ingredient panel."
            className="fb--warm fb--tall"
            depth={0.7}
            tiltMax={8}
          />
        </div>
      </div>
    </section>
  );
}
