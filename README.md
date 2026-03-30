# Sahaja Yoga Munich

Bilingual website and Sanity CMS workspace for Sahaja Yoga Munich.

This repository contains the public website, the Sanity Studio that powers editorial content, and the integration layer between both. The frontend is already connected to Sanity for blog posts and newsletters, while several knowledge and homepage areas still live directly in TypeScript.

## Table of Contents

- [Overview](#overview)
- [Repository At A Glance](#repository-at-a-glance)
- [Current Stack](#current-stack)
- [Architecture](#architecture)
- [Content Sources Today](#content-sources-today)
- [Main Routes](#main-routes)
- [Sanity Studio](#sanity-studio)
- [Environment Variables](#environment-variables)
- [Local Development](#local-development)
- [Useful Commands](#useful-commands)
- [Build And Deployment](#build-and-deployment)
- [Editorial Workflow](#editorial-workflow)
- [Known Gaps And Next Steps](#known-gaps-and-next-steps)

## Overview

This project is no longer just a static frontend prototype. It is now a two-app repository with:

- a public React + Vite website in `modern-website`
- a Sanity Studio in `sanity-studio`
- live Sanity-backed blog content
- live Sanity-backed newsletter archive pages
- legacy newsletter HTML import support for older issues

At the same time, a meaningful part of the site still remains code-driven:

- homepage section copy
- Shri Mataji page content
- knowledge hubs
- knowledge article content
- static fallback blog content

That hybrid setup is important to understand: some parts of the editorial experience are already CMS-based, while other parts still require a code change and redeploy.

## Repository At A Glance

| App | Location | Purpose | Default Local URL |
| --- | --- | --- | --- |
| Public website | `modern-website/` | Visitor-facing site built with React, TypeScript, and Vite | `http://localhost:5173` |
| Content studio | `sanity-studio/` | Sanity Studio used to edit blog posts, newsletters, and imported legacy HTML | `http://localhost:3333` |

Important repository locations:

| Path | Role |
| --- | --- |
| `modern-website/src/App.tsx` | Central route registration for the public site |
| `modern-website/src/lib/sanity.ts` | Frontend Sanity client setup |
| `modern-website/src/content/sanityBlog.ts` | Sanity blog queries and mapping |
| `modern-website/src/content/sanityNewsletters.ts` | Sanity newsletter queries and mapping |
| `modern-website/api/newsletters.js` | Server-side newsletter endpoint used by the website |
| `modern-website/src/content/blogArticles.ts` | Local static fallback blog articles |
| `modern-website/src/content/topicPages.ts` | German knowledge hub content |
| `modern-website/src/content/topicPagesEn.ts` | English knowledge hub content |
| `modern-website/src/content/knowledgeArticles.ts` | Knowledge article content |
| `sanity-studio/schemaTypes/` | Sanity schema definitions |
| `sanity-studio/scripts/seed-blog.mjs` | Seeds blog content into Sanity from local TypeScript |
| `sanity-studio/scripts/seed-newsletter.mjs` | Seeds the current structured newsletter issue |
| `sanity-studio/scripts/import-legacy-html.mjs` | Imports raw legacy newsletter HTML into Sanity |

## Current Stack

### Frontend

| Layer | Technology |
| --- | --- |
| UI | React 18 |
| Language | TypeScript |
| Build tool | Vite |
| Routing | React Router |
| Styling | Tailwind CSS |
| Content backend | `@sanity/client` |
| Visual effects | `three` and `vanta` |
| Deployment target | Vercel |

### CMS

| Layer | Technology |
| --- | --- |
| Studio | Sanity Studio 5 |
| Language | TypeScript |
| Runtime | React 19 |
| Plugins | Structure Tool and Vision Tool |

This is not a monorepo workspace with a root package manager setup. Dependencies are installed separately inside each app.

## Architecture

```text
Editors
  |
  v
sanity-studio
  |
  v
Sanity dataset
  | \
  |  \__ legacyHtmlPage imports for archived newsletters
  |
  +--> modern-website/src/content/sanityBlog.ts
  |
  +--> modern-website/src/content/sanityNewsletters.ts
           |
           +--> /api/newsletters on Vercel or local dev
           |
           +--> direct Sanity fallback fetch when API is unavailable

Visitors
  |
  v
modern-website
  |
  +--> local TypeScript content for knowledge + homepage sections
  |
  +--> Sanity blog posts
  |
  +--> Sanity newsletters and imported legacy issues
```

There are two key integration patterns in the frontend today:

1. Blog content is fetched directly from Sanity in the browser when Sanity is configured.
2. Newsletter content prefers the `/api/newsletters` endpoint and falls back to direct Sanity queries when needed.

## Content Sources Today

| Site Area | Primary Source | Fallback | Notes |
| --- | --- | --- | --- |
| Homepage sections | Local React components | None | Text lives directly in components such as intro and session sections |
| Shri Mataji section | Local page/component code | None | Static in the repo |
| Knowledge hubs | `src/content/topicPages.ts` and `src/content/topicPagesEn.ts` | None | Still code-managed |
| Knowledge article routes | `src/content/knowledgeArticles.ts` | None | Still code-managed |
| Blog listing | Sanity `post` documents | Local `blogArticles.ts` | Uses Sanity when configured |
| Blog article routes | Sanity `post` documents | Local `blogArticles.ts` | Local fallback keeps the blog usable without CMS |
| Newsletter archive | Sanity `newsletter` documents | None | Loaded through API first, then direct Sanity fetch |
| Newsletter detail pages | Sanity `newsletter` documents | None | Structured content with optional imported legacy HTML |
| Legacy newsletter embeds | Sanity `legacyHtmlPage` documents | None | Used for older imported issues |

## Main Routes

The public website currently exposes these route families:

| Route | Purpose | Content Source |
| --- | --- | --- |
| `/` | Homepage | Local code content |
| `/blog` | Blog landing page | Local layout + Sanity/local blog data + Sanity newsletters |
| `/blog/:slug` | Individual blog post | Sanity `post` or local fallback |
| `/blog/newsletter` | Newsletter archive landing page | Sanity `newsletter` |
| `/blog/newsletter/:slug` | Newsletter issue detail page | Sanity `newsletter` plus optional legacy import |
| `/newsletter` | Legacy-compatible redirect | Redirects to `/blog/newsletter` |
| `/newsletter/:slug` | Legacy-compatible redirect | Redirects to `/blog/newsletter/:slug` |
| `/shri-mataji` | Shri Mataji section | Local code content |
| `/shri-mataji/*` | Subroutes under the Shri Mataji area | Local code content |
| `/kundalini-energiesystem` | Knowledge hub | Local code content |
| `/selbstverwirklichung-meditation` | Knowledge hub | Local code content |
| `/wissenschaft-spiritualitaet` | Knowledge hub | Local code content |
| `/kultur-des-geistes` | Knowledge hub | Local code content |
| `/:hub/:article` | Knowledge article route | Local code content |

## Sanity Studio

The Sanity Studio already exists in this repository and is not just a future idea.

### Current schemas

| Schema | Purpose |
| --- | --- |
| `post` | Blog article content with sections, hero image, author, category, locale, and related posts |
| `author` | Blog author records |
| `category` | Blog categories |
| `newsletter` | Structured newsletter issues with hero, sections, schedule, links, and archive references |
| `legacyHtmlPage` | Raw imported HTML from the older site, used for archived newsletter issues |
| `siteSettings` | Basic site-level editable settings |

### Current Studio scripts

| Script | What it does |
| --- | --- |
| `npm run seed:blog` | Reads `modern-website/src/content/blogArticles.ts` and seeds blog posts, categories, author, and site settings into Sanity |
| `npm run seed:newsletter` | Seeds the structured newsletter issue currently represented in the repo |
| `npm run import:legacy-html -- "<url>" "<slug>" "<title>"` | Imports a legacy HTML page into `legacyHtmlPage` |

### Important note

`siteSettings` exists in Sanity, but the frontend does not currently read it. That means it is prepared for future use but is not yet part of the live rendering path.

## Environment Variables

### Frontend: `modern-website/.env.local`

Use `modern-website/.env.example` as the starting point.

| Variable | Required | Purpose |
| --- | --- | --- |
| `VITE_SITE_URL` | Recommended | Canonical website URL used for deployment-related configuration |
| `VITE_SANITY_PROJECT_ID` | Required for Sanity features | Sanity project ID |
| `VITE_SANITY_DATASET` | Required for Sanity features | Sanity dataset, usually `production` |
| `VITE_SANITY_API_VERSION` | Recommended | Sanity API version used by the frontend and API route |
| `VITE_SANITY_USE_CDN` | Optional | Enables CDN-backed reads when set to `true` |

Example:

```bash
VITE_SITE_URL=http://localhost:5173
VITE_SANITY_PROJECT_ID=your_project_id
VITE_SANITY_DATASET=production
VITE_SANITY_API_VERSION=2026-03-22
VITE_SANITY_USE_CDN=true
```

### Studio: `sanity-studio/.env.local`

Use `sanity-studio/.env.example` as the starting point.

| Variable | Required | Purpose |
| --- | --- | --- |
| `SANITY_STUDIO_PROJECT_ID` | Yes | Sanity project ID |
| `SANITY_STUDIO_DATASET` | Yes | Dataset name |
| `SANITY_STUDIO_HOSTNAME` | Optional for deploys | Target Studio hostname |

Example:

```bash
SANITY_STUDIO_PROJECT_ID=your_project_id
SANITY_STUDIO_DATASET=production
SANITY_STUDIO_HOSTNAME=sahaja-yoga-muenchen
```

### Server-side note

The newsletter API route in `modern-website/api/newsletters.js` also reads the `VITE_SANITY_*` variables on the server. In practice, those values must be configured in the deployment environment as well, not just in local browser builds.

## Local Development

### 1. Install dependencies

```bash
cd modern-website
npm install

cd ../sanity-studio
npm install
```

### 2. Configure local environment files

Create:

- `modern-website/.env.local`
- `sanity-studio/.env.local`

using the examples shown above.

### 3. Start the public website

```bash
cd modern-website
npm run dev
```

Vite usually starts on:

```text
http://localhost:5173
```

### 4. Start the Sanity Studio

```bash
cd sanity-studio
npm run dev
```

Studio usually starts on:

```text
http://localhost:3333
```

## Useful Commands

### `modern-website`

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Type-check and build the frontend |
| `npm run preview` | Preview the production build locally |
| `npm run type-check` | Run TypeScript without emitting files |
| `npm run lint` | Current lightweight check, implemented as TypeScript validation |
| `npm run format` | Format frontend source files with Prettier |

### `sanity-studio`

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Studio locally |
| `npm run build` | Build the Studio |
| `npm run deploy` | Deploy the Studio |
| `npm run type-check` | Run TypeScript checks |
| `npm run seed:blog` | Seed blog content from the local frontend content file |
| `npm run seed:newsletter` | Seed the current newsletter issue |
| `npm run import:legacy-html -- "<url>" "<slug>" "<title>"` | Import archived HTML into Sanity |

## Build And Deployment

### Frontend

Build locally:

```bash
cd modern-website
npm run build
```

The frontend is configured for Vercel in `modern-website/vercel.json`.

Current Vercel behavior:

- build command: `npm run build`
- install command: `npm install`
- output directory: `dist`
- SPA rewrites route non-asset requests to `index.html`
- `/api/newsletters` is treated as a dynamic endpoint with `Cache-Control: no-store`
- static assets receive long-lived immutable caching

### Studio

Build locally:

```bash
cd sanity-studio
npm run build
```

Deploy:

```bash
cd sanity-studio
npm run deploy
```

## Editorial Workflow

### Blog posts

There are two ways blog content exists today:

- primary live mode: create and publish `post` documents in Sanity
- fallback mode: keep local articles in `modern-website/src/content/blogArticles.ts`

That means the blog still has resilience during local development or in environments where Sanity is not fully configured.

### Newsletter issues

Newsletter issues are intended to be editorially managed through Sanity.

Typical flow:

1. create or update a `newsletter` document in the Studio
2. publish it
3. the frontend archive and issue route pick it up
4. if there is older HTML from the previous site, import it into `legacyHtmlPage`
5. connect that legacy document through the newsletter's `legacyImport` reference

### Legacy migration

The repository already includes the tooling to preserve older newsletter issues without losing their original HTML source. That is useful when a structured editorial model is being introduced gradually rather than replacing older material all at once.

## Known Gaps And Next Steps

The current architecture is solid, but there are still some unfinished areas:

- knowledge hubs are still hardcoded in TypeScript
- knowledge articles are still hardcoded in TypeScript
- several homepage sections are still component-owned text rather than CMS-managed content
- `siteSettings` exists in Sanity but is not consumed by the frontend
- the repository is split into two apps rather than a single root workspace
- newsletter pages depend on Sanity content and do not currently have a local static fallback like the blog does

The cleanest next improvements would be:

1. move selected homepage and knowledge content into Sanity only when the editorial need is real
2. connect `siteSettings` to the live frontend
3. keep the current hybrid approach for stability rather than forcing all content into the CMS at once
