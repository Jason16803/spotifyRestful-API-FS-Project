import './MusicCard.css';

// ── St. Song reusable music card ───────────────────────────
// Supports three visual variants:
//   • 'artist'  — circular art, followers label
//   • 'album'   — square art, year + track count
//   • 'track'   — wide art, duration, album name
//
// All art is a CSS gradient placeholder until the Spotify API
// is wired up in Week 2.
// ───────────────────────────────────────────────────────────

export default function MusicCard({ data, variant = 'album' }) {
  if (!data) return null;

  const isArtist = variant === 'artist';
  const isTrack  = variant === 'track';

  return (
    <article className={`music-card music-card--${variant}`}>
      {/* Art */}
      <div className="music-card__art-wrap">
        <div
          className="music-card__art"
          style={{ background: data.gradient }}
          aria-hidden="true"
        >
          {/* Decorative music note overlay */}
          <span className="music-card__art-note" aria-hidden="true">
            {isArtist ? '♪' : isTrack ? '▶' : '◉'}
          </span>
        </div>

        {/* Hover play overlay */}
        <div className="music-card__play-overlay" aria-hidden="true">
          <button className="music-card__play-btn" tabIndex="-1">
            ▶
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="music-card__info">
        <p className="music-card__title" title={data.title ?? data.name}>
          {data.title ?? data.name}
        </p>

        {isArtist && (
          <>
            <p className="music-card__sub">{data.genre}</p>
            <p className="music-card__meta">{data.followers} followers</p>
          </>
        )}

        {variant === 'album' && (
          <>
            <p className="music-card__sub">{data.artist}</p>
            <p className="music-card__meta">{data.year} · {data.tracks} tracks</p>
          </>
        )}

        {isTrack && (
          <>
            <p className="music-card__sub">{data.artist}</p>
            {data.album && (
              <p className="music-card__meta">{data.album} · {data.duration}</p>
            )}
            {!data.album && (
              <p className="music-card__meta">{data.duration}</p>
            )}
          </>
        )}
      </div>
    </article>
  );
}
