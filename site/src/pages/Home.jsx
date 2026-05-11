import SearchBar     from '../components/SearchBar';
import SectionHeader  from '../components/SectionHeader';
import MusicCard      from '../components/MusicCard';
import Footer         from '../components/Footer';
import {
  TRENDING_ARTISTS,
  POPULAR_ALBUMS,
  RECENTLY_PLAYED,
} from '../data/placeholder';
import './Home.css';

// ── Home / Discovery Page ───────────────────────────────────
// Week 1 scaffold: static placeholder content only.
// Sections: Hero/Search · Trending Artists · Popular Albums
//           · Recently Played
// Week 2: wire SearchBar to Spotify API, fetch real data.
// ───────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main className="home">
      {/* ── Hero section ── */}
      <section className="home__hero">
        <div className="home__hero-bg" aria-hidden="true" />

        <div className="home__hero-content">
          <p className="home__hero-eyebrow">✦ Music Discovery Platform</p>
          <h1 className="home__hero-headline">
            Find your next<br />
            <span className="home__hero-accent">favourite sound.</span>
          </h1>
          <p className="home__hero-sub">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Explore trending artists, discover new albums, and build
            your perfect collection — all in one place.
          </p>

          {/* Search bar */}
          <div className="home__search-wrap">
            <SearchBar />
          </div>

          {/* Quick genre chips */}
          <div className="home__genre-chips" aria-label="Browse by genre">
            {['Synthwave', 'Indie Rock', 'R&B', 'Lo-fi', 'Dream Pop', 'Alt Pop'].map((g) => (
              <button key={g} className="home__genre-chip">
                {g}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trending Artists ── */}
      <section className="home__section">
        <SectionHeader
          title="Trending Artists"
          subtitle="Lorem ipsum — top discoveries this week"
          seeAllTo="/collection"
        />
        <div className="home__grid home__grid--artists stagger-children">
          {TRENDING_ARTISTS.map((artist) => (
            <MusicCard key={artist.id} data={artist} variant="artist" />
          ))}
        </div>
      </section>

      {/* ── Popular Albums ── */}
      <section className="home__section">
        <SectionHeader
          title="Popular Albums"
          subtitle="Consectetur adipiscing — curated for you"
          seeAllTo="/collection"
        />
        <div className="home__grid stagger-children">
          {POPULAR_ALBUMS.map((album) => (
            <MusicCard key={album.id} data={album} variant="album" />
          ))}
        </div>
      </section>

      {/* ── Recently Played ── */}
      <section className="home__section">
        <SectionHeader
          title="Recently Played"
          subtitle="Sed do eiusmod tempor — pick up where you left off"
        />
        <div className="home__track-list stagger-children">
          {RECENTLY_PLAYED.map((track) => (
            <MusicCard key={track.id} data={track} variant="track" />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
