import { createContext, useContext, useEffect } from 'react';
import { company } from './config.js';

export const HeadContext = createContext(null);

function setMeta(attr, key, value) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', value);
}

/** Per-page title, description and canonical. Collected during prerender, applied live in the browser. */
export function Seo({ title, description, path = '/' }) {
  const fullTitle = title ? `${title} | ${company.shortName}` : `${company.shortName} | Property & Facility Management in Nigeria`;
  const url = company.siteUrl.replace(/\/$/, '') + path;
  const ctx = useContext(HeadContext);
  if (ctx) Object.assign(ctx, { title: fullTitle, description, url });

  useEffect(() => {
    document.title = fullTitle;
    setMeta('name', 'description', description);
    setMeta('property', 'og:title', fullTitle);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', url);
    setMeta('name', 'twitter:title', fullTitle);
    setMeta('name', 'twitter:description', description);
    const link = document.head.querySelector('link[rel="canonical"]');
    if (link) link.setAttribute('href', url);
  }, [fullTitle, description, url]);
  return null;
}
