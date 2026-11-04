import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Seo } from '../seo.jsx';
import PropertyCard from '../components/PropertyCard.jsx';
import { listings } from '../data/content.js';

const types = ['All', 'Sale', 'Rent', 'Lease'];
const categories = ['All', 'Residential', 'Commercial', 'Land'];

export default function Properties() {
  const [type, setType] = useState('All');
  const [cat, setCat] = useState('All');
  const shown = useMemo(() => listings.filter(p => (type === 'All' || p.type === type) && (cat === 'All' || p.category === cat)), [type, cat]);

  return (
    <>
      <Seo title="Properties for sale, rent and lease" path="/properties" description="Browse verified homes, land and commercial property for sale, rent and lease from Jandex Properties. Every title is checked before you pay." />
      <section className="page-head">
        <div className="wrap">
          <h1 className="h1">Properties</h1>
          <p className="lede">Homes, land and commercial space for sale, rent and lease. Every property comes with a title check before you pay anything.</p>
          {listings.some(l => l.sample) && <p className="demo-note">Listings marked “Sample listing” are placeholders for this preview and will be replaced with live Jandex stock.</p>}
        </div>
      </section>
      <section className="section section--flush">
        <div className="wrap">
          <div className="filters" role="group" aria-label="Filter properties">
            <div className="seg" role="radiogroup" aria-label="Listing type">
              {types.map(t => <button key={t} role="radio" aria-checked={type === t} className={type === t ? 'is-on' : ''} onClick={() => setType(t)}>{t === 'All' ? 'Any listing' : `For ${t.toLowerCase()}`}</button>)}
            </div>
            <div className="seg" role="radiogroup" aria-label="Property category">
              {categories.map(c => <button key={c} role="radio" aria-checked={cat === c} className={cat === c ? 'is-on' : ''} onClick={() => setCat(c)}>{c === 'All' ? 'All types' : c}</button>)}
            </div>
            <p className="filters__count" aria-live="polite">{shown.length} {shown.length === 1 ? 'property' : 'properties'}</p>
          </div>
          {shown.length ? (
            <div className="cards">{shown.map(p => <PropertyCard key={p.id} p={p} />)}</div>
          ) : (
            <div className="empty">
              <h2>Nothing listed in this combination yet</h2>
              <p>Much of what we sell never reaches a public listing. Send us your brief and we will search for you.</p>
              <Link className="btn btn--solid" to="/contact">Send your brief</Link>
            </div>
          )}
          <p className="note">Prices are shared on request because they depend on payment terms and current title status.</p>
        </div>
      </section>
    </>
  );
}
