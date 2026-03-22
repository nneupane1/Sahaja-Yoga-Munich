import { createClient } from '@sanity/client';

const projectId = process.env.VITE_SANITY_PROJECT_ID?.trim();
const dataset = process.env.VITE_SANITY_DATASET?.trim();
const apiVersion = process.env.VITE_SANITY_API_VERSION?.trim() || '2026-03-22';

const listProjection = `
  title,
  "slug": slug.current,
  locale,
  issueLabel,
  publishedAt,
  introTitle,
  introBody,
  heroImage,
  heroImageUrl,
  "heroImageAlt": coalesce(heroImage.alt, title)
`;

const issueProjection = `
  title,
  "slug": slug.current,
  locale,
  issueLabel,
  publishedAt,
  heroEyebrow,
  introTitle,
  introBody,
  closing,
  heroImage,
  heroImageUrl,
  "heroImageAlt": coalesce(heroImage.alt, title),
  sourceUrl,
  "legacyImportHtml": legacyImport->rawHtml,
  "legacyImportPlainText": legacyImport->plainText,
  "legacyImportSourceUrl": coalesce(legacyImport->sourceUrl, sourceUrl)
`;

const client =
  projectId && dataset
    ? createClient({
        projectId,
        dataset,
        apiVersion,
        useCdn: false
      })
    : null;

export default async function handler(req, res) {
  if (!client) {
    res.status(503).json({ error: 'Sanity is not configured on the server' });
    return;
  }

  const url = new URL(req.url, 'http://localhost');
  const locale = url.searchParams.get('locale') || 'de';
  const slug = url.searchParams.get('slug');

  try {
    if (slug) {
      const localized = await client.fetch(
        `*[_type == "newsletter" && locale == $locale && slug.current == $slug]{${issueProjection}}`,
        { locale, slug }
      );

      if (localized?.length) {
        res.status(200).json(localized);
        return;
      }

      const fallback = await client.fetch(
        `*[_type == "newsletter" && slug.current == $slug]{${issueProjection}}`,
        { slug }
      );

      res.status(200).json(fallback ?? []);
      return;
    }

    const localized = await client.fetch(
      `*[_type == "newsletter" && locale == $locale] | order(publishedAt desc){${listProjection}}`,
      { locale }
    );

    if (localized?.length) {
      res.status(200).json(localized);
      return;
    }

    const fallback = await client.fetch(
      `*[_type == "newsletter"] | order(publishedAt desc){${listProjection}}`,
      {}
    );

    res.status(200).json(fallback ?? []);
  } catch (error) {
    res.status(500).json({
      error: error instanceof Error ? error.message : 'Unknown newsletter fetch error'
    });
  }
}
