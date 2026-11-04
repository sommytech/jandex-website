import { Link } from 'react-router-dom';
import { Seo } from '../seo.jsx';
import { faqs } from '../data/content.js';
import { company } from '../config.js';

const values = [
  { title: 'Verified before sold', text: 'We do not market a property until we have checked its title and seen it in person.' },
  { title: 'Clear in writing', text: 'Fees, scope and timelines are agreed on paper before work begins.' },
  { title: 'Reported, not promised', text: 'Owners get statements and photos, so progress is something you can see.' },
];

export default function About() {
  return (
    <>
      <Seo title="About us" path="/about" description="Jandex Properties and Facility Management Limited is a Nigerian real estate and facility management company built on verified transactions, clear agreements and regular reporting." />
      <section className="page-head">
        <div className="wrap">
          <h1 className="h1">About Jandex</h1>
          <p className="lede">{company.name} brings property transactions and building care under one roof, so the people who help you buy a property are the same people who keep it in good shape afterwards.</p>
        </div>
      </section>
      <section className="section section--flush">
        <div className="wrap values">
          {values.map(v => (
            <article key={v.title} className="value">
              <h2 className="h3">{v.title}</h2>
              <p>{v.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section id="faq" className="section section--tint" aria-labelledby="faq-h">
        <div className="wrap faq">
          <h2 id="faq-h" className="h2">Common questions</h2>
          <div>
            {faqs.map(f => (
              <details key={f.q} className="qa">
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <section className="section cta-band">
        <div className="wrap cta-band__inner">
          <h2 className="h2">Have a question we did not answer?</h2>
          <p>Send it over and we will reply within one working day.</p>
          <Link className="btn btn--solid" to="/contact">Contact us</Link>
        </div>
      </section>
    </>
  );
}
