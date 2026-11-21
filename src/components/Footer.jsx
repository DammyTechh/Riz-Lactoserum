import logo from '../assets/logo.webp';
import './Footer.css';

const COLS = [
  { title: 'The serum', links: [['Formula', '#formula'], ['Texture', '#texture'], ['Inside', '#inside']] },
  { title: 'The making', links: [['Process', '#process'], ['Ritual', '#ritual'], ['Checked', '#closing']] },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer__top">
          <div className="footer__brand">
            <img src={logo} alt="Riz Lactoserum, deep hydration, radiant skin" />
            <p>
              A lightweight facial serum built from castor oil, fermented rice
              water, Aloe vera gel and cow milk.
            </p>
          </div>

          <nav className="footer__nav" aria-label="Footer">
            {COLS.map((c) => (
              <div key={c.title}>
                <p className="label label--mute">{c.title}</p>
                <ul>
                  {c.links.map(([label, href]) => (
                    <li key={label}><a href={href}>{label}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="footer__bottom">
          <p>&copy; {new Date().getFullYear()} Riz Lactoserum. All rights reserved.</p>
          <p className="footer__credit">Developed under TETFAIR 2026</p>
        </div>
      </div>
    </footer>
  );
}
