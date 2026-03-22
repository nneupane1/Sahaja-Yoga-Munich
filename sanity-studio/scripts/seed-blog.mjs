import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createClient } from '@sanity/client';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const studioRoot = path.resolve(__dirname, '..');
const repoRoot = path.resolve(studioRoot, '..');
const websiteRoot = path.resolve(repoRoot, 'modern-website');
const blogContentPath = path.resolve(websiteRoot, 'src/content/blogArticles.ts');
const sanityConfigPath = path.resolve(process.env.HOME || '', '.config/sanity/config.json');
const localEnvPath = path.resolve(studioRoot, '.env.local');

const localEnv = fs.existsSync(localEnvPath)
  ? Object.fromEntries(
      fs
        .readFileSync(localEnvPath, 'utf8')
        .split('\n')
        .map(line => line.trim())
        .filter(line => line && !line.startsWith('#') && line.includes('='))
        .map(line => {
          const [key, ...rest] = line.split('=');
          return [key, rest.join('=')];
        })
    )
  : {};

const projectId = process.env.SANITY_STUDIO_PROJECT_ID || localEnv.SANITY_STUDIO_PROJECT_ID;
const dataset = process.env.SANITY_STUDIO_DATASET || localEnv.SANITY_STUDIO_DATASET || 'production';

if (!projectId) {
  throw new Error('SANITY_STUDIO_PROJECT_ID is required');
}

const sanityConfig = JSON.parse(fs.readFileSync(sanityConfigPath, 'utf8'));
const token = sanityConfig.authToken;

if (!token) {
  throw new Error('Sanity auth token not found in ~/.config/sanity/config.json');
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: '2026-03-22',
  useCdn: false,
  token
});

const source = fs.readFileSync(blogContentPath, 'utf8');

const assetImports = [...source.matchAll(/^import\s+(\w+)\s+from\s+'(\.\.\/assets\/[^']+)';$/gm)].map(
  match => {
    const [, identifier, relativePath] = match;
    const absolutePath = path.resolve(path.dirname(blogContentPath), relativePath);
    return {
      identifier,
      absolutePath,
      fileName: path.basename(absolutePath)
    };
  }
);

const assetPrelude = assetImports
  .map(entry => `const ${entry.identifier} = ${JSON.stringify(entry.absolutePath)};`)
  .join('\n');

const executableSource = `${assetPrelude}
${source
  .replace(/^import[^\n]*$/gm, '')
  .replace(/export type BlogArticleSection = \{[\s\S]*?\n};\n\n/, '')
  .replace(/export type BlogArticle = \{[\s\S]*?\n};\n\n/, '')
  .replace(/const articlesDe: Record<string, BlogArticle> = /, 'const articlesDe = ')
  .replace(/const articlesEn: Record<string, BlogArticle> = /, 'const articlesEn = ')
  .replace(/export const getBlogArticles[\s\S]*$/, 'return { articlesDe, articlesEn };')}`;

const { articlesDe, articlesEn } = new Function(executableSource)();

const slugify = value =>
  value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

const getPostId = (locale, route) => `post-${locale}-${route.replace(/^\/blog\//, '')}`;
const getLegacyPostId = (locale, route) => `post.${locale}.${route.replace(/^\/blog\//, '')}`;
const getCategoryId = (locale, title) => `category-${locale}-${slugify(title)}`;
const getLegacyCategoryId = (locale, title) => `category.${locale}.${slugify(title)}`;
const authorId = 'author-sahaja-yoga-muenchen';
const legacyAuthorId = 'author.sahaja-yoga-muenchen';
const siteSettingsId = 'siteSettings-main';
const legacySiteSettingsId = 'siteSettings.main';

const imageAssetCache = new Map();

const uploadImage = async filePath => {
  if (imageAssetCache.has(filePath)) {
    return imageAssetCache.get(filePath);
  }

  const stream = fs.createReadStream(filePath);
  const asset = await client.assets.upload('image', stream, {
    filename: path.basename(filePath)
  });

  imageAssetCache.set(filePath, asset);
  return asset;
};

const buildDocuments = localeArticles => {
  const categories = new Map();
  const posts = [];

  for (const article of Object.values(localeArticles)) {
    categories.set(getCategoryId(article.route.includes('/blog/') ? article.route.split('/')[0] || 'de' : 'de', article.category), article.category);
    posts.push(article);
  }

  return { categories, posts };
};

const buildLocaleDocuments = (locale, articles) => {
  const categories = new Map();
  const posts = [];

  for (const article of Object.values(articles)) {
    categories.set(getCategoryId(locale, article.category), article.category);
    posts.push(article);
  }

  return { categories, posts };
};

const createCategoryDocs = (locale, categories) =>
  [...categories.entries()].map(([id, title]) => ({
    _id: id,
    _type: 'category',
    title,
    slug: {
      _type: 'slug',
      current: `${locale}-${slugify(title)}`
    },
    description: ''
  }));

const createPostDoc = async (locale, article, featured) => {
  const heroAsset = await uploadImage(article.heroImage);

  return {
    _id: getPostId(locale, article.route),
    _type: 'post',
    title: article.title,
    slug: {
      _type: 'slug',
      current: article.route.replace(/^\/blog\//, '')
    },
    locale,
    publishedAt: new Date().toISOString(),
    featured,
    category: {
      _type: 'reference',
      _ref: getCategoryId(locale, article.category)
    },
    author: {
      _type: 'reference',
      _ref: authorId
    },
    eyebrow: article.eyebrow,
    cardTitle: article.cardTitle,
    cardDescription: article.cardDescription,
    intro: article.intro,
    heroImage: {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: heroAsset._id
      },
      alt: article.heroImageAlt
    },
    heroNote: article.heroNote,
    sections: article.sections.map(section => ({
      _type: 'blogSection',
      _key: slugify(`${section.title}-${Math.random().toString(36).slice(2, 8)}`),
      title: section.title,
      paragraphs: section.paragraphs,
      points: section.points || []
    })),
    related: []
  };
};

const removeLegacyLocaleDocs = async (locale, articles) => {
  for (const article of Object.values(articles)) {
    await client.delete(getLegacyPostId(locale, article.route)).catch(() => {});
    await client.delete(getLegacyCategoryId(locale, article.category)).catch(() => {});
  }
};

const seedLocale = async (locale, articles) => {
  const { categories, posts } = buildLocaleDocuments(locale, articles);

  for (const categoryDoc of createCategoryDocs(locale, categories)) {
    await client.createOrReplace(categoryDoc);
  }

  for (const article of posts) {
    const featured = article.route === '/blog/stille-und-aufmerksamkeit';
    const postDoc = await createPostDoc(locale, article, featured);
    await client.createOrReplace(postDoc);
  }

  for (const article of posts) {
    await client
      .patch(getPostId(locale, article.route))
      .set({
        related: article.related.map(route => ({
          _type: 'reference',
          _ref: getPostId(locale, route)
        }))
      })
      .commit();
  }
};

await client.createOrReplace({
  _id: authorId,
  _type: 'author',
  name: 'Sahaja Yoga München',
  slug: {
    _type: 'slug',
    current: 'sahaja-yoga-muenchen'
  },
  bio: [
    {
      _type: 'block',
      _key: 'intro',
      style: 'normal',
      markDefs: [],
      children: [
        {
          _type: 'span',
          _key: 'intro-span',
          text: 'Editorial content for the Sahaja Yoga Munich website.',
          marks: []
        }
      ]
    }
  ]
});

await client.createOrReplace({
  _id: siteSettingsId,
  _type: 'siteSettings',
  title: 'Sahaja Yoga München',
  description: 'Shared site settings for the Sahaja Yoga Munich website.',
  blogIntroDe: 'Meditation, Wissen und Praxis aus München.',
  blogIntroEn: 'Meditation, knowledge and practice from Munich.'
});

await seedLocale('de', articlesDe);
await seedLocale('en', articlesEn);
await removeLegacyLocaleDocs('de', articlesDe);
await removeLegacyLocaleDocs('en', articlesEn);
await client.delete(legacyAuthorId).catch(() => {});
await client.delete(legacySiteSettingsId).catch(() => {});

console.log(`Seeded Sanity blog content into project ${projectId}/${dataset}`);
