import type { Locale } from '../context/LocaleContext';
import { getSanityImageUrl, isSanityConfigured, sanityClient } from '../lib/sanity';

export type NewsletterLink = {
  label: string;
  url?: string;
};

export type NewsletterCard = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  body: string;
  points: string[];
  imageUrl?: string;
  imageAlt: string;
  links: NewsletterLink[];
};

export type NewsletterScheduleItem = {
  day: string;
  time?: string;
  description: string;
  contact?: string;
};

export type Newsletter = {
  route: string;
  title: string;
  slug: string;
  locale: Locale;
  issueLabel: string;
  publishedAt: string;
  heroEyebrow?: string;
  introTitle?: string;
  introBody: string;
  closing?: string;
  heroImageUrl?: string;
  heroImageAlt: string;
  featuredHeading?: string;
  featuredCards: NewsletterCard[];
  scheduleHeading?: string;
  munichSchedule: NewsletterScheduleItem[];
  regionalHeading?: string;
  regionalLinks: NewsletterLink[];
  retrospectiveHeading?: string;
  retrospectiveCards: NewsletterCard[];
  newsHeading?: string;
  newsCards: NewsletterCard[];
  recommendedHeading?: string;
  recommendedLinks: NewsletterLink[];
  donationHeading?: string;
  donationBody?: string;
  donationDetails: string[];
  sourceUrl?: string;
  legacyImportHtml?: string;
  legacyImportPlainText?: string;
  legacyImportSourceUrl?: string;
};

type SanityNewsletterLink = {
  label?: string;
  url?: string;
};

type SanityNewsletterCard = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  body?: string;
  points?: string[];
  image?: unknown;
  imageUrl?: string;
  imageAlt?: string;
  links?: SanityNewsletterLink[];
};

type SanityNewsletterScheduleItem = {
  day?: string;
  time?: string;
  description?: string;
  contact?: string;
};

type SanityNewsletterRecord = {
  title?: string;
  slug?: string;
  locale?: Locale;
  issueLabel?: string;
  publishedAt?: string;
  heroEyebrow?: string;
  introTitle?: string;
  introBody?: string;
  closing?: string;
  heroImage?: unknown;
  heroImageUrl?: string;
  heroImageAlt?: string;
  featuredHeading?: string;
  featuredCards?: SanityNewsletterCard[];
  scheduleHeading?: string;
  munichSchedule?: SanityNewsletterScheduleItem[];
  regionalHeading?: string;
  regionalLinks?: SanityNewsletterLink[];
  retrospectiveHeading?: string;
  retrospectiveCards?: SanityNewsletterCard[];
  newsHeading?: string;
  newsCards?: SanityNewsletterCard[];
  recommendedHeading?: string;
  recommendedLinks?: SanityNewsletterLink[];
  donationHeading?: string;
  donationBody?: string;
  donationDetails?: string[];
  sourceUrl?: string;
  legacyImportHtml?: string;
  legacyImportPlainText?: string;
  legacyImportSourceUrl?: string;
};

const newsletterListProjection = `
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

const newsletterIssueProjection = `
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

const mapLink = (link: SanityNewsletterLink): NewsletterLink | null => {
  const label = link.label?.trim();

  if (!label) {
    return null;
  }

  return {
    label,
    url: link.url?.trim() || undefined
  };
};

const mapCard = (card: SanityNewsletterCard): NewsletterCard | null => {
  const title = card.title?.trim();
  const body = card.body?.trim();

  if (!title || !body) {
    return null;
  }

  return {
    eyebrow: card.eyebrow?.trim() || undefined,
    title,
    subtitle: card.subtitle?.trim() || undefined,
    body,
    points: card.points?.map(point => point.trim()).filter(Boolean) ?? [],
    imageUrl: getSanityImageUrl(card.image) ?? (card.imageUrl?.trim() || undefined),
    imageAlt: card.imageAlt?.trim() || title,
    links: card.links?.map(mapLink).filter((link): link is NewsletterLink => Boolean(link)) ?? []
  };
};

const mapScheduleItem = (item: SanityNewsletterScheduleItem): NewsletterScheduleItem | null => {
  const day = item.day?.trim();
  const description = item.description?.trim();

  if (!day || !description) {
    return null;
  }

  return {
    day,
    time: item.time?.trim() || undefined,
    description,
    contact: item.contact?.trim() || undefined
  };
};

const mapNewsletter = (record: SanityNewsletterRecord): Newsletter | null => {
  const title = record.title?.trim();
  const slug = record.slug?.trim();
  const issueLabel = record.issueLabel?.trim();
  const introBody = record.introBody?.trim();
  const publishedAt = record.publishedAt?.trim();

  if (!title || !slug || !issueLabel || !introBody || !publishedAt) {
    return null;
  }

  return {
    route: `/newsletter/${slug}`,
    title,
    slug,
    locale: record.locale === 'en' ? 'en' : 'de',
    issueLabel,
    publishedAt,
    heroEyebrow: record.heroEyebrow?.trim() || undefined,
    introTitle: record.introTitle?.trim() || undefined,
    introBody,
    closing: record.closing?.trim() || undefined,
    heroImageUrl: getSanityImageUrl(record.heroImage) ?? (record.heroImageUrl?.trim() || undefined),
    heroImageAlt: record.heroImageAlt?.trim() || title,
    featuredHeading: record.featuredHeading?.trim() || undefined,
    featuredCards:
      record.featuredCards?.map(mapCard).filter((card): card is NewsletterCard => Boolean(card)) ?? [],
    scheduleHeading: record.scheduleHeading?.trim() || undefined,
    munichSchedule:
      record.munichSchedule
        ?.map(mapScheduleItem)
        .filter((item): item is NewsletterScheduleItem => Boolean(item)) ?? [],
    regionalHeading: record.regionalHeading?.trim() || undefined,
    regionalLinks:
      record.regionalLinks?.map(mapLink).filter((link): link is NewsletterLink => Boolean(link)) ?? [],
    retrospectiveHeading: record.retrospectiveHeading?.trim() || undefined,
    retrospectiveCards:
      record.retrospectiveCards?.map(mapCard).filter((card): card is NewsletterCard => Boolean(card)) ?? [],
    newsHeading: record.newsHeading?.trim() || undefined,
    newsCards: record.newsCards?.map(mapCard).filter((card): card is NewsletterCard => Boolean(card)) ?? [],
    recommendedHeading: record.recommendedHeading?.trim() || undefined,
    recommendedLinks:
      record.recommendedLinks?.map(mapLink).filter((link): link is NewsletterLink => Boolean(link)) ?? [],
    donationHeading: record.donationHeading?.trim() || undefined,
    donationBody: record.donationBody?.trim() || undefined,
    donationDetails: record.donationDetails?.map(item => item.trim()).filter(Boolean) ?? [],
    sourceUrl: record.sourceUrl?.trim() || undefined,
    legacyImportHtml: record.legacyImportHtml?.trim() || undefined,
    legacyImportPlainText: record.legacyImportPlainText?.trim() || undefined,
    legacyImportSourceUrl: record.legacyImportSourceUrl?.trim() || undefined
  };
};

const fetchMappedNewsletters = async (query: string, params: Record<string, unknown>) => {
  if (!isSanityConfigured || !sanityClient) {
    return null;
  }

  const records = await sanityClient.fetch<SanityNewsletterRecord[]>(query, params);
  const mapped = records.map(mapNewsletter).filter((record): record is Newsletter => Boolean(record));
  return mapped.length ? mapped : null;
};

export const getSanityNewsletters = async (locale: Locale): Promise<Newsletter[] | null> => {
  const localized = await fetchMappedNewsletters(
    `*[_type == "newsletter" && locale == $locale] | order(publishedAt desc){${newsletterListProjection}}`,
    { locale }
  );

  if (localized?.length) {
    return localized;
  }

  return fetchMappedNewsletters(
    `*[_type == "newsletter"] | order(publishedAt desc){${newsletterListProjection}}`,
    {}
  );
};

export const getSanityNewsletter = async (
  locale: Locale,
  slug: string
): Promise<Newsletter | null> => {
  if (!isSanityConfigured || !sanityClient) {
    return null;
  }

  const localized = await sanityClient.fetch<SanityNewsletterRecord[]>(
    `*[_type == "newsletter" && locale == $locale && slug.current == $slug]{${newsletterIssueProjection}}`,
    { locale, slug }
  );

  const localizedMatch = localized.map(mapNewsletter).find(Boolean) ?? null;

  if (localizedMatch) {
    return localizedMatch;
  }

  const fallback = await sanityClient.fetch<SanityNewsletterRecord[]>(
    `*[_type == "newsletter" && slug.current == $slug]{${newsletterIssueProjection}}`,
    { slug }
  );

  return fallback.map(mapNewsletter).find(Boolean) ?? null;
};
