# Sahaja Yoga Munich Sanity Studio

Technical guide for the Sanity Studio in `sanity-studio/`.

This app defines the CMS schema for the public website and includes migration/seed scripts for blog posts, newsletters, and imported legacy HTML.

For the full repository overview, see the root [`README.md`](../README.md).

## Contents

- [Stack](#stack)
- [Configuration](#configuration)
- [Project Structure](#project-structure)
- [Schemas](#schemas)
- [Environment Variables](#environment-variables)
- [Local Development](#local-development)
- [Scripts](#scripts)
- [Seed And Import Details](#seed-and-import-details)
- [Frontend Integration Contract](#frontend-integration-contract)
- [Operational Notes](#operational-notes)

## Stack

| Layer | Package / tool |
| --- | --- |
| Studio | Sanity Studio 5 |
| Runtime | React 19 |
| Language | TypeScript |
| Plugins | Structure Tool, Vision Tool |
| Styling runtime | `styled-components` |
| Content API client in scripts | `@sanity/client` |

## Configuration

`sanity.config.ts` configures the Studio UI:

| Setting | Source |
| --- | --- |
| `name` | `default` |
| `title` | `Sahaja Yoga Munich Studio` |
| `projectId` | `SANITY_STUDIO_PROJECT_ID` or `your_project_id` |
| `dataset` | `SANITY_STUDIO_DATASET` or `production` |
| `plugins` | `structureTool()`, `visionTool()` |
| `schema.types` | `schemaTypes` from `schemaTypes/index.ts` |

`sanity.cli.ts` configures CLI behavior:

| Setting | Source |
| --- | --- |
| `api.projectId` | `SANITY_STUDIO_PROJECT_ID` or `your_project_id` |
| `api.dataset` | `SANITY_STUDIO_DATASET` or `production` |
| `studioHost` | `SANITY_STUDIO_HOSTNAME` or `sahaja-yoga-muenchen` |
| `deployment.appId` | Checked-in app ID |

## Project Structure

```text
sanity-studio/
|-- README.md
|-- package.json
|-- sanity.cli.ts
|-- sanity.config.ts
|-- schemaTypes/
|   |-- authorType.ts
|   |-- categoryType.ts
|   |-- index.ts
|   |-- legacyHtmlPageType.ts
|   |-- newsletterType.ts
|   |-- postType.ts
|   `-- siteSettingsType.ts
|-- scripts/
|   |-- import-legacy-html.mjs
|   |-- seed-blog.mjs
|   `-- seed-newsletter.mjs
`-- tsconfig.json
```

## Schemas

All schema types are registered in `schemaTypes/index.ts`.

### `author`

Document type for blog author records.

Fields:

| Field | Type | Required | Notes |
| --- | --- | --- | --- |
| `name` | `string` | Yes | Display name |
| `slug` | `slug` | Yes | Generated from `name`, max length 96 |
| `image` | `image` | No | Hotspot enabled, optional `alt` field |
| `bio` | `array` of `block` | No | Portable text bio |

### `category`

Document type for blog categories.

Fields:

| Field | Type | Required | Notes |
| --- | --- | --- | --- |
| `title` | `string` | Yes | Display title |
| `slug` | `slug` | Yes | Generated from `title`, max length 96 |
| `description` | `text` | No | Short category description |

### `blogSection`

Object type embedded in `post.sections`.

Fields:

| Field | Type | Required | Notes |
| --- | --- | --- | --- |
| `title` | `string` | Yes | Section heading |
| `paragraphs` | `array` of `text` | Yes | At least one paragraph |
| `points` | `array` of `string` | No | Optional point/chip list |

### `post`

Document type for Sanity-backed blog articles.

Fields:

| Field | Type | Required | Notes |
| --- | --- | --- | --- |
| `title` | `string` | Yes | Full article title |
| `slug` | `slug` | Yes | URL slug, generated from title |
| `locale` | `string` | Yes | `de` or `en`, default `de` |
| `publishedAt` | `datetime` | Yes | Defaults to current date/time |
| `featured` | `boolean` | No | Listing sort priority, default `false` |
| `category` | `reference` to `category` | No | Frontend displays category title |
| `author` | `reference` to `author` | No | Editorial attribution |
| `eyebrow` | `string` | No | Small heading above article title |
| `cardTitle` | `string` | Yes | Listing card title |
| `cardDescription` | `text` | Yes | Listing card summary |
| `intro` | `text` | Yes | Article intro |
| `heroImage` | `image` | Yes | Hotspot enabled, required `alt` |
| `heroNote` | `text` | Yes | Note beside hero image |
| `sections` | `array` of `blogSection` | Yes | At least one section |
| `related` | `array` of references to `post` | No | Related article links |

Ordering:

- `publishedAtDesc`: newest first

Frontend rendering requires the fields marked required above and at least one valid section. A malformed document can exist in Sanity but be dropped by the frontend mapper.

### `newsletterLink`

Object type for newsletter links.

Fields:

| Field | Type | Required | Notes |
| --- | --- | --- | --- |
| `label` | `string` | Yes | Display label |
| `url` | `url` | No | Optional external target |

### `newsletterCard`

Object type used in newsletter sections such as featured cards, retrospectives, and news.

Fields:

| Field | Type | Required | Notes |
| --- | --- | --- | --- |
| `eyebrow` | `string` | No | Small label |
| `title` | `string` | Yes | Card heading |
| `subtitle` | `string` | No | Secondary heading |
| `body` | `text` | Yes | Main card text |
| `points` | `array` of `string` | No | Optional bullet-style lines |
| `image` | `image` | No | Hotspot enabled, optional `alt` |
| `imageUrl` | `url` | No | External image URL fallback |
| `links` | `array` of `newsletterLink` | No | Optional actions/supporting links |

The frontend accepts either uploaded Sanity images or external image URLs.

### `newsletterScheduleItem`

Object type for local schedule entries.

Fields:

| Field | Type | Required | Notes |
| --- | --- | --- | --- |
| `day` | `string` | Yes | Day or title |
| `time` | `string` | No | Time label |
| `description` | `text` | Yes | Schedule description |
| `contact` | `string` | No | Contact detail |

### `newsletter`

Document type for structured newsletter issues.

Groups:

- `overview`
- `intro`
- `highlights`
- `schedule`
- `regional`
- `stories`
- `links`
- `archive`

Core fields:

| Field | Type | Required | Notes |
| --- | --- | --- | --- |
| `title` | `string` | Yes | Issue title |
| `slug` | `slug` | Yes | Used in `/blog/newsletter/:slug` |
| `locale` | `string` | Yes | `de` or `en`, default `de` |
| `issueLabel` | `string` | Yes | Example: `01-2026` |
| `publishedAt` | `datetime` | Yes | Used for archive sorting |
| `introBody` | `text` | Yes | Required by frontend mapper |

Optional content fields:

| Field | Type | Notes |
| --- | --- | --- |
| `heroEyebrow` | `string` | Small label above issue title |
| `introTitle` | `string` | Greeting/opening heading |
| `closing` | `string` | Sign-off line |
| `heroImage` | `image` | Uploaded hero image with optional alt |
| `heroImageUrl` | `url` | External hero image URL fallback |
| `featuredHeading` | `string` | Heading for highlight cards |
| `featuredCards` | `array` of `newsletterCard` | Event or feature highlights |
| `scheduleHeading` | `string` | Heading for schedule section |
| `scheduleNote` | `text` | Intro note above schedule |
| `munichSchedule` | `array` of `newsletterScheduleItem` | Local schedule entries |
| `regionalHeading` | `string` | Heading for region links |
| `regionalIntro` | `text` | Intro text for region links |
| `regionalLinks` | `array` of `newsletterLink` | City/region links |
| `retrospectiveHeading` | `string` | Heading for retrospectives |
| `retrospectiveCards` | `array` of `newsletterCard` | Event reports |
| `newsHeading` | `string` | Heading for news |
| `newsCards` | `array` of `newsletterCard` | News/announcement cards |
| `recommendedHeading` | `string` | Heading for recommended links |
| `recommendedLinks` | `array` of `newsletterLink` | External resource links |
| `donationHeading` | `string` | Donation section heading |
| `donationBody` | `text` | Donation explanation |
| `donationDetails` | `array` of `string` | Donation detail lines |
| `contactHeading` | `string` | Contact section heading |
| `contactDetails` | `array` of `string` | Contact detail lines |
| `footerNote` | `string` | Final issue note |
| `footerLinks` | `array` of `newsletterLink` | Footer links |
| `sourceUrl` | `url` | Original source URL |
| `legacyImport` | `reference` to `legacyHtmlPage` | Optional archived raw HTML |

Ordering:

- `publishedAtDesc`: newest first

Frontend rendering requires `title`, `slug`, `issueLabel`, `introBody`, and `publishedAt`.

### `legacyHtmlPage`

Document type for imported legacy HTML pages.

Fields:

| Field | Type | Required | Notes |
| --- | --- | --- | --- |
| `title` | `string` | Yes | Page title |
| `slug` | `slug` | Yes | Generated from title or supplied by import script |
| `kind` | `string` | Yes | `newsletter`, `page`, or `article`; default `page` |
| `locale` | `string` | Yes | `de` or `en`, default `de` |
| `sourceSite` | `string` | Yes | Origin site label |
| `sourceUrl` | `url` | Yes | Original URL |
| `issueLabel` | `string` | No | Optional newsletter issue label |
| `importedAt` | `datetime` | Yes | Defaults to current date/time |
| `plainText` | `text` | No | Extracted readable text |
| `rawHtml` | `text` | Yes | Verbatim imported HTML |

Ordering:

- `importedAtDesc`: newest first

### `siteSettings`

Document type for basic site-level settings.

Fields:

| Field | Type | Notes |
| --- | --- | --- |
| `title` | `string` | Site title |
| `description` | `text` | Site description |
| `blogIntroDe` | `text` | German blog intro |
| `blogIntroEn` | `text` | English blog intro |

The seed script creates this document, but the frontend does not currently read it.

## Environment Variables

Create `sanity-studio/.env.local`.

```bash
SANITY_STUDIO_PROJECT_ID=your_project_id
SANITY_STUDIO_DATASET=production
SANITY_STUDIO_HOSTNAME=sahaja-yoga-muenchen
```

| Variable | Required | Used by |
| --- | --- | --- |
| `SANITY_STUDIO_PROJECT_ID` | Yes | Studio config, CLI config, seed/import scripts |
| `SANITY_STUDIO_DATASET` | Yes | Studio config, CLI config, seed/import scripts |
| `SANITY_STUDIO_HOSTNAME` | Recommended | Studio deploy target |

The seed/import scripts also require the Sanity CLI auth token at:

```text
~/.config/sanity/config.json
```

They do not currently read a separate `SANITY_AUTH_TOKEN` environment variable.

## Local Development

Install dependencies:

```bash
npm install
```

Start Studio:

```bash
npm run dev
```

Default local URL:

```text
http://localhost:3333
```

Build Studio:

```bash
npm run build
```

Deploy Studio:

```bash
npm run deploy
```

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start Sanity Studio |
| `npm run build` | Build Studio |
| `npm run deploy` | Deploy Studio |
| `npm run type-check` | Run TypeScript checks |
| `npm run seed:blog` | Seed local blog content into Sanity |
| `npm run seed:newsletter` | Seed the current structured newsletter issue |
| `npm run import:legacy-html -- "<url>" "<slug>" "<title>"` | Import a legacy HTML page |

## Seed And Import Details

### `seed-blog.mjs`

Run:

```bash
npm run seed:blog
```

The script:

- reads `../modern-website/src/content/blogArticles.ts`
- replaces local asset imports with absolute file paths so the data can be evaluated in Node
- uploads hero images as Sanity image assets
- creates or replaces category documents
- creates or replaces post documents for German and English fallback articles
- creates or replaces the shared author document `author-sahaja-yoga-muenchen`
- creates or replaces the site settings document `siteSettings-main`
- patches related post references after posts exist
- deletes older legacy IDs using dot-separated names

Important generated IDs:

| Document | ID pattern |
| --- | --- |
| Posts | `post-<locale>-<slug>` |
| Categories | `category-<locale>-<slugified-title>` |
| Author | `author-sahaja-yoga-muenchen` |
| Site settings | `siteSettings-main` |

The script marks `/blog/stille-und-aufmerksamkeit` as the featured article.

### `seed-newsletter.mjs`

Run:

```bash
npm run seed:newsletter
```

The script creates or replaces:

```text
newsletter-sahaja-yoga-newsletter-01-2026
```

It writes a German `newsletter` document for issue `01-2026`, uses external image URLs, and references:

```text
legacy-html-sahaja-yoga-newsletter-01-2026
```

Run the legacy import first if that referenced legacy document has not been created.

### `import-legacy-html.mjs`

Run:

```bash
npm run import:legacy-html -- "https://example.com/source.html" "example-slug" "Example Title"
```

If arguments are omitted, the script falls back to the current newsletter source URL, slug, and title embedded in the script.

The script:

- fetches the source URL
- stores raw HTML in `legacyHtmlPage.rawHtml`
- generates `plainText` by removing scripts, styles, tags, `&nbsp;`, `&amp;`, and repeated whitespace
- creates or replaces the document ID `legacy-html-<slug>`
- sets `kind` to `newsletter`
- sets `locale` to `de`
- sets `sourceSite` to `meditationmuenchen.org`
- sets `issueLabel` to `01-2026`

The script is currently tailored to newsletter migration rather than being a fully generic importer.

## Frontend Integration Contract

The frontend reads these Sanity document types:

| Frontend area | Sanity type | Notes |
| --- | --- | --- |
| Blog list | `post` | Active locale only, ordered by featured and publication date |
| Blog detail | `post` | Slug from `/blog/:slug`, active locale only |
| Newsletter archive | `newsletter` | Active locale first, fallback to all locales |
| Newsletter detail | `newsletter` | Active locale and slug first, fallback to slug in any locale |
| Legacy issue HTML | `newsletter.legacyImport->legacyHtmlPage` | Loaded on demand |

For image fields, the frontend prefers uploaded Sanity images and falls back to external image URLs where the schema provides them.

The frontend ignores malformed records. A published Sanity document may not appear if required mapper fields are missing.

Required frontend-rendered post fields:

- `slug`
- `title`
- `cardTitle`
- `cardDescription`
- `intro`
- `heroImage`
- `heroNote`
- at least one valid section

Required frontend-rendered newsletter fields:

- `title`
- `slug`
- `issueLabel`
- `introBody`
- `publishedAt`

## Operational Notes

- Use `npm run type-check` before changing schemas or scripts.
- Studio schema changes can require coordinated frontend mapper changes.
- Seed scripts are destructive for their own deterministic document IDs because they use `createOrReplace`.
- Seed scripts require a logged-in Sanity CLI session.
- `siteSettings` is available in Sanity but currently unused by the public website.
- Legacy HTML rendering in the frontend strips scripts before display, but imported HTML should still be treated as trusted migration content.
