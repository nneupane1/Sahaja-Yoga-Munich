# Sahaja Yoga München Frontend

Technical guide for the public website in `modern-website/`.

This app is a Vite React single-page application. It combines local TypeScript content with runtime Sanity data for blog posts and newsletters.

For the full repository overview, including the Sanity Studio, see the root [`README.md`](../README.md).

## Contents

- [Stack](#frontend-stack)
- [App Structure](#frontend-app-structure)
- [Runtime Boot](#frontend-runtime-boot)
- [Routing](#frontend-routing)
- [Locale State](#frontend-locale-state)
- [Content Model](#frontend-content-model)
- [Sanity Integration](#frontend-sanity-integration)
- [Newsletter API](#frontend-newsletter-api)
- [Legacy Newsletter Rendering](#frontend-legacy-newsletter-rendering)
- [Environment Variables](#frontend-environment-variables)
- [Local Development](#frontend-local-development)
- [Build And Deployment](#frontend-build-and-deployment)
- [Maintenance Notes](#frontend-maintenance-notes)

<a id="frontend-stack"></a>
## Stack

| Layer | Package / tool |
| --- | --- |
| UI runtime | React 18 |
| Language | TypeScript |
| Build tool | Vite 4 |
| Router | React Router 7 |
| Styles | Tailwind CSS 3 plus shared CSS utilities |
| CMS client | `@sanity/client` |
| Sanity image URLs | `@sanity/image-url` |
| Visual effects | `three`, `vanta` |
| Deployment target | Vercel |

This is not a Next.js app. Routing is handled in the browser and Vercel rewrites app routes to `index.html`.

<a id="frontend-app-structure"></a>
## App Structure

```text
modern-website/
|-- api/
|   `-- newsletters.js
|-- src/
|   |-- App.tsx
|   |-- main.tsx
|   |-- assets/
|   |-- components/
|   |-- content/
|   |-- context/
|   |-- hooks/
|   |-- lib/
|   |-- pages/
|   `-- styles/
|-- index.html
|-- package.json
|-- tailwind.config.cjs
|-- vite.config.ts
`-- vercel.json
```

Key files:

| File | Purpose |
| --- | --- |
| `src/main.tsx` | Mounts React, router, locale provider, and global CSS |
| `src/App.tsx` | Central route table and app shell |
| `src/context/LocaleContext.tsx` | `de`/`en` locale persistence |
| `src/lib/sanity.ts` | Sanity browser client, image URL helper, and fetch helper |
| `src/content/blogArticles.ts` | Static fallback blog article data |
| `src/content/sanityBlog.ts` | Sanity blog fetch and mapping layer |
| `src/content/sanityNewsletters.ts` | Newsletter fetch, mapping, and fallback logic |
| `src/content/topicPages.ts` | German knowledge hub data |
| `src/content/topicPagesEn.ts` | English knowledge hub data |
| `src/content/knowledgeArticles.ts` | Local knowledge article data |
| `src/components/LegacyNewsletterFrame.tsx` | Iframe renderer for imported legacy newsletter HTML |
| `api/newsletters.js` | Vercel serverless endpoint for newsletter reads |
| `vercel.json` | Vercel build, rewrite, cache, and security header config |

<a id="frontend-runtime-boot"></a>
## Runtime Boot

`src/main.tsx` renders:

```text
React.StrictMode
  BrowserRouter
    LocaleProvider
      App
```

`src/App.tsx` wraps every route with:

- `ScrollToHash`
- `NavBar`
- React Router `Routes`
- `Footer`

The global stylesheet is `src/styles/tailwind.css`. Tailwind scans `index.html` and `src/**/*.{js,ts,jsx,tsx}`.

<a id="frontend-routing"></a>
## Routing

Route definitions live in `src/App.tsx`.

| Route | Component | Source |
| --- | --- | --- |
| `/` | `HomePage` | Local components and assets |
| `/blog` | `BlogPage` | Local layout, Sanity/local blog data, Sanity newsletter data |
| `/blog/newsletter` | `NewsletterPage` | Sanity newsletters |
| `/blog/newsletter/:slug` | `NewsletterRoute` | Sanity newsletter detail and optional legacy import |
| `/blog/:slug` | `BlogArticleRoute` | Sanity post or local fallback |
| `/newsletter` | `NewsletterPage` | Legacy-compatible archive path |
| `/newsletter/:slug` | `NewsletterRoute` | Redirects to `/blog/newsletter/:slug` |
| `/shri-mataji` | `ShriMatajiPage` | Local code |
| `/shri-mataji/biografie` | `ShriMatajiPage` | Local code |
| `/shri-mataji/geistige-arbeit` | `ShriMatajiPage` | Local code |
| `/shri-mataji/oeffentliche-programme` | `ShriMatajiPage` | Local code |
| `/shri-mataji/zeitleiste` | `ShriMatajiPage` | Local code |
| `/shri-mataji/vermaechtnis` | `ShriMatajiPage` | Local code |
| `/kundalini-energiesystem` | `KundaliniPage` | Local topic content |
| `/selbstverwirklichung-meditation` | `SelbstverwirklichungPage` | Local topic content |
| `/wissenschaft-spiritualitaet` | `WissenschaftPage` | Local topic content |
| `/kultur-des-geistes` | `KulturPage` | Local topic content |
| `/:hub/:article` | `KnowledgeArticleRoute` | Local knowledge article content |

Route ordering is intentional. Newsletter routes are registered before `/blog/:slug`, so `/blog/newsletter` is not treated as a blog article slug.

<a id="frontend-locale-state"></a>
## Locale State

The locale context supports:

- `de`
- `en`

Behavior:

- default locale is `de`
- selected locale is stored in `localStorage` under `locale`
- `document.documentElement.lang` is updated whenever the locale changes
- content modules receive the locale and return German or English data when available

<a id="frontend-content-model"></a>
## Content Model

The frontend currently uses a hybrid content model.

| Area | Source | Runtime fallback |
| --- | --- | --- |
| Homepage | React components | None |
| Shri Mataji routes | React page/component code | None |
| Knowledge hubs | `topicPages.ts`, `topicPagesEn.ts` | None |
| Knowledge articles | `knowledgeArticles.ts` | None |
| Blog listing | Sanity `post` documents | `blogArticles.ts` |
| Blog detail pages | Sanity `post` documents | `blogArticles.ts` |
| Newsletter archive | Sanity `newsletter` documents | Empty state |
| Newsletter detail pages | Sanity `newsletter` documents | Redirect to archive |
| Legacy newsletter HTML | Sanity `legacyHtmlPage` through `newsletter.legacyImport` | Hidden if missing |

This means CMS setup is required for newsletters, while the blog remains usable locally through static fallback articles.

<a id="frontend-sanity-integration"></a>
## Sanity Integration

### Client Setup

`src/lib/sanity.ts` reads Vite environment variables:

- `VITE_SANITY_PROJECT_ID`
- `VITE_SANITY_DATASET`
- `VITE_SANITY_API_VERSION`, default `2026-03-22`
- `VITE_SANITY_USE_CDN`, enabled unless set exactly to `false`

If project ID or dataset is missing:

- `isSanityConfigured` is `false`
- `sanityClient` is `null`
- blog Sanity fetches return `null`
- newsletter direct Sanity fallback cannot run

### Blog Fetching

`src/content/sanityBlog.ts` exposes:

- `getSanityBlogArticles(locale)`
- `getSanityBlogArticleBundle(locale, route)`

Sanity query behavior:

- fetches `post` documents for the active locale
- orders listing data by `featured desc, publishedAt desc`
- resolves category title through `category->title`
- resolves related posts through `related[]->`
- maps Sanity images through `getSanityImageUrl`

A Sanity blog post must include these fields to render:

- `slug.current`
- `title`
- `cardTitle`
- `cardDescription`
- `intro`
- `heroImage`
- `heroNote`
- at least one section with `title` and `paragraphs`

If mapping fails or no valid Sanity posts are returned, the app keeps the local fallback articles.

### Newsletter Fetching

`src/content/sanityNewsletters.ts` exposes:

- `getSanityNewsletters(locale)`
- `getSanityNewsletter(locale, slug)`
- `getSanityNewsletterLegacyImport(locale, slug)`

Newsletter reads are API-first in the browser:

```text
browser
  |
  +--> /api/newsletters
        |
        +--> Sanity server-side read
```

If the API fails, the module falls back to direct browser Sanity queries when the browser Sanity client is configured.

Newsletter list behavior:

- query localized newsletters first
- if no localized newsletters exist, query all newsletters
- order by `publishedAt desc`

Newsletter detail behavior:

- query localized issue by slug first
- if no localized issue exists, query any issue with the slug

A newsletter must include these fields to render:

- `title`
- `slug.current`
- `issueLabel`
- `introBody`
- `publishedAt`

Cards, links, schedules, donation fields, contact fields, and legacy imports are optional.

<a id="frontend-newsletter-api"></a>
## Newsletter API

`api/newsletters.js` is a Vercel serverless function. It uses `@sanity/client` server-side and reads:

- `process.env.VITE_SANITY_PROJECT_ID`
- `process.env.VITE_SANITY_DATASET`
- `process.env.VITE_SANITY_API_VERSION`, default `2026-03-22`

It always uses `useCdn: false`.

### Query Parameters

| Parameter | Required | Purpose |
| --- | --- | --- |
| `locale` | No | Defaults to `de` |
| `slug` | No | When present, fetches one issue instead of the archive list |
| `includeLegacy` | No | When set to `1`, returns legacy import fields only |

Examples:

```text
/api/newsletters?locale=de
/api/newsletters?locale=de&slug=sahaja-yoga-newsletter-01-2026
/api/newsletters?locale=de&slug=sahaja-yoga-newsletter-01-2026&includeLegacy=1
```

### Responses

- `200`: JSON array of matching records
- `503`: Sanity project ID or dataset is missing on the server
- `500`: Sanity fetch failed or an unexpected server error occurred

The Vercel config sets `Cache-Control: no-store` for `/api/*`.

<a id="frontend-legacy-newsletter-rendering"></a>
## Legacy Newsletter Rendering

Imported legacy newsletter HTML is stored in Sanity as `legacyHtmlPage.rawHtml` and linked from `newsletter.legacyImport`.

The detail page loads legacy HTML only after the user opens the imported issue view.

`LegacyNewsletterFrame` then:

- removes `<script>` and `<noscript>` blocks
- extracts the `<body>` content when a body tag exists
- injects local responsive CSS for old newsletter table layouts
- renders the result through an iframe `srcDoc`
- listens for iframe `postMessage` events to resize the iframe height

This renderer is a compatibility layer for archived newsletter content. It is not a general-purpose HTML sanitizer.

<a id="frontend-environment-variables"></a>
## Environment Variables

Create `modern-website/.env.local`.

```bash
VITE_SITE_URL=http://localhost:5173
VITE_SANITY_PROJECT_ID=your_project_id
VITE_SANITY_DATASET=production
VITE_SANITY_API_VERSION=2026-03-22
VITE_SANITY_USE_CDN=true
```

| Variable | Required | Purpose |
| --- | --- | --- |
| `VITE_SITE_URL` | No | Canonical app URL placeholder; current app code does not read it |
| `VITE_SANITY_PROJECT_ID` | Required for CMS content | Sanity project ID |
| `VITE_SANITY_DATASET` | Required for CMS content | Sanity dataset |
| `VITE_SANITY_API_VERSION` | Recommended | Sanity API version |
| `VITE_SANITY_USE_CDN` | Optional | Browser Sanity CDN toggle |

The newsletter API route also needs the `VITE_SANITY_*` values in the deployment environment because it reads them from `process.env`.

The checked-in `.env.example` includes `VITE_SITE_URL`, `VITE_GA_ID`, and `VITE_API_URL` placeholders. The current app code does not use them.

<a id="frontend-local-development"></a>
## Local Development

Install dependencies:

```bash
npm install
```

Start Vite:

```bash
npm run dev
```

Default local URL:

```text
http://localhost:5173
```

Useful commands:

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local Vite server |
| `npm run build` | Run TypeScript validation and production build |
| `npm run preview` | Preview the production build |
| `npm run type-check` | Run `tsc --noEmit` |
| `npm run lint` | Current lightweight lint command; it is TypeScript validation, not ESLint |
| `npm run format` | Format frontend source and `index.html` with Prettier |

If the local Vite server does not serve `/api/newsletters`, newsletter fetching can still work through direct Sanity fallback as long as:

- the Sanity browser env vars are present
- Sanity CORS allows `http://localhost:5173`

<a id="frontend-build-and-deployment"></a>
## Build And Deployment

Build:

```bash
npm run build
```

Preview the built output:

```bash
npm run preview
```

Vercel settings are defined in `vercel.json`.

| Setting | Value |
| --- | --- |
| Framework | `vite` |
| Install command | `npm install` |
| Build command | `npm run build` |
| Dev command | `npm run dev` |
| Output directory | `dist` |
| SPA rewrite | Extensionless non-API and non-asset requests go to `/index.html` |
| API cache | `/api/*` is `no-store` |
| Asset cache | `/assets/*` is immutable for one year |
| App shell cache | `index.html` and route responses revalidate |

When creating the Vercel project, set the project root to:

```text
modern-website
```

Required production environment for CMS features:

```text
VITE_SANITY_PROJECT_ID
VITE_SANITY_DATASET
VITE_SANITY_API_VERSION
```

Also configure Sanity CORS for the deployed domain.

<a id="frontend-maintenance-notes"></a>
## Maintenance Notes

- There is no frontend test runner configured.
- `npm run build` is the strongest automated verification currently available.
- `npm run lint` is not ESLint.
- Blog content has a local fallback; newsletter content does not.
- Sanity `siteSettings` exists in the Studio but is not consumed by this app.
- Knowledge and homepage content are still code-owned.
- Imported legacy HTML is rendered for archive compatibility and should be treated as trusted migration content, not arbitrary user input.
