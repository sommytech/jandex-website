export default function Logo({ light = false }) {
  return (
    <span className={`logo ${light ? 'logo--light' : ''}`}>
      <svg viewBox="0 0 40 40" width="38" height="38" aria-hidden="true">
        <rect x="1" y="1" width="38" height="38" rx="3" fill="currentColor" />
        <path d="M8 17 L20 7 L32 17" fill="none" stroke="var(--logo-accent)" strokeWidth="2.6" strokeLinejoin="round" strokeLinecap="round" />
        <path d="M23 15 V27 a5 5 0 0 1 -10 0" fill="none" stroke="var(--logo-fg)" strokeWidth="3.2" strokeLinecap="round" />
      </svg>
      <span className="logo__text">
        <span className="logo__name">Jandex</span>
        <span className="logo__sub">Properties &amp; Facility Management</span>
      </span>
    </span>
  );
}
