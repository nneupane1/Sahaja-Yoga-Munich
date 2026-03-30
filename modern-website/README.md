# modern-website

Public frontend for the Sahaja Yoga Munich site.

The main repository documentation now lives in the root [`README.md`](../README.md). Use that file for the full project overview, architecture, setup, Sanity workflow, and deployment notes.

## Local Commands

```bash
npm install
npm run dev
npm run build
npm run preview
npm run type-check
npm run lint
npm run format
```

Default local URL:

```text
http://localhost:5173
```

## Environment

Copy `./.env.example` to `./.env.local` and set the Sanity values you need.

Important variables:

```bash
VITE_SITE_URL=http://localhost:5173
VITE_SANITY_PROJECT_ID=your_project_id
VITE_SANITY_DATASET=production
VITE_SANITY_API_VERSION=2026-03-22
VITE_SANITY_USE_CDN=true
```

## Notes

- blog articles can fall back to local content when Sanity is not configured
- newsletter pages expect Sanity content
- Vercel deployment settings live in `vercel.json`
