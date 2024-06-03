import { redirect, type Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	// in case anybody attempts to access the markdown files with the file extension (which breaks, because...it just does, okay?)
	if (event.request.method === 'GET' && event.request.url.match(/\/learn\/.+\.md/)) {
		throw redirect(302, event.request.url.replace(/\.md$/, ''));
	}

	return await resolve(event);
};
