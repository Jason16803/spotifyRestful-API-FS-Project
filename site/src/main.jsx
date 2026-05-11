import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Global styles — order matters:
// 1. Design tokens & reset
// 2. Animations library
// 3. App component (which imports its own CSS)
import './styles/globals.css';
import './styles/animations.css';

import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
