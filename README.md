# Sahaja Yoga Munich

Technical repository guide for the Sahaja Yoga Munich website and its Sanity CMS workspace.

This repository contains two independent Node applications:

- `modern-website/`: the public React, TypeScript, Vite website
- `sanity-studio/`: the Sanity Studio used to manage editorial content

There is no root `package.json` and no npm workspace setup. Install, run, build, and deploy each app from its own directory.

## Contents

- [System Overview](#root-system-overview)
- [Repository Layout](#root-repository-layout)
- [Runtime Architecture](#root-runtime-architecture)
- [Frontend App](#root-frontend-app)
- [Sanity Studio](#root-sanity-studio)
- [Content Ownership](#root-content-ownership)
- [Environment Variables](#root-environment-variables)
- [Local Development](#root-local-development)
- [Data Flows](#root-data-flows)
- [Routes](#root-routes)
- [Build And Deployment](#root-build-and-deployment)
- [Operational Notes](#root-operational-notes)
- [Known Technical Gaps](#root-known-technical-gaps)

<a id="root-system-overview"></a>
## System Overview

The project is a hybrid static/CMS website.

The public site is a client-rendered Vite React app. It renders static local content for the homepage, Shri Mataji pages, knowledge hubs, and knowledge articles. It also reads Sanity content for blog posts and newsletters when Sanity is configured.

The Sanity Studio defines the editorial data model and provides scripts to seed or import content into Sanity. The Studio is already part of the working system, not a future placeholder.

| Area | Implementation |
| --- | --- |
| Frontend framework | React 18 with TypeScript |
| Build tool | Vite 4 |
| Routing | React Router 7 |
| Styling | Tailwind CSS 3 plus custom CSS in `src/styles/tailwind.css` |
| CMS client | `@sanity/client` and `@sanity/image-url` |
| Visual effects | `three` and `vanta` |
| CMS | Sanity Studio 5 |
| Frontend deployment target | Vercel, with project root set to `modern-website` |
| Studio deployment | Sanity hosted Studio through `sanity deploy` |

<a id="root-repository-layout"></a>
## Repository Layout

```text
.
|-- README.md
|-- modern-website/
|   |-- api/
|   |   `-- newsletters.js
|   |-- src/
|   |   |-- App.tsx
|   |   |-- main.tsx
|   |   |-- assets/
|   |   |-- components/
|   |   |-- content/
|   |   |-- context/
|   |   |-- hooks/
|   |   |-- lib/
|   |   |-- pages/
|   |   `-- styles/
|   |-- package.json
|   |-- vercel.json
|   `-- README.md
`-- sanity-studio/
    |-- schemaTypes/
    |-- scripts/
    |-- sanity.cli.ts
    |-- sanity.config.ts
    |-- package.json
    `-- README.md
```

Important files:

| File | Purpose |
| --- | --- |
| `modern-website/src/main.tsx` | Mounts React, `BrowserRouter`, and `LocaleProvider` |
| `modern-website/src/App.tsx` | Registers all public website routes |
| `modern-website/src/context/LocaleContext.tsx` | Stores `de` or `en` in local storage and sets `document.documentElement.lang` |
| `modern-website/src/lib/sanity.ts` | Browser Sanity client, Sanity image URL builder, and low-level query helper |
| `modern-website/src/content/sanityBlog.ts` | Sanity blog projections, fetches, validation, and mapping into frontend article models |
| `modern-website/src/content/sanityNewsletters.ts` | Newsletter projections, API-first fetching, fallback direct Sanity fetching, and frontend mapping |
| `modern-website/api/newsletters.js` | Vercel serverless endpoint used by newsletter pages |
| `sanity-studio/schemaTypes/index.ts` | Registers all Studio schema types |
| `sanity-studio/scripts/seed-blog.mjs` | Seeds local fallback blog content into Sanity |
| `sanity-studio/scripts/seed-newsletter.mjs` | Seeds the structured newsletter issue currently represented in the repository |
| `sanity-studio/scripts/import-legacy-html.mjs` | Imports a legacy HTML page into Sanity as `legacyHtmlPage` |

<a id="root-runtime-architecture"></a>
## Runtime Architecture

```text
Editors
  |
  v
Sanity Studio (`sanity-studio`)
  |
  v
Sanity project / dataset
  |
  +--> `post` documents
  |      |
  |      +--> browser Sanity client
  |             `modern-website/src/content/sanityBlog.ts`
  |
  +--> `newsletter` documents
  |      |
  |      +--> `/api/newsletters` on Vercel or local Vercel-compatible runtime
  |      |
  |      +--> direct browser Sanity fallback
  |             `modern-website/src/content/sanityNewsletters.ts`
  |
  +--> `legacyHtmlPage` documents
         |
         +--> referenced by newsletters and rendered in an iframe

Visitors
  |
  v
Vite React SPA (`modern-website`)
  |
  +--> local TypeScript content
  +--> Sanity blog content when configured
  +--> Sanity newsletter content when configured
```

The frontend intentionally has two content paths:

- Local content is imported at build time and bundled with the app.
- CMS content is fetched at runtime in the browser or through the Vercel API route.

<a id="root-frontend-app"></a>
## Frontend App

See [`modern-website/README.md`](modern-website/README.md) for frontend-specific details.

### Package Scripts

Run these from `modern-website/`.

| Command | What it does |
| --- | --- |
| `npm run dev` | Starts the Vite dev server |
| `npm run build` | Runs `tsc` and then `vite build` |
| `npm run preview` | Serves the production build locally |
| `npm run type-check` | Runs `tsc --noEmit` |
| `npm run lint` | Runs the current lightweight lint command, which is TypeScript validation plus a success message |
| `npm run format` | Runs Prettier over frontend source files and `index.html` |

### Frontend Boot Sequence

`src/main.tsx` renders the app as:

```text
React.StrictMode
  BrowserRouter
    LocaleProvider
      App
```

The app shell in `src/App.tsx` wraps every route with:

- `ScrollToHash`
- `NavBar`
- `Routes`
- `Footer`

### Locale Behavior

`LocaleProvider` supports only two locales:

- `de`
- `en`

It initializes from `window.localStorage.getItem('locale')`, defaults to `de`, writes the selected locale back to local storage, and updates the root HTML `lang` attribute.

### Sanity Client Behavior

`src/lib/sanity.ts` reads:

- `VITE_SANITY_PROJECT_ID`
- `VITE_SANITY_DATASET`
- `VITE_SANITY_API_VERSION`, defaulting to `2026-03-22`
- `VITE_SANITY_USE_CDN`, enabled unless set exactly to `false`

If project ID or dataset is missing, `isSanityConfigured` is `false` and CMS fetch helpers return `null` or keep local fallback data.

<a id="root-sanity-studio"></a>
## Sanity Studio

See [`sanity-studio/README.md`](sanity-studio/README.md) for Studio-specific details.

### Package Scripts

Run these from `sanity-studio/`.

| Command | What it does |
| --- | --- |
| `npm run dev` | Starts Sanity Studio locally |
| `npm run build` | Builds the Studio |
| `npm run deploy` | Deploys the Studio with Sanity CLI |
| `npm run type-check` | Runs `tsc --noEmit` |
| `npm run seed:blog` | Seeds local frontend blog articles into Sanity |
| `npm run seed:newsletter` | Seeds the current structured newsletter issue |
| `npm run import:legacy-html -- "<url>" "<slug>" "<title>"` | Imports raw legacy HTML into Sanity |

### Registered Schemas

| Schema | Type | Main use |
| --- | --- | --- |
| `author` | document | Blog author records |
| `category` | document | Blog categories |
| `post` | document | Sanity-backed blog posts |
| `blogSection` | object | Structured blog article sections |
| `newsletter` | document | Structured newsletter issues |
| `newsletterCard` | object | Newsletter cards for highlights, retrospectives, and news |
| `newsletterLink` | object | Label and optional URL pairs |
| `newsletterScheduleItem` | object | Munich schedule entries |
| `legacyHtmlPage` | document | Imported raw HTML from older pages or newsletters |
| `siteSettings` | document | Basic site settings; currently seeded but not consumed by the frontend |

### Studio Configuration

`sanity.config.ts` reads:

- `SANITY_STUDIO_PROJECT_ID`, defaulting to `your_project_id`
- `SANITY_STUDIO_DATASET`, defaulting to `production`

`sanity.cli.ts` reads the same project and dataset values and also reads:

- `SANITY_STUDIO_HOSTNAME`, defaulting to `sahaja-yoga-muenchen`

The CLI config includes a deployment `appId`.

<a id="root-content-ownership"></a>
## Content Ownership

| Site area | Current source | Runtime fallback | Notes |
| --- | --- | --- | --- |
| Homepage | React components and local assets | None | Copy and layout changes require code changes |
| Shri Mataji area | React page/component code | None | Multiple `/shri-mataji/*` paths render the same route component |
| Knowledge hubs | `src/content/topicPages.ts` and `src/content/topicPagesEn.ts` | None | Code-owned structured data |
| Knowledge articles | `src/content/knowledgeArticles.ts` | None | Code-owned structured data |
| Blog listing | Sanity `post` documents | `src/content/blogArticles.ts` | Sanity replaces fallback when configured and valid |
| Blog article routes | Sanity `post` documents | `src/content/blogArticles.ts` | Unknown article routes redirect back to `/blog` |
| Newsletter archive | Sanity `newsletter` documents | Empty archive state | No local newsletter fallback exists |
| Newsletter issue routes | Sanity `newsletter` documents | Redirect to archive when unresolved | Can load linked legacy HTML on demand |
| Legacy newsletter HTML | Sanity `legacyHtmlPage` referenced by `newsletter.legacyImport` | Hidden if missing | Raw HTML is stripped of scripts/noscripts before iframe rendering |

<a id="root-environment-variables"></a>
## Environment Variables

### Frontend: `modern-website/.env.local`

Use `modern-website/.env.example` as a starting point.

| Variable | Required | Used by | Purpose |
| --- | --- | --- | --- |
| `VITE_SITE_URL` | No | Not currently read by app code | Canonical site URL placeholder |
| `VITE_SANITY_PROJECT_ID` | Required for CMS content | Browser app and `/api/newsletters` | Sanity project ID |
| `VITE_SANITY_DATASET` | Required for CMS content | Browser app and `/api/newsletters` | Sanity dataset, usually `production` |
| `VITE_SANITY_API_VERSION` | Recommended | Browser app and `/api/newsletters` | Sanity API version; code defaults to `2026-03-22` |
| `VITE_SANITY_USE_CDN` | Optional | Browser app only | Set to `false` to bypass the CDN in browser reads |

The example file also includes optional `VITE_GA_ID` and `VITE_API_URL` placeholders. `VITE_SITE_URL`, `VITE_GA_ID`, and `VITE_API_URL` are not currently used by the checked-in frontend code.

Example:

```bash
VITE_SITE_URL=http://localhost:5173
VITE_SANITY_PROJECT_ID=your_project_id
VITE_SANITY_DATASET=production
VITE_SANITY_API_VERSION=2026-03-22
VITE_SANITY_USE_CDN=true
```

### Studio: `sanity-studio/.env.local`

Use `sanity-studio/.env.example` as a starting point.

| Variable | Required | Used by | Purpose |
| --- | --- | --- | --- |
| `SANITY_STUDIO_PROJECT_ID` | Yes | Studio config, CLI config, seed/import scripts | Sanity project ID |
| `SANITY_STUDIO_DATASET` | Yes | Studio config, CLI config, seed/import scripts | Dataset name |
| `SANITY_STUDIO_HOSTNAME` | Recommended for deploys | CLI config | Sanity hosted Studio hostname; code defaults to `sahaja-yoga-muenchen` |

Example:

```bash
SANITY_STUDIO_PROJECT_ID=your_project_id
SANITY_STUDIO_DATASET=production
SANITY_STUDIO_HOSTNAME=sahaja-yoga-muenchen
```

### Server-Side Environment

`modern-website/api/newsletters.js` runs server-side on Vercel and reads the same `VITE_SANITY_*` names from `process.env`. Configure those variables in the Vercel project environment as well as in local `.env.local`.

<a id="root-local-development"></a>
## Local Development

### 1. Install Dependencies

```bash
cd modern-website
npm install
```

```bash
cd sanity-studio
npm install
```

### 2. Configure Environment Files

Create:

- `modern-website/.env.local`
- `sanity-studio/.env.local`

Use the examples above or copy each app's `.env.example`.

### 3. Start The Public Website

```bash
cd modern-website
npm run dev
```

Default URL:

```text
http://localhost:5173
```

Vite's local dev server does not automatically emulate Vercel serverless functions in all setups. If `/api/newsletters` is unavailable locally, the frontend code falls back to direct browser Sanity reads when Sanity is configured.

### 4. Start The Studio

```bash
cd sanity-studio
npm run dev
```

Default URL:

```text
http://localhost:3333
```

### 5. Sanity CORS

Because the browser can read Sanity directly, the Sanity project must allow the relevant origins:

- `http://localhost:5173`
- the deployed Vercel domain
- any production custom domain

<a id="root-data-flows"></a>
## Data Flows

### Blog List

```text
BlogPage
  |
  +--> load local fallback articles from `blogArticles.ts`
  |
  +--> call `getSanityBlogArticles(locale)`
         |
         +--> return `null` if Sanity is not configured
         +--> query Sanity `post` docs for the active locale
         +--> order by `featured desc, publishedAt desc`
         +--> map valid records into the frontend `BlogArticle` model
         +--> replace local fallback articles when at least one valid Sanity post exists
```

Required Sanity fields for a post to render through the mapper:

- `slug`
- `title`
- `cardTitle`
- `cardDescription`
- `intro`
- `heroImage`
- `heroNote`
- at least one valid `sections[]` item with a title and paragraphs

### Blog Detail

```text
BlogArticleRoute
  |
  +--> resolve local fallback by `location.pathname`
  |
  +--> call `getSanityBlogArticleBundle(locale, location.pathname)`
         |
         +--> strip `/blog/` from pathname to get slug
         +--> fetch matching localized `post`
         +--> fetch referenced related posts
         +--> map all valid records
```

If neither local nor Sanity content resolves, the route redirects to `/blog`.

### Newsletter Archive

```text
NewsletterPage
  |
  +--> call `getSanityNewsletters(locale)`
         |
         +--> in browser, first try `/api/newsletters?locale=<locale>`
         +--> if API fails, query Sanity directly
         +--> query localized newsletters first
         +--> if no localized records exist, query all newsletters
         +--> map valid records into the frontend `Newsletter` model
```

Required fields for a newsletter to render through the mapper:

- `title`
- `slug`
- `issueLabel`
- `introBody`
- `publishedAt`

### Newsletter Detail

```text
NewsletterRoute
  |
  +--> derive slug from route params
  +--> redirect legacy `/newsletter/:slug` paths to `/blog/newsletter/:slug`
  +--> call `getSanityNewsletter(locale, slug)`
         |
         +--> in browser, first try `/api/newsletters?locale=<locale>&slug=<slug>`
         +--> if API fails, query Sanity directly
         +--> query localized issue first
         +--> fall back to matching slug in any locale
```

Legacy import rendering is lazy:

```text
User clicks "show full imported issue"
  |
  +--> `getSanityNewsletterLegacyImport(locale, slug)`
         |
         +--> API request with `includeLegacy=1`
         +--> fallback direct Sanity query
         +--> return `legacyImport->rawHtml`, plain text, and source URL
         +--> render via `LegacyNewsletterFrame`
```

`LegacyNewsletterFrame` removes `<script>` and `<noscript>` blocks from imported HTML, extracts the `<body>` content when present, injects a local CSS wrapper, and renders the result in an iframe using `srcDoc`. It uses `postMessage` from inside the iframe to update the iframe height.

<a id="root-routes"></a>
## Routes

| Route | Component | Content source |
| --- | --- | --- |
| `/` | `HomePage` | Local components and assets |
| `/blog` | `BlogPage` | Local layout, Sanity/local blog data, Sanity newsletter data |
| `/blog/:slug` | `BlogArticleRoute` | Sanity `post` or local fallback |
| `/blog/newsletter` | `NewsletterPage` | Sanity `newsletter` |
| `/blog/newsletter/:slug` | `NewsletterRoute` | Sanity `newsletter`; optional `legacyHtmlPage` |
| `/newsletter` | `NewsletterPage` | Legacy-compatible archive route |
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
| `/:hub/:article` | `KnowledgeArticleRoute` | Local article content |

Route ordering matters: `/blog/newsletter` and `/blog/newsletter/:slug` are registered before `/blog/:slug`.

<a id="root-build-and-deployment"></a>
## Build And Deployment

### Frontend Build

```bash
cd modern-website
npm run build
```

Build output:

```text
modern-website/dist
```

The build command runs TypeScript checking first, then creates the Vite production bundle.

### Frontend Vercel Deployment

`modern-website/vercel.json` defines:

| Setting | Value |
| --- | --- |
| Framework | `vite` |
| Install command | `npm install` |
| Build command | `npm run build` |
| Dev command | `npm run dev` |
| Output directory | `dist` |
| SPA rewrite | Non-API, non-asset, extensionless paths rewrite to `/index.html` |
| API cache | `/api/*` returns `Cache-Control: no-store` |
| Asset cache | `/assets/*` returns long-lived immutable cache headers |
| App route cache | `index.html` and app routes use revalidation-oriented headers |

Set the Vercel project root to:

```text
modern-website
```

Configure `VITE_SANITY_PROJECT_ID`, `VITE_SANITY_DATASET`, and `VITE_SANITY_API_VERSION` in Vercel if newsletters or CMS blog content should work in production.

### Studio Build And Deploy

```bash
cd sanity-studio
npm run build
```

```bash
cd sanity-studio
npm run deploy
```

Studio deployment reads `SANITY_STUDIO_PROJECT_ID`, `SANITY_STUDIO_DATASET`, and `SANITY_STUDIO_HOSTNAME`.

<a id="root-operational-notes"></a>
## Operational Notes

### Seeding Blog Content

```bash
cd sanity-studio
npm run seed:blog
```

This script:

- reads `modern-website/src/content/blogArticles.ts`
- evaluates the local article data after replacing asset imports with absolute file paths
- uploads referenced hero images to Sanity
- creates or replaces `category`, `post`, `author`, and `siteSettings` documents
- patches related post references after creating posts
- removes older legacy ID formats used by previous seed output

It requires a Sanity auth token in:

```text
~/.config/sanity/config.json
```

### Seeding The Current Newsletter

```bash
cd sanity-studio
npm run seed:newsletter
```

This script creates or replaces one structured `newsletter` document with external image URLs and a `legacyImport` reference to:

```text
legacy-html-sahaja-yoga-newsletter-01-2026
```

Run the legacy import first if the referenced document does not already exist.

### Importing Legacy HTML

```bash
cd sanity-studio
npm run import:legacy-html -- "https://example.com/source.html" "example-slug" "Example Title"
```

The script:

- fetches the source URL
- stores the raw HTML in `legacyHtmlPage.rawHtml`
- derives plain text by removing scripts, styles, tags, and common entities
- writes a `legacy-html-<slug>` document
- currently uses `kind: newsletter`, `locale: de`, and `sourceSite: meditationmuenchen.org`

### Authentication Assumption For Scripts

The Studio scripts do not read a `SANITY_AUTH_TOKEN` environment variable. They read the Sanity CLI auth token from `~/.config/sanity/config.json`. Log in with the Sanity CLI before running seed or import scripts.

<a id="root-known-technical-gaps"></a>
## Known Technical Gaps

- The repository has two separate Node apps, not a single workspace.
- There is no automated test suite beyond TypeScript checks.
- `npm run lint` is not ESLint; it currently only validates TypeScript.
- Newsletter content has no local fallback equivalent to `blogArticles.ts`.
- `siteSettings` exists in Sanity and is seeded, but the frontend does not read it.
- Homepage, Shri Mataji, knowledge hubs, and knowledge articles are still code-owned.
- Legacy HTML rendering strips scripts before iframe rendering but does not perform full HTML sanitization.
- The Studio scripts are purpose-built migration utilities, not general import frameworks.
