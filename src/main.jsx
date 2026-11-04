import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import App from './App.jsx';
import './styles.css';

const container = document.getElementById('root');

if (import.meta.env.VITE_PREVIEW) {
  // Single-file preview build: in-memory routing, no server paths needed.
  createRoot(container).render(
    <StrictMode><MemoryRouter><App /></MemoryRouter></StrictMode>
  );
} else {
  const tree = <StrictMode><BrowserRouter><App /></BrowserRouter></StrictMode>;
  if (container.hasChildNodes()) hydrateRoot(container, tree);
  else createRoot(container).render(tree);
}
