import { cookieChallenge } from '$lib/server/challenge';
import SqliteDB from '$lib/server/db/db';
import { redirect, type Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	// in case anybody attempts to access the markdown files with the file extension (which breaks, because...it just does, okay?)
	if (event.request.method === 'GET' && event.request.url.match(/\/learn\/.+\.md/)) {
		throw redirect(302, event.request.url.replace(/\.md$/, ''));
	}

	const userIsAllowed = cookieChallenge(event.cookies);

	// once we figure out of they're cool, see if they're able to access the cool stuff
	// add a condition to check if locals indicates the user is 'authenticated'
	if (event.url.pathname.startsWith('/exercise')) {
		// handle proceeding after someone proves to be cool
		let nextParam = '';
		// don't redirect to the challenge page if they're already there and passed
		if (event.url.pathname !== '/challenge') {
			nextParam = `?next=${encodeURIComponent(event.request.url)}`;
		}
		throw redirect(303, `/challenge${nextParam}`);
	}

	return await resolve(event);
};
