import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { features } from './features';

export const load = (async ({ params }) => {
  const { slug } = params;
  if (!slug) {
    throw error(404, "Not found");
  }
  
  if (features.some((feature) => feature.slug === slug)) {
    return features.find((feature) => feature.slug === slug);
  } else {
    throw error(404, "Not found");
  }
}) satisfies PageServerLoad;