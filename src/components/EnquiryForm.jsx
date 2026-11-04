import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { company } from '../config.js';
import { listings } from '../data/content.js';

const topics = [
  { id: 'property', label: 'Find a property' },
  { id: 'list', label: 'Sell or let my property' },
  { id: 'manage', label: 'Manage my property' },
  { id: 'fm', label: 'Facility management quote' },
];

const encode = (data) => new URLSearchParams(data).toString();

function Field({ label, name, type = 'text', required, children, hint, ...rest }) {
  const id = `f-${name}`;
  return (
    <div className="field">
      <label htmlFor={id}>{label}{!required && <span className="opt"> (optional)</span>}</label>
      {children
        ? <select id={id} name={name} required={required} {...rest}>{children}</select>
        : type === 'textarea'
          ? <textarea id={id} name={name} rows="4" required={required} {...rest} />
          : <input id={id} name={name} type={type} required={required} {...rest} />}
      {hint && <small>{hint}</small>}
    </div>
  );
}

export default function EnquiryForm() {
  const [params] = useSearchParams();
  const [topic, setTopic] = useState('property');
  const [ref, setRef] = useState(null);
  // Read the query after hydration so prerendered HTML and the first client render match.
  useEffect(() => {
    const t = params.get('topic');
    if (topics.some(x => x.id === t)) setTopic(t);
    setRef(listings.find(l => l.id === params.get('ref')) || null);
  }, [params]);
  const [status, setStatus] = useState('idle');

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    if (import.meta.env.VITE_PREVIEW) { setStatus('preview'); return; }
    setStatus('sending');
    try {
      const res = await fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: encode(data) });
      if (!res.ok) throw new Error(String(res.status));
      setStatus('sent');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  if (status === 'sent') {
    return (
      <div className="form-done" role="status">
        <h3>Enquiry received</h3>
        <p>Thank you. A member of the Jandex team will reply to the email you gave within one working day.</p>
        <button className="btn btn--ghost" onClick={() => setStatus('idle')}>Send another enquiry</button>
      </div>
    );
  }

  return (
    <form className="form" name="enquiry" method="POST" data-netlify="true" netlify-honeypot="company_site" onSubmit={onSubmit}>
      <input type="hidden" name="form-name" value="enquiry" />
      <p className="hp"><label>Leave this empty <input name="company_site" tabIndex="-1" autoComplete="off" /></label></p>

      <fieldset className="topics">
        <legend>What can we help with?</legend>
        {topics.map(t => (
          <label key={t.id} className={`topic ${topic === t.id ? 'is-on' : ''}`}>
            <input type="radio" name="topic" value={t.label} checked={topic === t.id} onChange={() => setTopic(t.id)} />
            {t.label}
          </label>
        ))}
      </fieldset>

      <div className="form__grid">
        <Field label="Full name" name="name" required autoComplete="name" />
        <Field label="Email address" name="email" type="email" required autoComplete="email" />
        <Field label="Phone or WhatsApp" name="phone" type="tel" autoComplete="tel" hint="Include your country code if you are outside Nigeria." />
        <Field label="Location" name="location" required placeholder={topic === 'property' ? 'e.g. Lekki, Lagos' : 'Where is the property?'} />

        {topic === 'property' && (<>
          <Field label="Looking to" name="intent" required defaultValue="">
            <option value="" disabled>Choose one</option>
            <option>Buy</option><option>Rent</option><option>Lease commercial space</option>
          </Field>
          <Field label="Property type" name="property_type" required defaultValue="">
            <option value="" disabled>Choose one</option>
            <option>Apartment / flat</option><option>Terrace or semi-detached</option><option>Detached house</option>
            <option>Land</option><option>Office</option><option>Retail / shop</option><option>Warehouse / industrial</option>
          </Field>
          <Field label="Budget (₦)" name="budget" placeholder="e.g. 150,000,000" />
          <Field label="Timeline" name="timeline" defaultValue="">
            <option value="">Not sure yet</option>
            <option>Within 30 days</option><option>1–3 months</option><option>3–6 months</option><option>Later this year</option>
          </Field>
        </>)}

        {(topic === 'list' || topic === 'manage') && (<>
          <Field label="Property type" name="property_type" required defaultValue="">
            <option value="" disabled>Choose one</option>
            <option>Apartment / flat</option><option>House</option><option>Estate / multiple units</option>
            <option>Land</option><option>Commercial building</option>
          </Field>
          <Field label={topic === 'list' ? 'I want to' : 'Number of units'} name={topic === 'list' ? 'intent' : 'units'} required={topic === 'list'} defaultValue="">
            {topic === 'list'
              ? (<><option value="" disabled>Choose one</option><option>Sell</option><option>Let / rent out</option><option>Not sure, advise me</option></>)
              : (<><option value="">Choose one</option><option>1</option><option>2–5</option><option>6–20</option><option>More than 20</option></>)}
          </Field>
        </>)}

        {topic === 'fm' && (<>
          <Field label="Facility type" name="property_type" required defaultValue="">
            <option value="" disabled>Choose one</option>
            <option>Residential estate</option><option>Office building</option><option>School or hospital</option>
            <option>Retail / mall</option><option>Private home</option><option>Industrial site</option>
          </Field>
          <Field label="Services needed" name="services" placeholder="e.g. maintenance, cleaning, security" />
        </>)}

        <div className="span-2">
          <Field key={ref ? ref.id : 'none'} label="Anything else we should know?" name="message" type="textarea"
            defaultValue={ref ? `I'm interested in: ${ref.title}, ${ref.area}.` : ''}
            placeholder="Size, number of rooms, features that matter most to you…" />
        </div>
      </div>

      <div className="form__foot">
        <button className="btn btn--solid" type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending…' : 'Send enquiry'}
        </button>
        <p className="form__note">Prefer email? Write to <a href={`mailto:${company.email}`}>{company.email}</a></p>
      </div>
      {status === 'error' && <p className="form__msg form__msg--err" role="alert">Your enquiry did not send. Check your connection and try again, or email {company.email} directly.</p>}
      {status === 'preview' && <p className="form__msg" role="status">This is the design preview, so nothing was sent. On the live site this form delivers straight to the Jandex inbox.</p>}
    </form>
  );
}
