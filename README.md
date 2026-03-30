# Sahaja Yoga Munich

Bilingual website and Sanity CMS workspace for Sahaja Yoga Munich.

This repository currently contains two separate applications:

- `modern-website`: the public React + Vite frontend
- `sanity-studio`: the Sanity Studio used to manage blog and newsletter content

## Current State

The project is no longer "frontend only". Sanity is already part of the repository and is used for editorial content.

What is in place today:

- German and English frontend with a locale switch
- dedicated routes for the homepage, Shri Mataji, knowledge hubs, articles, blog, and newsletter archive
- Sanity-backed blog posts
- Sanity-backed newsletter issues
- legacy newsletter HTML import support for archived issues
- Vercel-compatible API route for newsletter fetching

What is still local in code:

- homepage section copy
- knowledge hub content
- knowledge article content
- static blog fallback content used when Sanity is not configured

## Repository Layout

```text
Sahaja-Yoga-Munich/
├── modern-website/   # Public website (React, TypeScript, Vite)
└── sanity-studio/    # Content studio (Sanity Studio)
```

Important frontend locations:

- `modern-website/src/App.tsx`: route registration
- `modern-website/src/content/blogArticles.ts`: local fallback blog content
- `modern-website/src/content/topicPages.ts`: German topic hub content
- `modern-website/src/content/topicPagesEn.ts`: English topic hub content
- `modern-website/src/content/knowledgeArticles.ts`: knowledge article content
- `modern-website/src/content/sanityBlog.ts`: Sanity blog queries
- `modern-website/src/content/sanityNewsletters.ts`: Sanity newsletter queries
- `modern-website/api/newsletters.js`: server-side newsletter API used by the frontend
- `modern-website/src/lib/sanity.ts`: Sanity client setup

Important studio locations:

- `sanity-studio/sanity.config.ts`: Studio configuration
- `sanity-studio/schemaTypes/`: Sanity schemas
- `sanity-studio/scripts/seed-blog.mjs`: imports local blog content into Sanity
- `sanity-studio/scripts/seed-newsletter.mjs`: seeds the current newsletter issue
- `sanity-studio/scripts/import-legacy-html.mjs`: imports raw legacy HTML into Sanity

## Tech Stack

Frontend:

- React 18
- TypeScript
- Vite
- React Router
- Tailwind CSS
- `@sanity/client`
- `three` + `vanta`
- Vercel deployment config

CMS:

- Sanity Studio 5
- React 19
- TypeScript

## Content Architecture

### Frontend behavior

- `/blog` and `/blog/:slug` use Sanity content when `VITE_SANITY_PROJECT_ID` and `VITE_SANITY_DATASET` are configured.
- If Sanity is unavailable, blog pages fall back to `modern-website/src/content/blogArticles.ts`.
- `/blog/newsletter` and `/blog/newsletter/:slug` load newsletter issues from Sanity.
- Newsletter detail pages can also expose imported legacy HTML through the newsletter archive flow.
- `/newsletter` and `/newsletter/:slug` redirect to the canonical `/blog/newsletter` routes.

### Sanity schemas

The Studio currently defines:

- `post`: blog articles
- `author`: blog author records
- `category`: blog categories
- `newsletter`: structured newsletter issues
- `legacyHtmlPage`: imported newsletter or page HTML from the older website
- `siteSettings`: basic site-wide editable fields

### Current editorial split

Use Sanity for:

- blog posts
- newsletter issues
- archived imported newsletter HTML

Use local TypeScript content for:

- knowledge hubs
- knowledge article pages
- several homepage and section-level texts

## Getting Started

### Prerequisites

- recent Node.js LTS
- npm
- optional: Sanity account and CLI login if you want to seed or deploy Studio content

This repository is not configured as a root workspace. Install dependencies separately in each app.

### 1. Install dependencies

```bash
cd modern-website
npm install

cd ../sanity-studio
npm install
```

### 2. Configure environment variables

Frontend example: `modern-website/.env.example`

Create `modern-website/.env.local`:

```bash
VITE_SITE_URL=http://localhost:5173
VITE_SANITY_PROJECT_ID=your_project_id
VITE_SANITY_DATASET=production
VITE_SANITY_API_VERSION=2026-03-22
VITE_SANITY_USE_CDN=true
```

Studio example: `sanity-studio/.env.example`

Create `sanity-studio/.env.local`:

```bash
SANITY_STUDIO_PROJECT_ID=your_project_id
SANITY_STUDIO_DATASET=production
SANITY_STUDIO_HOSTNAME=sahaja-yoga-muenchen
```

Notes:

- the frontend can run without Sanity, but the blog will fall back to local static content
- the newsletter archive depends on Sanity content
- the Vercel API route in `modern-website/api/newsletters.js` also reads the `VITE_SANITY_*` variables on the server

### 3. Run the apps locally

Frontend:

```bash
cd modern-website
npm run dev
```

Default URL:

```text
http://localhost:5173
```

Studio:

```bash
cd sanity-studio
npm run dev
```

Default URL:

```text
http://localhost:3333
```

## Useful Commands

### `modern-website`

```bash
npm run dev
npm run build
npm run preview
npm run type-check
npm run lint
npm run format
```

### `sanity-studio`

```bash
npm run dev
npm run build
npm run deploy
npm run type-check
npm run seed:blog
npm run seed:newsletter
npm run import:legacy-html -- "<source_url>" "<slug>" "<title>"
```

## Sanity Seeding And Import

### Seed blog content

`npm run seed:blog` reads the local fallback blog content from `modern-website/src/content/blogArticles.ts` and creates:

- author
- categories
- posts
- site settings

### Seed newsletter content

`npm run seed:newsletter` creates the structured newsletter issue currently represented in the repo.

### Import legacy HTML

`npm run import:legacy-html -- "<source_url>" "<slug>" "<title>"` fetches raw HTML from the old site and stores it as a `legacyHtmlPage` document that can be linked from a newsletter issue.

### Authentication requirement

The seed and import scripts expect a Sanity auth token in:

```text
~/.config/sanity/config.json
```

Run `sanity login` first if you want to use those scripts.

## Deployment

The public website is configured for Vercel in `modern-website/vercel.json`.

Current Vercel behavior:

- build command: `npm run build`
- output directory: `dist`
- SPA rewrites route non-asset requests to `index.html`
- `/api/newsletters` is treated as a server endpoint with `Cache-Control: no-store`
- static assets receive long-lived immutable caching

Recommended deployment setup:

- deploy `modern-website` as the frontend project
- configure `VITE_SITE_URL`
- configure the same `VITE_SANITY_*` values in the Vercel environment
- build and deploy `sanity-studio` separately when Studio hosting is needed

## Key Routes

- `/`: homepage
- `/blog`: blog landing page
- `/blog/:slug`: blog article route
- `/blog/newsletter`: newsletter archive
- `/blog/newsletter/:slug`: newsletter issue
- `/shri-mataji`: Shri Mataji section
- `/:hub/:article`: knowledge article route

## Known Limits

- knowledge hubs are still code-driven rather than CMS-driven
- site settings exist in Studio, but the frontend does not currently read them
- the repo has two separate apps instead of a single workspace
- newsletter content is Sanity-based, so a missing Sanity configuration leaves that area empty
