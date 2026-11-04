// Generates favicon PNGs, the app icon and the 1200x630 social share image from SVG.
// Run with `npm run assets` after changing brand colours or copy.
import sharp from 'sharp';
import fs from 'node:fs';

const forest = '#12372a', ochre = '#d9a441', white = '#ffffff';
const mark = (size) => `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 40 40">
  <rect x="0" y="0" width="40" height="40" rx="6" fill="${forest}"/>
  <path d="M8 17 L20 7 L32 17" fill="none" stroke="${ochre}" stroke-width="2.6" stroke-linejoin="round" stroke-linecap="round"/>
  <path d="M23 15 V27 a5 5 0 0 1 -10 0" fill="none" stroke="${white}" stroke-width="3.2" stroke-linecap="round"/></svg>`;

fs.mkdirSync('public', { recursive: true });
fs.writeFileSync('public/favicon.svg', mark(40));
await sharp(Buffer.from(mark(512))).resize(32, 32).png().toFile('public/favicon-32.png');
await sharp(Buffer.from(mark(512))).resize(180, 180).png().toFile('public/apple-touch-icon.png');
await sharp(Buffer.from(mark(512))).resize(512, 512).png().toFile('public/icon-512.png');

const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="${forest}"/>
  <g transform="translate(80,80) scale(2.4)">
    <rect width="40" height="40" rx="5" fill="${ochre}"/>
    <path d="M8 17 L20 7 L32 17" fill="none" stroke="${forest}" stroke-width="2.6" stroke-linejoin="round" stroke-linecap="round"/>
    <path d="M23 15 V27 a5 5 0 0 1 -10 0" fill="none" stroke="${forest}" stroke-width="3.2" stroke-linecap="round"/>
  </g>
  <text x="80" y="330" font-family="Helvetica, Arial, sans-serif" font-weight="800" font-size="84" fill="${white}" letter-spacing="-3">Jandex Properties</text>
  <text x="80" y="400" font-family="Helvetica, Arial, sans-serif" font-weight="500" font-size="38" fill="#c9d8cf">Property and facility management in Nigeria</text>
  <rect x="80" y="470" width="120" height="6" fill="${ochre}"/>
  <text x="80" y="540" font-family="Helvetica, Arial, sans-serif" font-size="30" fill="#c9d8cf">Buy · Sell · Let · Manage · Maintain</text>
  <g fill="none" stroke="#2c5a49" stroke-width="3">
    <path d="M820 630 V200 H1060 V630"/><path d="M810 200 H1070"/>
    ${Array.from({ length: 7 }, (_, f) => Array.from({ length: 4 }, (_, c) => `<rect x="${846 + c * 52}" y="${230 + f * 56}" width="30" height="34" ${((f * 3 + c * 5) % 4) ? `fill="${ochre}" stroke="none" opacity=".85"` : ''}/>`).join('')).join('')}
  </g>
</svg>`;
await sharp(Buffer.from(og)).png().toFile('public/og-image.png');
console.log('brand assets written to public/');
