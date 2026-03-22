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

export const fetchSanityQuery = async <T>(
  query: string,
  params: Record<string, unknown> = {}
): Promise<T> => {
  if (!projectId || !dataset) {
    throw new Error('Sanity is not configured');
  }

  const response = await fetch(
    `https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query,
        params
      })
    }
  );

  if (!response.ok) {
    throw new Error(`Sanity query failed with ${response.status}`);
  }

  const payload = (await response.json()) as { result: T };
  return payload.result;
};
