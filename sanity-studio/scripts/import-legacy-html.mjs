import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createClient } from '@sanity/client';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const studioRoot = path.resolve(__dirname, '..');
const envPath = path.resolve(studioRoot, '.env.local');
const sanityConfigPath = path.resolve(process.env.HOME || '', '.config/sanity/config.json');

const env = fs.existsSync(envPath)
  ? Object.fromEntries(
      fs
        .readFileSync(envPath, 'utf8')
        .split('\n')
        .map(line => line.trim())
        .filter(line => line && !line.startsWith('#') && line.includes('='))
        .map(line => {
          const [key, ...rest] = line.split('=');
          return [key, rest.join('=')];
        })
    )
  : {};

const projectId = process.env.SANITY_STUDIO_PROJECT_ID || env.SANITY_STUDIO_PROJECT_ID;
const dataset = process.env.SANITY_STUDIO_DATASET || env.SANITY_STUDIO_DATASET || 'production';
const sanityConfig = JSON.parse(fs.readFileSync(sanityConfigPath, 'utf8'));
const token = sanityConfig.authToken;

if (!projectId) {
  throw new Error('SANITY_STUDIO_PROJECT_ID is required');
}

if (!token) {
  throw new Error('Sanity auth token not found');
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: '2026-03-22',
  useCdn: false,
  token
});

const sourceUrl =
  process.argv[2] ||
  'https://www.meditationmuenchen.org/wp-content/uploads/2026/03/Sahaja-Yoga-Newsletter-01-2026-copy-01.html';

const slugValue = process.argv[3] || 'sahaja-yoga-newsletter-01-2026';
const titleValue = process.argv[4] || 'Sahaja Yoga Newsletter 01-2026';

const response = await fetch(sourceUrl);

if (!response.ok) {
  throw new Error(`Failed to fetch source HTML: ${response.status} ${response.statusText}`);
}

const rawHtml = await response.text();

const plainText = rawHtml
  .replace(/<script[\s\S]*?<\/script>/gi, ' ')
  .replace(/<style[\s\S]*?<\/style>/gi, ' ')
  .replace(/<[^>]+>/g, ' ')
  .replace(/&nbsp;/g, ' ')
  .replace(/&amp;/g, '&')
  .replace(/\s+/g, ' ')
  .trim();

const doc = {
  _id: `legacy-html-${slugValue}`,
  _type: 'legacyHtmlPage',
  title: titleValue,
  slug: {
    _type: 'slug',
    current: slugValue
  },
  kind: 'newsletter',
  locale: 'de',
  sourceSite: 'meditationmuenchen.org',
  sourceUrl,
  issueLabel: '01-2026',
  importedAt: new Date().toISOString(),
  plainText,
  rawHtml
};

await client.createOrReplace(doc);

console.log(`Imported legacy HTML page into ${projectId}/${dataset}: ${doc._id}`);
