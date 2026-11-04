import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App, { routes } from './App.jsx';
import { HeadContext } from './seo.jsx';

export { routes };

export function render(url) {
  const head = {};
  const html = renderToString(
    <HeadContext.Provider value={head}>
      <StaticRouter location={url}><App /></StaticRouter>
    </HeadContext.Provider>
  );
  return { html, head };
}
