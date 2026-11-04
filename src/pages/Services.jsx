import { Link } from 'react-router-dom';
import { Seo } from '../seo.jsx';
import { Check } from '../components/Icons.jsx';
import { propertyServices } from '../data/content.js';

export default function Services() {
  return (
    <>
      <Seo title="Property services: sales, letting, management and advisory" path="/services" description="Buy, sell, let and manage property in Nigeria with Jandex. Title verification, tenant referencing, rent collection and investment advice in one place." />
      <section className="page-head">
        <div className="wrap">
          <h1 className="h1">Property services</h1>
          <p className="lede">Whether you are buying your first home, letting an investment or building a portfolio, we take care of the checks, the paperwork and the day-to-day.</p>
        </div>
      </section>
      <section className="section section--flush">
        <div className="wrap svc-list">
          {propertyServices.map(s => (
            <article key={s.id} id={s.id} className="svc">
              <div className="svc__lead">
                <h2 className="h3">{s.title}</h2>
                <p>{s.summary}</p>
              </div>
              <ul className="ticks">
                {s.points.map(p => <li key={p}><Check /> {p}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>
      <section className="section cta-band">
        <div className="wrap cta-band__inner">
          <h2 className="h2">Ready to buy, sell or let?</h2>
          <p>Tell us about the property and what you want to achieve. We will reply with next steps within one working day.</p>
          <Link className="btn btn--solid" to="/contact?topic=list">Start a conversation</Link>
        </div>
      </section>
    </>
  );
}
