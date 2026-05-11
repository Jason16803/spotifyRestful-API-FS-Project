import { Link } from 'react-router-dom';
import './Footer.css';

// ── St. Song footer ─────────────────────────────────────────
// Lightweight footer shown at the bottom of the main content
// area. Contains legal placeholder text and nav links.
// ───────────────────────────────────────────────────────────

const FOOTER_LINKS = [
  { label: 'About',     href: '#' },
  { label: 'Legal',     href: '#' },
  { label: 'Privacy',   href: '#' },
  { label: 'Cookies',   href: '#' },
  { label: 'Accessibility', href: '#' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        {/* Brand */}
        <Link to="/" className="footer__brand" aria-label="St. Song home">
          <span className="footer__brand-icon" aria-hidden="true">♪</span>
          <span className="footer__brand-name">St. Song</span>
        </Link>

        {/* Links */}
        <nav className="footer__links" aria-label="Footer navigation">
          {FOOTER_LINKS.map(({ label, href }) => (
            <a key={label} href={href} className="footer__link">
              {label}
            </a>
          ))}
        </nav>

        {/* Copyright */}
        <p className="footer__copy">
          © {new Date().getFullYear()} St. Song · Academic Project · WDV339
        </p>
      </div>
    </footer>
  );
}
