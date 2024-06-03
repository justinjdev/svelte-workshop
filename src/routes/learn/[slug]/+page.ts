import loadMarkdown from '$lib/loadMarkdown';
import type { PageLoad } from './$types';

/**
 * Client-side loading
 */
export const load = (async ({ params }) => {
	return loadMarkdown(params.slug);
}) satisfies PageLoad;
