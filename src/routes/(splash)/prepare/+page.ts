import type { PageLoad } from './$types';

export const load = (async () => {
	// @ts-ignore - this works but ts doesn't realize it
	const post = await import('../../../md/prepare.md');

	return {
		content: post.default,
		meta: post.metadata
	};
}) satisfies PageLoad;
