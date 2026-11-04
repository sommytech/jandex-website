import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteSingleFile } from 'vite-plugin-singlefile';
import { company } from './src/config.js';

const siteUrl = (process.env.SITE_URL || process.env.VITE_SITE_URL || company.siteUrl).replace(/\/$/, '');

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['RealEstateAgent', 'LocalBusiness'],
  name: company.name,
  alternateName: [company.shortName, company.abbr],
  url: siteUrl,
  logo: `${siteUrl}/apple-touch-icon.png`,
  image: `${siteUrl}/og-image.png`,
  email: company.email,
  ...(company.phone ? { telephone: company.phone } : {}),
  ...(company.address ? { address: { '@type': 'PostalAddress', streetAddress: company.address, addressCountry: 'NG' } } : { address: { '@type': 'PostalAddress', addressCountry: 'NG' } }),
  areaServed: { '@type': 'Country', name: 'Nigeria' },
  sameAs: [company.instagram, company.facebook],
  knowsAbout: ['Property sales', 'Letting', 'Property management', 'Facility management', 'Real estate investment'],
};

export default defineConfig(({ mode }) => {
  const preview = mode === 'preview';
  return {
    plugins: [
      react(),
      {
        name: 'html-vars',
        transformIndexHtml: { order: 'pre', handler: (html) => html.replaceAll('%SITE_URL%', siteUrl).replace('%JSON_LD%', JSON.stringify(jsonLd)) },
      },
      ...(preview ? [viteSingleFile()] : []),
    ],
    define: { 'import.meta.env.VITE_SITE_URL': JSON.stringify(siteUrl) },
    build: preview ? { outDir: 'preview-dist' } : {},
  };
});
