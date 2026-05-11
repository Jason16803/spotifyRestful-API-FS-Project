import { NavLink, Link } from 'react-router-dom';
import './Navbar.css';

// ── St. Song top navigation bar ────────────────────────────
// Displays logo, primary nav links, and a placeholder user avatar.
// The hamburger toggle (mobile) calls the onMenuToggle prop
// passed down from App.jsx.
// ───────────────────────────────────────────────────────────

export default function Navbar({ onMenuToggle }) {
  return (
    <header className="navbar">
      {/* Logo */}
      <Link to="/" className="navbar__logo" aria-label="St. Song home">
        <span className="navbar__logo-icon" aria-hidden="true">♪</span>
        <span className="navbar__logo-text">St. Song</span>
      </Link>

      {/* Primary nav links (hidden on mobile — visible in sidebar) */}
      <nav className="navbar__links" aria-label="Primary navigation">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? 'navbar__link navbar__link--active' : 'navbar__link'
          }
        >
          Discover
        </NavLink>
        <NavLink
          to="/collection"
          className={({ isActive }) =>
            isActive ? 'navbar__link navbar__link--active' : 'navbar__link'
          }
        >
          Collection
        </NavLink>
      </nav>

      {/* Right side actions */}
      <div className="navbar__actions">
        {/* Placeholder user avatar — no auth yet */}
        <button className="navbar__avatar" aria-label="User menu (placeholder)">
          <span aria-hidden="true">JS</span>
        </button>

        {/* Mobile hamburger */}
        <button
          className="navbar__hamburger"
          onClick={onMenuToggle}
          aria-label="Toggle sidebar menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
