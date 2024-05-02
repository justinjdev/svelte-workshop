import { fail } from '@sveltejs/kit';
import type { PageLoad } from './$types';

/**
 * Client-side loading
 */
export const load = (async ({ params }) => {
	const post = await import(`../../../../md/${params.slug}.md`).catch((_) => {
		throw fail(404);
	});

	return {
		content: post.default,
		meta: post.metadata
	};
}) satisfies PageLoad;
