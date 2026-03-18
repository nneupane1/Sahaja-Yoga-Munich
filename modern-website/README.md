# Sahaja Yoga München Website

A bilingual React + TypeScript + Vite website for Sahaja Yoga München, with a custom visual system, dedicated knowledge pages, a dedicated blog area, and a structure that can later be connected to Sanity for content management.

## Table of Contents

- [Overview](#overview)
- [Current Stack](#current-stack)
- [Project Structure](#project-structure)
- [Main Routes](#main-routes)
- [Blog Architecture](#blog-architecture)
- [How Content Works Today](#how-content-works-today)
- [What Sanity Means In This Project](#what-sanity-means-in-this-project)
- [Why Sanity Helps The Blog](#why-sanity-helps-the-blog)
- [Sanity In 10 Steps](#sanity-in-10-steps)
- [Recommended Sanity Schemas](#recommended-sanity-schemas)
- [Local Development](#local-development)
- [Build](#build)
- [Notes For The Next Integration Pass](#notes-for-the-next-integration-pass)

## Overview

This project is the live frontend for the Sahaja Yoga München website.

It currently includes:

- a German/English language switch
- a custom homepage with layered hero sections
- a dedicated `Shri Mataji` page
- dedicated knowledge hubs and article pages
- a dedicated `Blog` page and dedicated blog article routes
- a visual system built around sky-blue backgrounds and warm reddish-orange card accents

The site is currently content-driven through local TypeScript files. It is not yet connected to Sanity, but it is now structured in a way that makes that next step straightforward.

## Current Stack

- `React 18`
- `TypeScript`
- `Vite`
- `React Router`
- `Tailwind CSS`
- `Vanta` / `three` for some animated background effects

This is not a Next.js project. It is a Vite-based React app.

## Project Structure

Key folders and files:

- `src/components/`
  Reusable page sections and layout components.
- `src/pages/`
  Route-level pages such as the homepage, `Shri Mataji`, `Blog`, and blog article routes.
- `src/content/`
  Static structured content for knowledge pages and blog articles.
- `src/context/LocaleContext.tsx`
  German/English locale state.
- `src/styles/tailwind.css`
  Tailwind entry file plus shared custom classes and hover effects.
- `src/components/NavBar.tsx`
  Main navigation, dropdowns, brand area, and locale switch.
- `src/App.tsx`
  Main route registration.

## Main Routes

Important routes currently in the site:

- `/`
  Homepage
- `/shri-mataji`
  Dedicated Shri Mataji page
- `/kundalini-energiesystem`
  Knowledge hub
- `/selbstverwirklichung-meditation`
  Knowledge hub
- `/wissenschaft-spiritualitaet`
  Knowledge hub
- `/kultur-des-geistes`
  Knowledge hub
- `/blog`
  Dedicated blog landing page
- `/blog/meditation-im-alltag`
  Dedicated blog article
- `/blog/stille-und-aufmerksamkeit`
  Dedicated blog article
- `/blog/kollektive-meditation`
  Dedicated blog article

## Blog Architecture

The blog is now a real section of the website, not just a navigation link or a placeholder area.

Current blog implementation:

- `src/pages/BlogPage.tsx`
  The blog landing page with hero, featured entry, article cards, and topic directions.
- `src/pages/BlogArticleRoute.tsx`
  The route for individual blog articles.
- `src/content/blogArticles.ts`
  The current static blog content source.
- `src/components/BlogSection.tsx`
  The homepage preview section that points into the main blog area.

This means the blog now behaves more like the other primary sections in the site:

- it has a dedicated top-level route
- it has internal article pages
- it uses its own content model
- it can be cleanly replaced with CMS-driven data later

## How Content Works Today

Right now, the website content is stored locally in the repo.

Examples:

- blog articles live in `src/content/blogArticles.ts`
- knowledge pages live in `src/content/topicPages.ts`, `src/content/topicPagesEn.ts`, and `src/content/knowledgeArticles.ts`
- homepage section text is stored directly inside section components such as `src/components/IntroSection.tsx` and `src/components/SessionsSection.tsx`

This is fine while the site is being shaped, but it means content edits currently require code changes and a new deploy.

## What Sanity Means In This Project

In this project, `Sanity` would be the content backend.

That means:

- this React app remains the frontend that visitors see
- Sanity becomes the editor interface where content is created and updated
- the frontend fetches that content from Sanity instead of hardcoding it in TypeScript files

So, in practical terms:

- the `website` stays here
- the `content editing dashboard` moves into Sanity Studio
- editors can publish new content without changing frontend code

For this specific project, Sanity would be useful for:

- blog posts
- featured homepage announcements
- session updates or special programmes
- author profiles
- multilingual content
- reusable page sections

## Why Sanity Helps The Blog

The blog is the best first place to use Sanity.

Without Sanity:

- every new post requires editing code
- each article must be added manually into `src/content/blogArticles.ts`
- routing, text, image references, and metadata all stay developer-owned

With Sanity:

- you create new blog posts in an editor UI
- you can draft before publishing
- you can manage title, slug, excerpt, body, hero image, publish date, locale, and category cleanly
- the frontend can automatically list posts on `/blog`
- each post can render at `/blog/:slug`

In other words, Sanity is especially helpful for the blog because the blog is the part of the site that is most likely to change regularly.

## Sanity In 10 Steps

If you are completely new to Sanity, this is the simplest path for this repo.

### 1. Create a Sanity account

Go to `https://www.sanity.io/` and create an account.

### 2. Create a separate Studio folder

Keep the Sanity Studio separate from the frontend app.

Recommended structure:

```text
Sahaja-Yoga-Munich/
  modern-website/
  sanity-studio/
```

### 3. Initialize Sanity Studio

From the parent project folder, run:

```bash
npm create sanity@latest -- --dataset production --template clean --typescript --output-path sanity-studio
```

This follows the current Sanity installation approach from the official docs.

### 4. Start the Studio

```bash
cd sanity-studio
npm install
npm run dev
```

Then open the Studio in the browser, usually on:

```text
http://localhost:3333
```

### 5. Create your first content schemas

Start with these:

- `post`
- `author`
- `category`
- `siteSettings`

If you want to manage events later, also add:

- `event`

### 6. Define the `post` fields

At minimum, a blog post should have:

- `title`
- `slug`
- `excerpt`
- `heroImage`
- `publishedAt`
- `body`
- `author`
- `category`
- `locale`
- `featured`

### 7. Add sample blog content in Sanity

Create 2 to 3 posts manually in the Studio and publish them.

This gives you real test data before touching the frontend integration.

### 8. Install the Sanity client in this frontend

In `modern-website`:

```bash
npm install @sanity/client
```

Then create a small client file, for example:

```text
src/lib/sanity.ts
```

### 9. Add your Sanity environment variables

For Vite, use:

```bash
VITE_SANITY_PROJECT_ID=your_project_id
VITE_SANITY_DATASET=production
```

These usually go into a local `.env` file.

### 10. Replace static blog content with fetched Sanity content

Update the current blog implementation so that:

- `/blog` fetches all blog posts from Sanity
- `/blog/:slug` fetches one post by slug
- `src/content/blogArticles.ts` becomes unnecessary for live blog content

At that point, the blog becomes fully editor-driven.

## Recommended Sanity Schemas

For this website, I recommend this minimum schema model.

### `post`

Use for blog articles.

Suggested fields:

- `title`
- `slug`
- `excerpt`
- `heroImage`
- `body`
- `publishedAt`
- `author`
- `category`
- `locale`
- `featured`

### `author`

Use for blog bylines and future editorial attribution.

Suggested fields:

- `name`
- `slug`
- `image`
- `bio`

### `category`

Use for grouping blog posts.

Suggested categories:

- Meditation
- Kundalini
- Science
- Practice
- Community

### `event`

Use later if you want editors to manage:

- special meditation evenings
- workshops
- retreats
- local Munich announcements

Suggested fields:

- `title`
- `slug`
- `startDate`
- `endDate`
- `location`
- `summary`
- `body`
- `locale`

### `siteSettings`

Use for global editable content, such as:

- contact email
- phone number
- address
- recurring notes
- footer text

## Local Development

```bash
npm install
npm run dev
```

Vite runs locally at:

```text
http://localhost:5173
```

## Build

```bash
npm run build
```

## Notes For The Next Integration Pass

The cleanest next step is:

1. create `sanity-studio`
2. define the `post`, `author`, `category`, and `siteSettings` schemas
3. connect `/blog` and `/blog/:slug` to Sanity first
4. only after that, decide whether homepage sections and events should also move into Sanity

That order keeps risk low and gives the project an immediate editorial benefit.

## Official References

Sanity official docs used for the current guidance:

- `https://www.sanity.io/docs/studio/installation`
- `https://www.sanity.io/docs/sanity-studio-quickstart/setting-up-your-studio`
- `https://www.sanity.io/docs/apis-and-sdks/js-client-getting-started`
