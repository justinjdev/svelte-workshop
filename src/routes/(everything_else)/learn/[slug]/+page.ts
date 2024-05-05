import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

/**
 * Client-side loading
 */
export const load = (async ({ params }) => {
	try {
		const post = await import(`../../../../md/${params.slug}.md`);

		if (!post.metadata.published) {
			throw error(403, `Page not yet available!`);
		}

		return {
			content: post.default,
			meta: post.metadata
		};
	} catch (e) {
		throw error(404, `Could not find the requested page!`);
	}
}) satisfies PageLoad;
