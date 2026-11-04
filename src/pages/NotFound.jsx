import { Link } from 'react-router-dom';
import { Seo } from '../seo.jsx';

export default function NotFound() {
  return (
    <section className="page-head">
      <Seo title="Page not found" path="/404" description="This page could not be found." />
      <div className="wrap">
        <h1 className="h1">This page does not exist</h1>
        <p className="lede">The link may be old or mistyped. Try the properties page, or go back to the home page.</p>
        <div className="hero__ctas">
          <Link className="btn btn--solid" to="/properties">View properties</Link>
          <Link className="btn btn--ghost" to="/">Go to home page</Link>
        </div>
      </div>
    </section>
  );
}
