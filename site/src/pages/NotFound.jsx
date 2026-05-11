import { Link } from 'react-router-dom';
import './NotFound.css';

// ── 404 Not Found Page ──────────────────────────────────────
// Displayed for any route that doesn't match /.
// ───────────────────────────────────────────────────────────

export default function NotFound() {
  return (
    <main className="not-found">
      {/* Decorative background */}
      <div className="not-found__bg" aria-hidden="true">
        <div className="not-found__blob not-found__blob--1" />
        <div className="not-found__blob not-found__blob--2" />
      </div>

      <div className="not-found__content">
        {/* Glitchy 404 number */}
        <div className="not-found__number" aria-hidden="true">
          <span>4</span>
          <span className="not-found__zero">♪</span>
          <span>4</span>
        </div>

        <h1 className="not-found__headline">Lost in the mix.</h1>
        <p className="not-found__sub">
          We couldn't find the page you were looking for. It may have moved,
          or maybe it never existed — like a song you can't quite remember.
        </p>

        <div className="not-found__actions">
          <Link to="/" className="not-found__btn not-found__btn--primary">
            ← Return Home
          </Link>
          <Link to="/collection" className="not-found__btn not-found__btn--secondary">
            My Collection
          </Link>
        </div>

        {/* Fun placeholder */}
        <p className="not-found__lorem">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Enim ad minim veniam quis nostrud exercitation.
        </p>
      </div>
    </main>
  );
}
