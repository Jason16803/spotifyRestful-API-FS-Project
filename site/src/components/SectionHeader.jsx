import { Link } from 'react-router-dom';
import './SectionHeader.css';

// ── St. Song section header ─────────────────────────────────
// Displays a section title with an optional "See All" link.
// subtitle is an optional descriptor shown below the title.
// ───────────────────────────────────────────────────────────

export default function SectionHeader({ title, subtitle, seeAllTo }) {
  return (
    <div className="section-header">
      <div className="section-header__text">
        <h2 className="section-header__title">{title}</h2>
        {subtitle && (
          <p className="section-header__subtitle">{subtitle}</p>
        )}
      </div>

      {seeAllTo && (
        <Link to={seeAllTo} className="section-header__see-all">
          See all
          <span className="section-header__see-all-arrow" aria-hidden="true">→</span>
        </Link>
      )}
    </div>
  );
}
