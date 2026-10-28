import { SITE_URL, SITE_NAME, PERSON_NAME, LINKS, OG_IMAGE, PAGES } from './siteConfig';

const escapeHtml = (value) => value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

export const pageMeta = (path) => PAGES[path] || PAGES['/'];

const canonicalUrl = (path) => (path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`);

const personJsonLd = () => JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: PERSON_NAME,
    url: `${SITE_URL}/`,
    jobTitle: 'Software Engineer',
    sameAs: [LINKS.linkedin, LINKS.github],
}).replace(/</g, '\\u003c');

// Head tags for the prerendered HTML, read by crawlers and link previews.
export const headTags = (path) => {
    const { title, description } = pageMeta(path);
    const url = canonicalUrl(path);
    const tags = [
        `<title>${escapeHtml(title)}</title>`,
        `<meta name="description" content="${escapeHtml(description)}" />`,
        `<link rel="canonical" href="${url}" />`,
        `<meta property="og:type" content="${path === '/' ? 'profile' : 'website'}" />`,
        `<meta property="og:site_name" content="${escapeHtml(SITE_NAME)}" />`,
        `<meta property="og:title" content="${escapeHtml(title)}" />`,
        `<meta property="og:description" content="${escapeHtml(description)}" />`,
        `<meta property="og:url" content="${url}" />`,
        `<meta property="og:image" content="${OG_IMAGE}" />`,
        '<meta name="twitter:card" content="summary_large_image" />',
        `<meta name="twitter:title" content="${escapeHtml(title)}" />`,
        `<meta name="twitter:description" content="${escapeHtml(description)}" />`,
        `<meta name="twitter:image" content="${OG_IMAGE}" />`,
    ];
    if (path === '/') {
        tags.push(`<script type="application/ld+json">${personJsonLd()}</script>`);
    }
    return tags.join('\n  ');
};

// A stand-in page for a moved path: crawlers follow the canonical link and
// browsers the refresh.
export const redirectPage = (to) => {
    const url = canonicalUrl(to);
    return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>Moved</title>
  <meta name="robots" content="noindex" />
  <link rel="canonical" href="${url}" />
  <meta http-equiv="refresh" content="0; url=${to}" />
</head>
<body><p>This page has moved to <a href="${to}">${url}</a>.</p></body>
</html>
`;
};

// Keeps the title and description in step during client-side navigation.
export const applyPageMeta = (path) => {
    const { title, description } = pageMeta(path);
    document.title = title;
    const descriptionTag = document.querySelector('meta[name="description"]');
    if (descriptionTag) descriptionTag.setAttribute('content', description);
};
