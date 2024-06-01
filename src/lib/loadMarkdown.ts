import { error } from '@sveltejs/kit';

export default async function loadMarkdown(slug: string) {
	try {
		const post = await import(`../md/${slug}.md`);

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
}
