import type { PageLoad } from './$types';

/**
 * Client-side loading
 */
export const load = (async () => {
	// @ts-ignore - this works but ts doesn't realize it
	const post = await import('./prepare.md');

	return {
		content: post.default,
		meta: post.metadata
	};
}) satisfies PageLoad;
