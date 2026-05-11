import { useState } from 'react';
import './SearchBar.css';

// ── St. Song search bar ─────────────────────────────────────
// UI-only component. onSearch callback will wire to the
// Spotify API in Week 2. For now it just controls local state
// and displays a visual placeholder.
// ───────────────────────────────────────────────────────────

export default function SearchBar({ placeholder = 'Search artists, songs, albums…', onSearch }) {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
    onSearch?.(e.target.value); // no-op until Week 2
  };

  const handleClear = () => {
    setQuery('');
    onSearch?.('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO Week 2: dispatch search request
  };

  return (
    <form className="searchbar" onSubmit={handleSubmit} role="search">
      {/* Search icon */}
      <span className="searchbar__icon" aria-hidden="true">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
          <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </span>

      <input
        type="search"
        className="searchbar__input"
        value={query}
        onChange={handleChange}
        placeholder={placeholder}
        aria-label="Search music"
        autoComplete="off"
        spellCheck="false"
      />

      {/* Clear button */}
      {query && (
        <button
          type="button"
          className="searchbar__clear"
          onClick={handleClear}
          aria-label="Clear search"
        >
          ✕
        </button>
      )}

      <button type="submit" className="searchbar__submit" aria-label="Submit search">
        Search
      </button>
    </form>
  );
}
