// Renders every route to static HTML so search engines and social previews
// see full content without running JavaScript. Also writes sitemap.xml.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const { render, routes } = await import(pathToFileURL(path.join(root, 'dist-ssr/entry-server.js')).href);
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

function page(url) {
  const { html, head } = render(url);
  let out = template.replace('<!--app-->', html);
  if (head.title) {
    out = out
      .replace(/<title>.*?<\/title>/, `<title>${esc(head.title)}</title>`)
      .replace(/(<meta property="og:title" content=")[^"]*/, `$1${esc(head.title)}`)
      .replace(/(<meta name="twitter:title" content=")[^"]*/, `$1${esc(head.title)}`);
  }
  if (head.description) {
    out = out
      .replace(/(<meta name="description" content=")[^"]*/, `$1${esc(head.description)}`)
      .replace(/(<meta property="og:description" content=")[^"]*/, `$1${esc(head.description)}`)
      .replace(/(<meta name="twitter:description" content=")[^"]*/, `$1${esc(head.description)}`);
  }
  if (head.url) {
    out = out
      .replace(/(<link rel="canonical" href=")[^"]*/, `$1${head.url}`)
      .replace(/(<meta property="og:url" content=")[^"]*/, `$1${head.url}`);
  }
  return { out, head };
}

const urls = [];
for (const route of routes) {
  const { out, head } = page(route);
  const file = route === '/' ? path.join(dist, 'index.html') : path.join(dist, route.slice(1), 'index.html');
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, out);
  urls.push(head.url);
  console.log('prerendered', route);
}
const nf = page('/404');
fs.writeFileSync(path.join(dist, '404.html'), nf.out.replace('content="index, follow"', 'content="noindex"'));

const today = new Date().toISOString().slice(0, 10);
fs.writeFileSync(path.join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  urls.map(u => `  <url><loc>${u}</loc><lastmod>${today}</lastmod></url>`).join('\n') + '\n</urlset>\n');
const siteUrl = urls[0].replace(/\/$/, '');
fs.writeFileSync(path.join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`);
fs.rmSync(path.join(root, 'dist-ssr'), { recursive: true, force: true });
console.log('sitemap.xml + robots.txt written');
