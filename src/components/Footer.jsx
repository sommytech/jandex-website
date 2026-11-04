import { Link } from 'react-router-dom';
import Logo from './Logo.jsx';
import { company } from '../config.js';
import { Instagram, Facebook, Mail } from './Icons.jsx';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="wrap footer__grid">
        <div className="footer__brand">
          <Logo light />
          <p>{company.name} helps owners, investors and occupiers buy, let, manage and maintain property in {company.country}.</p>
        </div>
        <div>
          <h2 className="footer__h">Services</h2>
          <ul>
            <li><Link to="/properties">Find a property</Link></li>
            <li><Link to="/services#sales">Buy or sell</Link></li>
            <li><Link to="/services#letting">Letting and leasing</Link></li>
            <li><Link to="/services#management">Property management</Link></li>
            <li><Link to="/facility-management">Facility management</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="footer__h">Company</h2>
          <ul>
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/about#faq">Questions</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="footer__h">Get in touch</h2>
          <ul className="footer__contact">
            <li><a href={`mailto:${company.email}`}><Mail /> {company.email}</a></li>
            {company.phone && <li><a href={`tel:${company.phone}`}>{company.phone}</a></li>}
            <li><a href={company.instagram} rel="noopener" target="_blank"><Instagram /> Instagram {company.handle}</a></li>
            <li><a href={company.facebook} rel="noopener" target="_blank"><Facebook /> Facebook {company.handle}</a></li>
            {company.address && <li>{company.address}</li>}
          </ul>
        </div>
      </div>
      <div className="wrap footer__base">
        <p>© {year} {company.name}. All rights reserved.</p>
        <p>{company.abbr}</p>
      </div>
    </footer>
  );
}
