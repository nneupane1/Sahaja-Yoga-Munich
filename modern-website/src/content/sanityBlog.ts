import type { Locale } from '../context/LocaleContext';
import type { BlogArticle, BlogArticleSection } from './blogArticles';
import { getSanityImageUrl, isSanityConfigured, sanityClient } from '../lib/sanity';

type SanityBlogSection = {
  title?: string;
  paragraphs?: string[];
  points?: string[];
};

type SanityBlogCard = {
  title?: string;
  slug?: string;
  locale?: Locale;
  category?: string;
  cardTitle?: string;
  cardDescription?: string;
  eyebrow?: string;
  intro?: string;
  heroImage?: unknown;
  heroImageAlt?: string;
  heroNote?: string;
  sections?: SanityBlogSection[];
  related?: Array<{ slug?: string }>;
};

type SanityBlogArticleRecord = SanityBlogCard & {
  relatedArticles?: SanityBlogCard[];
};

export type SanityBlogArticleBundle = {
  article: BlogArticle;
  relatedArticles: BlogArticle[];
};

const blogCardProjection = `
  title,
  "slug": slug.current,
  locale,
  "category": coalesce(category->title, ""),
  cardTitle,
  cardDescription,
  eyebrow,
  intro,
  heroImage,
  "heroImageAlt": coalesce(heroImage.alt, title),
  heroNote,
  sections[]{
    title,
    paragraphs,
    points
  },
  "related": related[]->{
    "slug": slug.current
  }
`;

const mapSection = (section: SanityBlogSection): BlogArticleSection | null => {
  if (!section.title || !section.paragraphs?.length) {
    return null;
  }

  return {
    title: section.title,
    paragraphs: section.paragraphs,
    points: section.points?.filter(Boolean)
  };
};

const mapPost = (post: SanityBlogCard): BlogArticle | null => {
  const slug = post.slug?.trim();
  const title = post.title?.trim();
  const cardTitle = post.cardTitle?.trim();
  const cardDescription = post.cardDescription?.trim();
  const intro = post.intro?.trim();
  const heroNote = post.heroNote?.trim();
  const sections =
    post.sections?.map(mapSection).filter((section): section is BlogArticleSection => Boolean(section)) ?? [];

  if (!slug || !title || !cardTitle || !cardDescription || !intro || !heroNote || !sections.length) {
    return null;
  }

  const heroImage = getSanityImageUrl(post.heroImage);

  if (!heroImage) {
    return null;
  }

  return {
    route: `/blog/${slug}`,
    category: post.category?.trim() || '',
    cardTitle,
    cardDescription,
    eyebrow: post.eyebrow?.trim() || '',
    title,
    intro,
    heroImage,
    heroImageAlt: post.heroImageAlt?.trim() || title,
    heroNote,
    sections,
    related: post.related?.map(item => item.slug?.trim()).filter(Boolean).map(item => `/blog/${item}`) ?? []
  };
};

export const getSanityBlogArticles = async (locale: Locale): Promise<BlogArticle[] | null> => {
  if (!isSanityConfigured || !sanityClient) {
    return null;
  }

  const posts = await sanityClient.fetch<SanityBlogCard[]>(
    `*[_type == "post" && locale == $locale] | order(featured desc, publishedAt desc){${blogCardProjection}}`,
    { locale }
  );

  const mapped = posts.map(mapPost).filter((post): post is BlogArticle => Boolean(post));
  return mapped.length ? mapped : null;
};

export const getSanityBlogArticleBundle = async (
  locale: Locale,
  route: string
): Promise<SanityBlogArticleBundle | null> => {
  if (!isSanityConfigured || !sanityClient) {
    return null;
  }

  const slug = route.replace(/^\/blog\//, '').trim();

  if (!slug) {
    return null;
  }

  const record = await sanityClient.fetch<SanityBlogArticleRecord | null>(
    `*[_type == "post" && locale == $locale && slug.current == $slug][0]{
      ${blogCardProjection},
      "relatedArticles": related[]->{
        ${blogCardProjection}
      }
    }`,
    { locale, slug }
  );

  if (!record) {
    return null;
  }

  const article = mapPost(record);

  if (!article) {
    return null;
  }

  const relatedArticles =
    record.relatedArticles?.map(mapPost).filter((post): post is BlogArticle => Boolean(post)) ?? [];

  return {
    article,
    relatedArticles
  };
};
