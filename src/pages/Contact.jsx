import { Seo } from '../seo.jsx';
import EnquiryForm from '../components/EnquiryForm.jsx';
import { company } from '../config.js';
import { Instagram, Facebook, Mail } from '../components/Icons.jsx';

export default function Contact() {
  const wa = company.whatsapp && `https://wa.me/${company.whatsapp.replace(/\D/g, '')}`;
  return (
    <>
      <Seo title="Contact us" path="/contact" description="Contact Jandex Properties to find a property, sell or let yours, arrange property management or request a facility management quote. We reply within one working day." />
      <section className="page-head">
        <div className="wrap">
          <h1 className="h1">Contact us</h1>
          <p className="lede">Tell us what you need. The more detail you share about location, budget and timing, the faster we can come back with real options.</p>
        </div>
      </section>
      <section className="section section--flush">
        <div className="wrap contact">
          <EnquiryForm />
          <aside className="contact__aside" aria-label="Other ways to reach us">
            <h2 className="h3">Other ways to reach us</h2>
            <ul className="reach">
              <li>
                <span className="reach__k">Email</span>
                <a href={`mailto:${company.email}`}><Mail /> {company.email}</a>
              </li>
              {company.phone && <li><span className="reach__k">Phone</span><a href={`tel:${company.phone}`}>{company.phone}</a></li>}
              {wa && <li><span className="reach__k">WhatsApp</span><a href={wa} target="_blank" rel="noopener">Chat on WhatsApp</a></li>}
              <li>
                <span className="reach__k">Instagram</span>
                <a href={company.instagram} target="_blank" rel="noopener"><Instagram /> {company.handle}</a>
              </li>
              <li>
                <span className="reach__k">Facebook</span>
                <a href={company.facebook} target="_blank" rel="noopener"><Facebook /> {company.handle}</a>
              </li>
              {company.address && <li><span className="reach__k">Office</span><span>{company.address}</span></li>}
            </ul>
            <div className="reach__note">
              <h3>What happens next</h3>
              <p>We reply within one working day, usually with a few questions and a time to speak or visit. There is no charge for an initial consultation or site assessment.</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
