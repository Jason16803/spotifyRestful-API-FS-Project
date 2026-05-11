import SectionHeader from '../components/SectionHeader';
import MusicCard     from '../components/MusicCard';
import Footer        from '../components/Footer';
import { SAVED_SONGS, SAVED_ALBUMS } from '../data/placeholder';
import './Collection.css';

// ── Collection Page ─────────────────────────────────────────
// Week 1 scaffold: static placeholder content only.
// Sections: Stats banner · Saved Songs · Saved Albums
//           · Empty state (placeholder)
// Week 2: fetch from MongoDB / Spotify API.
// ───────────────────────────────────────────────────────────

// Filler "liked songs" stats
const STATS = [
  { label: 'Liked Songs',  value: SAVED_SONGS.length },
  { label: 'Saved Albums', value: SAVED_ALBUMS.length },
  { label: 'Playlists',    value: 5 },
  { label: 'Hours',        value: '12.4' },
];

export default function Collection() {
  return (
    <main className="collection">
      {/* ── Page header ── */}
      <div className="collection__header">
        <div className="collection__header-bg" aria-hidden="true" />

        <div className="collection__header-content">
          <p className="collection__eyebrow">✦ Your Library</p>
          <h1 className="collection__title">My Collection</h1>
          <p className="collection__desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua — your
            personal music archive.
          </p>

          {/* Stats row */}
          <div className="collection__stats" aria-label="Collection stats">
            {STATS.map(({ label, value }) => (
              <div key={label} className="collection__stat">
                <span className="collection__stat-value">{value}</span>
                <span className="collection__stat-label">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Saved Songs ── */}
      <section className="collection__section">
        <SectionHeader
          title="Liked Songs"
          subtitle={`${SAVED_SONGS.length} tracks saved`}
        />

        {SAVED_SONGS.length > 0 ? (
          <div className="collection__track-list stagger-children">
            {SAVED_SONGS.map((track) => (
              <MusicCard key={track.id} data={track} variant="track" />
            ))}
          </div>
        ) : (
          <EmptyState
            icon="♡"
            headline="No liked songs yet"
            body="Songs you like will appear here. Connect Spotify in Week 2 to sync your library."
          />
        )}
      </section>

      {/* ── Saved Albums ── */}
      <section className="collection__section">
        <SectionHeader
          title="Saved Albums"
          subtitle={`${SAVED_ALBUMS.length} albums in your collection`}
        />

        {SAVED_ALBUMS.length > 0 ? (
          <div className="collection__album-grid stagger-children">
            {SAVED_ALBUMS.map((album) => (
              <MusicCard key={album.id} data={album} variant="album" />
            ))}
          </div>
        ) : (
          <EmptyState
            icon="◉"
            headline="No saved albums yet"
            body="Albums you save will appear here."
          />
        )}
      </section>

      {/* ── Placeholder empty state (for demo) ── */}
      <section className="collection__section">
        <SectionHeader title="Your Playlists" subtitle="Coming in Week 2" />
        <EmptyState
          icon="☰"
          headline="Playlists will live here"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Connect Spotify to import your
          existing playlists automatically."
          cta="Connect Spotify (Week 2)"
        />
      </section>

      <Footer />
    </main>
  );
}

// ── Internal helper: Empty state card ──────────────────────
function EmptyState({ icon, headline, body, cta }) {
  return (
    <div className="empty-state">
      <div className="empty-state__icon" aria-hidden="true">{icon}</div>
      <h3 className="empty-state__headline">{headline}</h3>
      <p className="empty-state__body">{body}</p>
      {cta && (
        <button className="empty-state__cta" disabled>
          {cta}
        </button>
      )}
    </div>
  );
}
