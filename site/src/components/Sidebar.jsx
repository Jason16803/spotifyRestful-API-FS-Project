import { NavLink } from 'react-router-dom';
import './Sidebar.css';

// ── St. Song left sidebar navigation ───────────────────────
// Contains icon + label nav links, a mock "Your Library" section,
// and placeholder recent playlists. isOpen / onClose are used
// on mobile to toggle the sidebar drawer.
// ───────────────────────────────────────────────────────────

const NAV_ITEMS = [
  { to: '/',           end: true, icon: '⊞', label: 'Discover'   },
  { to: '/collection',            icon: '♥', label: 'Collection' },
];

// Fake recent playlists — Week 2: replace with real user data
const MOCK_PLAYLISTS = [
  'Late Night Coding',
  'Summer Anthology',
  'Lofi Focus Mix',
  'Workout Bangers',
  'Chill Sundays',
];

export default function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {/* Overlay (mobile only) */}
      {isOpen && (
        <div
          className="sidebar__overlay"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <aside className={`sidebar ${isOpen ? 'sidebar--open' : ''}`}>
        {/* Primary navigation */}
        <nav className="sidebar__nav" aria-label="Sidebar navigation">
          <ul className="sidebar__nav-list">
            {NAV_ITEMS.map(({ to, end, icon, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={end}
                  onClick={onClose}
                  className={({ isActive }) =>
                    isActive
                      ? 'sidebar__link sidebar__link--active'
                      : 'sidebar__link'
                  }
                >
                  <span className="sidebar__link-icon" aria-hidden="true">
                    {icon}
                  </span>
                  <span className="sidebar__link-label">{label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Divider */}
        <div className="sidebar__divider" role="separator" />

        {/* Library section */}
        <section className="sidebar__library" aria-label="Your Library">
          <div className="sidebar__library-header">
            <span className="sidebar__library-icon" aria-hidden="true">☰</span>
            <span className="sidebar__library-title">Your Library</span>
            <button
              className="sidebar__library-add"
              aria-label="Create playlist (placeholder)"
              title="Create playlist"
            >
              +
            </button>
          </div>

          {/* Mock recent playlists */}
          <ul className="sidebar__playlists">
            {MOCK_PLAYLISTS.map((name) => (
              <li key={name}>
                <button className="sidebar__playlist-item">
                  <span
                    className="sidebar__playlist-thumb"
                    style={{
                      background: `hsl(${(name.charCodeAt(0) * 47) % 360}, 55%, 40%)`,
                    }}
                    aria-hidden="true"
                  />
                  <span className="sidebar__playlist-name">{name}</span>
                </button>
              </li>
            ))}
          </ul>
        </section>

        {/* Footer hint */}
        <p className="sidebar__hint">
          Connect Spotify in Week&nbsp;2 to see your real library.
        </p>
      </aside>
    </>
  );
}
