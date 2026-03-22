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
  featuredHeading,
  featuredCards[]{
    eyebrow,
    title,
    subtitle,
    body,
    points,
    image,
    imageUrl,
    "imageAlt": coalesce(image.alt, title),
    links[]{
      label,
      url
    }
  },
  scheduleHeading,
  munichSchedule[]{
    day,
    time,
    description,
    contact
  },
  regionalHeading,
  regionalLinks[]{
    label,
    url
  },
  retrospectiveHeading,
  retrospectiveCards[]{
    eyebrow,
    title,
    subtitle,
    body,
    points,
    image,
    imageUrl,
    "imageAlt": coalesce(image.alt, title),
    links[]{
      label,
      url
    }
  },
  newsHeading,
  newsCards[]{
    eyebrow,
    title,
    subtitle,
    body,
    points,
    image,
    imageUrl,
    "imageAlt": coalesce(image.alt, title),
    links[]{
      label,
      url
    }
  },
  recommendedHeading,
  recommendedLinks[]{
    label,
    url
  },
  donationHeading,
  donationBody,
  donationDetails,
  contactHeading,
  contactDetails,
  footerNote,
  footerLinks[]{
    label,
    url
  },
  sourceUrl,
  "hasLegacyImport": defined(legacyImport->_id),
  "legacyImportSourceUrl": coalesce(legacyImport->sourceUrl, sourceUrl)
`;

const legacyProjection = `
  title,
  "slug": slug.current,
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
  const includeLegacy = url.searchParams.get('includeLegacy') === '1';

  try {
    if (slug) {
      if (includeLegacy) {
        const localizedLegacy = await client.fetch(
          `*[_type == "newsletter" && locale == $locale && slug.current == $slug]{${legacyProjection}}`,
          { locale, slug }
        );

        if (localizedLegacy?.length) {
          res.status(200).json(localizedLegacy);
          return;
        }

        const fallbackLegacy = await client.fetch(
          `*[_type == "newsletter" && slug.current == $slug]{${legacyProjection}}`,
          { slug }
        );

        res.status(200).json(fallbackLegacy ?? []);
        return;
      }

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
