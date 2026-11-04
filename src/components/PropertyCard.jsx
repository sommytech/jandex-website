import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bed, Bath, Area, Pin } from './Icons.jsx';

function Placeholder({ category }) {
  return (
    <svg className="card__ph" viewBox="0 0 400 260" aria-hidden="true">
      <rect width="400" height="260" />
      {category === 'Land' ? (
        <path d="M20 200 Q120 150 200 180 T380 160 M20 225 Q140 190 240 210 T380 200" />
      ) : category === 'Commercial' ? (
        <path d="M120 230 V60 H280 V230 M140 90 H260 M140 120 H260 M140 150 H260 M140 180 H260 M60 230 H340" />
      ) : (
        <path d="M110 230 V140 L200 80 L290 140 V230 M60 230 H340 M175 230 V180 H225 V230" />
      )}
    </svg>
  );
}

export default function PropertyCard({ p }) {
  const [failed, setFailed] = useState(false);
  return (
    <article className="card">
      <div className="card__media">
        {p.image && !failed
          ? <img src={p.image} alt={`${p.title} in ${p.area}`} loading="lazy" width="600" height="390" onError={() => setFailed(true)} />
          : <Placeholder category={p.category} />}
        <span className="card__type">For {p.type.toLowerCase()}</span>
        {p.sample && <span className="card__sample">Sample listing</span>}
      </div>
      <div className="card__body">
        <h3 className="card__title">{p.title}</h3>
        <p className="card__area"><Pin /> {p.area}</p>
        <ul className="card__facts">
          {p.beds && <li><Bed /> {p.beds} beds</li>}
          {p.baths && <li><Bath /> {p.baths} baths</li>}
          <li><Area /> {p.size}</li>
        </ul>
        <div className="card__foot">
          <span className="card__price">{p.price}</span>
          <Link className="link" to={`/contact?topic=property&ref=${p.id}`}>Enquire</Link>
        </div>
      </div>
    </article>
  );
}
