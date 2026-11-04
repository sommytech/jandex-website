import { Link } from 'react-router-dom';
import { Seo } from '../seo.jsx';
import Elevation from '../components/Elevation.jsx';
import PropertyCard from '../components/PropertyCard.jsx';
import { Check } from '../components/Icons.jsx';
import { listings, process, propertyServices, fmServices } from '../data/content.js';

export default function Home() {
  return (
    <>
      <Seo path="/" description="Jandex Properties and Facility Management Limited helps you buy, sell, let and manage property in Nigeria, and keeps homes, estates and offices maintained, secure and running." />

      <section className="hero">
        <div className="wrap hero__grid">
          <div className="hero__copy">
            <h1 className="hero__title">Property bought right. Buildings looked after properly.</h1>
            <p className="hero__lede">Jandex finds, verifies and manages property for owners, investors and tenants, then keeps it maintained, secure and earning long after the keys change hands.</p>
            <div className="hero__ctas">
              <Link to="/properties" className="btn btn--solid">Find a property</Link>
              <Link to="/contact?topic=fm" className="btn btn--ghost">Get a facility management quote</Link>
            </div>
          </div>
          <div className="hero__art"><Elevation /></div>
        </div>
      </section>

      <section className="section doors" aria-labelledby="doors-h">
        <div className="wrap">
          <h2 id="doors-h" className="h2">One company for the whole life of a building</h2>
          <div className="doors__grid">
            <article className="door">
              <h3 className="door__title">Properties</h3>
              <p>Buying, selling, letting and managing homes, land and commercial space, with every title checked before money moves.</p>
              <ul className="ticks">
                {propertyServices.map(s => <li key={s.id}><Check /> {s.title}</li>)}
              </ul>
              <Link to="/services" className="link">Explore property services</Link>
            </article>
            <article className="door door--dark">
              <h3 className="door__title">Facility management</h3>
              <p>Maintenance, power, cleaning, security and estate administration for residential estates, offices and institutions.</p>
              <ul className="ticks">
                {fmServices.slice(0, 5).map(s => <li key={s.id}><Check /> {s.title}</li>)}
              </ul>
              <Link to="/facility-management" className="link">Explore facility management</Link>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--tint" aria-labelledby="feat-h">
        <div className="wrap">
          <div className="section__head">
            <div>
              <h2 id="feat-h" className="h2">Available now</h2>
              <p className="muted">A selection from our current listings. Tell us what you need and we will search off-market stock too.</p>
            </div>
            <Link to="/properties" className="link">See all properties</Link>
          </div>
          <div className="cards">
            {listings.slice(0, 3).map(p => <PropertyCard key={p.id} p={p} />)}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="how-h">
        <div className="wrap">
          <h2 id="how-h" className="h2">How we work</h2>
          <ol className="steps">
            {process.map((s, i) => (
              <li key={s.title} className="step">
                <span className="step__n">{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section abroad" aria-labelledby="abroad-h">
        <div className="wrap abroad__grid">
          <div>
            <h2 id="abroad-h" className="h2">Own property in Nigeria but live abroad?</h2>
            <p>We act as your hands on the ground. You approve decisions from wherever you are; we handle tenants, repairs, rent and paperwork, and send you proof of everything.</p>
            <Link to="/contact?topic=manage" className="btn btn--accent">Talk to us about managing your property</Link>
          </div>
          <ul className="abroad__list">
            <li><strong>Monthly statements</strong><span>Rent received, costs paid and balance, in one clear report.</span></li>
            <li><strong>Photo inspections</strong><span>Dated photos of your property after every visit.</span></li>
            <li><strong>One contact person</strong><span>A named manager who answers on email and WhatsApp.</span></li>
            <li><strong>Approval before spend</strong><span>No repair above your agreed limit without your go-ahead.</span></li>
          </ul>
        </div>
      </section>

      <section className="section cta-band" aria-labelledby="cta-h">
        <div className="wrap cta-band__inner">
          <h2 id="cta-h" className="h2">Tell us what you are looking for</h2>
          <p>If it is not listed yet, we will find it. Share your location, budget and timeline and we will come back with options.</p>
          <Link to="/contact" className="btn btn--solid">Send an enquiry</Link>
        </div>
      </section>
    </>
  );
}
