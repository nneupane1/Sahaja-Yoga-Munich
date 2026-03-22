import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID?.trim();
const dataset = import.meta.env.VITE_SANITY_DATASET?.trim();
const apiVersion = import.meta.env.VITE_SANITY_API_VERSION?.trim() || '2026-03-22';
const useCdn = import.meta.env.VITE_SANITY_USE_CDN?.trim() !== 'false';

export const isSanityConfigured = Boolean(projectId && dataset);

export const sanityClient = isSanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn
    })
  : null;

const builder = sanityClient ? imageUrlBuilder(sanityClient) : null;

export const getSanityImageUrl = (source: unknown, width = 1600) => {
  if (!builder || !source) {
    return null;
  }

  return builder.image(source).width(width).fit('max').auto('format').url();
};
