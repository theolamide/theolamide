import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { ServerStyleSheet } from 'styled-components';
import App from './App';

export { headTags } from './seo';
export { PAGES } from './siteConfig';

// Used by scripts/prerender.js to turn each route into static HTML.
export function render(url) {
  const sheet = new ServerStyleSheet();
  try {
    const html = renderToStaticMarkup(sheet.collectStyles(
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    ));
    return { html, styles: sheet.getStyleTags() };
  } finally {
    sheet.seal();
  }
}
