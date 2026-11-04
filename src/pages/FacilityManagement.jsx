import { Link } from 'react-router-dom';
import { Seo } from '../seo.jsx';
import { fmServices } from '../data/content.js';

const sectors = ['Residential estates', 'Office buildings', 'Schools', 'Hospitals and clinics', 'Retail and malls', 'Private homes', 'Industrial sites'];

export default function FacilityManagement() {
  return (
    <>
      <Seo title="Facility management services in Nigeria" path="/facility-management" description="Integrated facility management from Jandex: maintenance, electrical and plumbing, power, cleaning, security, landscaping and estate administration for estates, offices and institutions." />
      <section className="page-head page-head--dark">
        <div className="wrap">
          <h1 className="h1">Facility management</h1>
          <p className="lede">Buildings run best when someone owns the details. We keep the power on, the water running, the compound clean and the gate secure, and we report on it every month.</p>
          <Link className="btn btn--accent" to="/contact?topic=fm">Request a free site assessment</Link>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <h2 className="h2">What we look after</h2>
          <div className="fm-grid">
            {fmServices.map(s => (
              <article key={s.id} className="fm">
                <h3>{s.title}</h3>
                <p>{s.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section section--tint">
        <div className="wrap split">
          <div>
            <h2 className="h2">Who we work with</h2>
            <p>From a single family home to a gated estate of several hundred units, we scale the team and the reporting to the size of the site.</p>
          </div>
          <ul className="chips">{sectors.map(s => <li key={s}>{s}</li>)}</ul>
        </div>
      </section>
      <section className="section">
        <div className="wrap split">
          <div>
            <h2 className="h2">What you get every month</h2>
            <p>A short report covering work completed, open issues, energy and diesel use, and spend against budget. Nothing hidden, nothing to chase.</p>
          </div>
          <dl className="sla">
            <div><dt>Urgent faults</dt><dd>Attended the same day</dd></div>
            <div><dt>Routine requests</dt><dd>Scheduled within 48 hours</dd></div>
            <div><dt>Planned maintenance</dt><dd>Calendar agreed up front</dd></div>
            <div><dt>Reporting</dt><dd>Monthly, with photos</dd></div>
          </dl>
        </div>
      </section>
    </>
  );
}
