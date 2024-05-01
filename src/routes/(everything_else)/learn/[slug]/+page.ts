import type { PageLoad } from './$types';

/**
 * Client-side loading
 */
export const load = (async ({ params }) => {
	const post = await import('../../../../md/' + params.slug);

	return {
		content: post.default,
		meta: post.metadata
	};
}) satisfies PageLoad;