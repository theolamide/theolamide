# theỌlámidé

The personal portfolio of Olamide Ajadi, a software engineer with a background in mechanical engineering. Live at **[theolamide.me](https://www.theolamide.me)**.

## Pages

| Route | Page | What's on it |
| --- | --- | --- |
| `/` | About me | Background, how I got into software, and how I think about building. `/about` redirects here. |
| `/devportfolio` | Software work | Featured products (Tiler, Wọ́dù) followed by smaller projects, with live links and source where available. |
| `/photoportfolio` | Photography | Portrait and product work, plus a Home cooking collection (`/photoportfolio#cooking`), shown in a centred photo viewer. |

## Stack

- **React 16**, **React Router 5**, **styled-components 4**
- **Vite** for development and builds, **Vitest** with jsdom for tests
- Every route is **prerendered to static HTML** at build time, so search engines, link previews, and visitors without JavaScript get real content and metadata
- Hosted on **AWS Amplify** (see `amplify.yml`), built with Node 20

## Getting started

```sh
yarn install
yarn start     # dev server at http://localhost:3000
yarn test      # Vitest in watch mode
yarn build     # production build in dist/
yarn preview   # serve the production build locally
yarn thumbs    # make thumbnails for new gallery photos
```

### How the build works

`yarn build` runs three steps:

1. `vite build` bundles the client app into `dist/`.
2. `vite build --ssr src/entry-server.jsx` builds a server renderer into `dist-ssr/`.
3. `scripts/prerender.js` renders each route in `PAGES` to `dist/<route>/index.html`, fills in its head tags, writes redirect stubs for `REDIRECTS`, and then deletes `dist-ssr/`.

## Project layout

```
src/
  App.jsx                 Routes
  siteConfig.js           Site URL, social links, résumé path, per-page titles and descriptions, redirects
  seo.js                  Head tags (Open Graph, Twitter, canonical, JSON-LD) and client-side title updates
  entry-server.jsx        Server render entry used by the prerender script
  content/about.js        About page copy
  Components/
    About.jsx             About page
    DevPortfolio.jsx      Software work page
    PhotoPortfolio.jsx    Photography page and collection switcher
    PhotoGallery.jsx      Photo viewer
    PortfolioData.js      Projects, featured products, and photo collections
    SiteHeader.jsx        Header and navigation (slide-out menu on phones)
  Images/                 Project covers, photo galleries, icons
public/                   Favicon, résumé PDF, robots.txt, sitemap.xml
scripts/prerender.js      Writes static HTML for each route after the build
scripts/make-thumbs.js    Makes gallery thumbnails (yarn thumbs)
```

## Common updates

- **Add a software project**: add an entry to `PortfolioData` (or `FeaturedProducts`) in `src/Components/PortfolioData.js`, with its cover image in `src/Images/DevPortfolioGallery/`.
- **Add a photo**: put the full-size `.jpg` in `src/Images/PhotoPortfolioGallery/` or `src/Images/CookingGallery/`, run `yarn thumbs` to make its 200px-tall thumbnail in that folder's `thumbs/`, and list it in `PhotoRoll` or `CookingRoll`. `yarn thumbs` only makes missing thumbnails; pass file paths to remake specific ones, or `--force` to remake them all.
- **Edit the About page**: change the copy in `src/content/about.js`. The editorial rules are at the top of that file.
- **Add a page**: add the route in `src/App.jsx`, its title and description to `PAGES` in `src/siteConfig.js` (so it gets prerendered), a link in `SiteHeader.jsx`, and an entry in `public/sitemap.xml`.
- **Update the résumé or social links**: `RESUME_URL` and `LINKS` in `src/siteConfig.js`.
