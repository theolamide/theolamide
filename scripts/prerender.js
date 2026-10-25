// Writes a static HTML file per route after `vite build`, so crawlers, link
// previews and visitors without JavaScript get real content and metadata.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const ssrDir = path.join(root, 'dist-ssr');

const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
const HEAD = /<!-- head:start -->[\s\S]*<!-- head:end -->/;
const ROOT = '<div id="root"></div>';
if (!HEAD.test(template) || !template.includes(ROOT)) {
  throw new Error('index.html is missing the head markers or the empty #root element');
}

const { render, headTags, PAGES } = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href);

for (const route of Object.keys(PAGES)) {
  const { html, styles } = render(route);
  // Renamed so the client's styled-components does not try to reuse these tags.
  const prerenderStyles = styles.replace(/data-styled/g, 'data-prerender');
  const page = template
    .replace(HEAD, `${headTags(route)}\n  ${prerenderStyles}`)
    .replace(ROOT, `<div id="root">${html}</div>`);
  const out = route === '/' ? path.join(dist, 'index.html') : path.join(dist, route.slice(1), 'index.html');
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, page);
  console.log(`prerendered ${route} -> ${path.relative(root, out)}`);
}

fs.rmSync(ssrDir, { recursive: true, force: true });
