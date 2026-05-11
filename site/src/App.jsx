import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar      from './components/Navbar';
import Sidebar     from './components/Sidebar';
import Home        from './pages/Home';
import Collection  from './pages/Collection';
import NotFound    from './pages/NotFound';

// ============================================================
// App.jsx — Root component for St. Song
//
// Responsibilities:
//   • Provides BrowserRouter context
//   • Renders the persistent app shell (Navbar + Sidebar)
//   • Declares all client-side routes
//   • Manages mobile sidebar open/close state
//
// Week 1: No authentication, no API calls, placeholder only.
// Week 2: Add ProtectedRoute wrapper, Spotify OAuth callback.
// ============================================================

function AppShell() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar  = () => setSidebarOpen(true);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <div className="app-shell">
      {/* ── Top navigation bar ── */}
      <Navbar onMenuToggle={openSidebar} />

      <div className="app-body">
        {/* ── Left sidebar ── */}
        <div className="app-sidebar">
          <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />
        </div>

        {/* ── Main content area ── */}
        <div className="app-main">
          <Routes>
            <Route path="/"           element={<Home />}       />
            <Route path="/collection" element={<Collection />} />
            <Route path="*"           element={<NotFound />}   />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}
