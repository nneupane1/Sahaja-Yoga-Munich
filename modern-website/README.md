# Sahaja Yoga München Website

A bilingual React + TypeScript + Vite website for Sahaja Yoga München, with a custom visual system, dedicated knowledge pages, a blog area, a newsletter archive, and a live integration path into Sanity.

This README focuses on the frontend app. For the full repository overview, including the Studio workspace, see the root [`README.md`](../README.md).

## Table of Contents

- [Overview](#overview)
- [Current Stack](#current-stack)
- [Project Structure](#project-structure)
- [Architecture](#architecture)
- [Main Routes](#main-routes)
- [How Content Works Today](#how-content-works-today)
- [Blog And Newsletter Architecture](#blog-and-newsletter-architecture)
- [Sanity In This Frontend](#sanity-in-this-frontend)
- [Environment Variables](#environment-variables)
- [Local Development](#local-development)
- [Build And Preview](#build-and-preview)
- [Deployment Notes](#deployment-notes)
- [Notes For The Next Integration Pass](#notes-for-the-next-integration-pass)

## Overview

This project is the live public frontend for the Sahaja Yoga München website.

It currently includes:

- a German/English language switch
- a custom homepage with layered hero sections
- a dedicated Shri Mataji area
- dedicated knowledge hubs and article pages
- a dedicated blog landing page
- dedicated blog article routes
- a newsletter archive and newsletter detail pages
- a visual system built around sky-blue gradients and warm reddish-orange accents

The frontend is no longer only "prepared" for Sanity. It already consumes Sanity content for:

- blog posts
- newsletter archive pages
- newsletter issue detail pages
- imported legacy newsletter HTML

Other site areas are still driven by local TypeScript content and React components.

## Current Stack

| Layer | Technology |
| --- | --- |
| UI | React 18 |
| Language | TypeScript |
| Build tool | Vite |
| Routing | React Router |
| Styling | Tailwind CSS |
| CMS integration | `@sanity/client`, `@sanity/image-url` |
| Motion / visuals | `three`, `vanta` |
| Deployment target | Vercel |

This is not a Next.js app. It is a Vite-based React frontend.

## Project Structure

Key frontend folders and files:

| Path | Purpose |
| --- | --- |
| `src/components/` | Reusable sections, layout blocks, newsletter helpers, and UI pieces |
| `src/pages/` | Route-level page components |
| `src/content/` | Local structured content plus Sanity mapping/query modules |
| `src/context/LocaleContext.tsx` | German/English locale state |
| `src/lib/sanity.ts` | Sanity client setup and image helpers |
| `src/styles/tailwind.css` | Tailwind entry file plus shared custom utility styling |
| `src/App.tsx` | Main route registration |
| `api/newsletters.js` | Server endpoint for newsletter fetching |
| `vercel.json` | Vercel build, header, caching, and SPA rewrite configuration |

### Content-related files

| Path | Role |
| --- | --- |
| `src/content/blogArticles.ts` | Static fallback blog content |
| `src/content/sanityBlog.ts` | Sanity-backed blog query layer |
| `src/content/sanityNewsletters.ts` | Sanity-backed newsletter query layer |
| `src/content/topicPages.ts` | German knowledge hub content |
| `src/content/topicPagesEn.ts` | English knowledge hub content |
| `src/content/knowledgeArticles.ts` | Knowledge article content |

## Architecture

```text
modern-website
  |
  +--> local TypeScript content
  |      - knowledge hubs
  |      - knowledge articles
  |      - several homepage sections
  |      - static fallback blog posts
  |
  +--> Sanity client integration
  |      - blog listing and article routes
  |      - newsletter content mapping
  |
  +--> /api/newsletters
         - preferred newsletter fetch path in browser
         - server-side access to Sanity
         - fallback to direct Sanity fetch when needed
```

That means the frontend is intentionally hybrid:

- stable static content remains local where that is simplest
- editorially active sections are already Sanity-backed

## Main Routes

Important route families currently registered in the app:

| Route | Purpose | Source |
| --- | --- | --- |
| `/` | Homepage | Local component content |
| `/blog` | Blog and newsletter editorial landing page | Mixed local layout + Sanity/local data |
| `/blog/:slug` | Individual blog article | Sanity `post` or local fallback |
| `/blog/newsletter` | Newsletter archive page | Sanity `newsletter` |
| `/blog/newsletter/:slug` | Individual newsletter issue | Sanity `newsletter` with optional legacy HTML import |
| `/newsletter` | Legacy path | Redirect target for newsletter archive |
| `/newsletter/:slug` | Legacy path | Redirect target for newsletter issue |
| `/shri-mataji` | Shri Mataji page | Local code content |
| `/shri-mataji/biografie` | Shri Mataji section route | Local code content |
| `/shri-mataji/geistige-arbeit` | Shri Mataji section route | Local code content |
| `/shri-mataji/oeffentliche-programme` | Shri Mataji section route | Local code content |
| `/shri-mataji/zeitleiste` | Shri Mataji section route | Local code content |
| `/shri-mataji/vermaechtnis` | Shri Mataji section route | Local code content |
| `/kundalini-energiesystem` | Knowledge hub | Local content |
| `/selbstverwirklichung-meditation` | Knowledge hub | Local content |
| `/wissenschaft-spiritualitaet` | Knowledge hub | Local content |
| `/kultur-des-geistes` | Knowledge hub | Local content |
| `/:hub/:article` | Knowledge article route | Local content |

## How Content Works Today

The site uses a split content model.

### Local TypeScript content

These areas are still maintained directly in the repo:

| Area | Main Source |
| --- | --- |
| Knowledge hubs | `src/content/topicPages.ts`, `src/content/topicPagesEn.ts` |
| Knowledge articles | `src/content/knowledgeArticles.ts` |
| Several homepage sections | Individual components such as intro and sessions sections |
| Static blog fallback | `src/content/blogArticles.ts` |

This is still useful because it keeps the app stable even when CMS configuration is incomplete.

### Sanity-backed content

These areas already depend on Sanity:

| Area | Main Source |
| --- | --- |
| Blog listing | Sanity `post` documents |
| Blog article routes | Sanity `post` documents |
| Newsletter archive | Sanity `newsletter` documents |
| Newsletter issue detail pages | Sanity `newsletter` documents |
| Legacy imported newsletter view | Sanity `legacyHtmlPage` documents referenced from newsletters |

## Blog And Newsletter Architecture

### Blog

The blog is a real website section with:

- a dedicated landing page at `/blog`
- dedicated article routes at `/blog/:slug`
- local fallback content when Sanity is unavailable
- a preview section connected to the homepage

Current blog implementation centers on:

| File | Role |
| --- | --- |
| `src/pages/BlogPage.tsx` | Main editorial landing page |
| `src/pages/BlogArticleRoute.tsx` | Individual article route |
| `src/content/blogArticles.ts` | Local fallback article model |
| `src/content/sanityBlog.ts` | Sanity query + mapping layer |
| `src/components/BlogSection.tsx` | Homepage preview section |

### Newsletter

The newsletter is also a first-class section now, not a placeholder link or detached archive.

Current newsletter implementation centers on:

| File | Role |
| --- | --- |
| `src/pages/NewsletterPage.tsx` | Archive landing page |
| `src/pages/NewsletterRoute.tsx` | Individual issue page |
| `src/content/sanityNewsletters.ts` | Newsletter query + mapping layer |
| `src/components/LegacyNewsletterFrame.tsx` | Render path for imported legacy HTML |
| `api/newsletters.js` | Server-side newsletter endpoint |

This gives the site a more coherent editorial structure:

- the blog and newsletter live in the same editorial area
- the latest newsletter can be surfaced prominently on `/blog`
- archived issues remain directly addressable
- older HTML newsletters can still be preserved instead of discarded

## Sanity In This Frontend

Sanity already plays two different roles here.

### 1. Direct frontend fetching

Blog content is fetched directly through the Sanity client when the app is configured with:

- `VITE_SANITY_PROJECT_ID`
- `VITE_SANITY_DATASET`

If Sanity is not configured, the blog falls back to local static content.

### 2. API-first newsletter fetching

Newsletter content uses an API-first flow:

1. the browser requests `/api/newsletters`
2. that endpoint fetches the relevant `newsletter` documents from Sanity
3. if the API route is unavailable, the frontend falls back to direct Sanity fetches
4. newsletter pages can optionally load linked `legacyHtmlPage` imports

That API-first structure is useful because newsletters have a more complex retrieval path than the blog and can include archive-specific data.

## Environment Variables

Copy `.env.example` to `.env.local`.

| Variable | Required | Purpose |
| --- | --- | --- |
| `VITE_SITE_URL` | Recommended | Site URL for deployment-related configuration |
| `VITE_SANITY_PROJECT_ID` | Required for Sanity features | Sanity project ID |
| `VITE_SANITY_DATASET` | Required for Sanity features | Sanity dataset |
| `VITE_SANITY_API_VERSION` | Recommended | Sanity API version |
| `VITE_SANITY_USE_CDN` | Optional | Enables Sanity CDN reads unless set to `false` |

Example:

```bash
VITE_SITE_URL=http://localhost:5173
VITE_SANITY_PROJECT_ID=your_project_id
VITE_SANITY_DATASET=production
VITE_SANITY_API_VERSION=2026-03-22
VITE_SANITY_USE_CDN=true
```

Important note:

- the Vercel newsletter API route also needs the Sanity variables in the deployment environment

## Local Development

Install dependencies:

```bash
npm install
```

Start the app:

```bash
npm run dev
```

Vite runs locally at:

```text
http://localhost:5173
```

Useful local commands:

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start local development |
| `npm run build` | Type-check and build |
| `npm run preview` | Preview production build |
| `npm run type-check` | Run TypeScript checks |
| `npm run lint` | Current lint shortcut, implemented as type-checking |
| `npm run format` | Format source files with Prettier |

## Build And Preview

Create a production build:

```bash
npm run build
```

Preview the built output locally:

```bash
npm run preview
```

## Deployment Notes

The app is configured for Vercel through `vercel.json`.

Current deployment behavior:

| Concern | Current behavior |
| --- | --- |
| Framework | Vite |
| Install command | `npm install` |
| Build command | `npm run build` |
| Output directory | `dist` |
| SPA routing | Non-asset requests rewrite to `index.html` |
| Newsletter API | `/api/newsletters` served as a dynamic endpoint |
| Static asset caching | Long-lived immutable caching |
| HTML / route caching | Revalidation-oriented headers for app routes |

If you deploy this frontend separately, make sure the deployment environment includes the same Sanity values used locally.

## Notes For The Next Integration Pass

The strongest next improvements would be:

1. keep the current blog/newsletter Sanity integration and avoid rewriting it unnecessarily
2. connect `siteSettings` from the Studio into the frontend where it is genuinely useful
3. move only the most editorially active homepage or knowledge sections into Sanity, rather than forcing a full CMS migration all at once
4. preserve the current local fallback approach for the blog because it keeps local development and partial configuration simpler

In other words, the app is past the "should we add Sanity?" stage. The better question now is which remaining static sections are worth moving into Sanity next, and which should stay code-owned for stability.
