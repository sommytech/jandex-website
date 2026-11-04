import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Logo from './Logo.jsx';

const nav = [
  ['/properties', 'Properties'],
  ['/services', 'Property services'],
  ['/facility-management', 'Facility management'],
  ['/about', 'About'],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="header">
      <div className="wrap header__inner">
        <Link to="/" className="header__brand" aria-label="Jandex Properties home"><Logo /></Link>
        <button className="header__toggle" aria-expanded={open} aria-controls="site-nav" onClick={() => setOpen(o => !o)}>
          <span className="sr">Menu</span>
          <span className={`burger ${open ? 'is-open' : ''}`} aria-hidden="true"><i /><i /></span>
        </button>
        <nav id="site-nav" className={`nav ${open ? 'is-open' : ''}`} aria-label="Main">
          {nav.map(([to, label]) => (
            <NavLink key={to} to={to} className="nav__link">{label}</NavLink>
          ))}
          <Link to="/contact" className="btn btn--solid nav__cta">Contact us</Link>
        </nav>
      </div>
    </header>
  );
}
