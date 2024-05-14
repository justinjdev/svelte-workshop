import { cookieChallenge } from '$lib/server/challenge';
import SqliteDB from '$lib/server/db/db';
import { redirect, type Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	// in case anybody attempts to directly access
	if (event.request.method === 'GET' && event.request.url.match(/\/learn\/.+\.md/)) {
		throw redirect(302, event.request.url.replace(/\.md$/, ''));
	}

	// event.locals is like request metadata - a custom object, it is built for each request and passed along
	// it is common to store clients/users in locals
	// I'm using it to pretend I have auth :)
	event.locals.isCool = cookieChallenge(event.cookies);

	// once we figure out of they're cool, see if they're able to access the cool stuff
	if (event.url.pathname.startsWith('/learn') || event.url.pathname.startsWith('/exercise')) {
		if (!event.locals.isCool) {
			// handle proceeding after someone proves to be cool
			let nextParam = '';
			// don't redirect to the challenge page if they're already there and passed
			if (event.url.pathname !== '/challenge') {
				nextParam = '?next=' + encodeURIComponent(event.request.url);
			}
			throw redirect(303, `/challenge${nextParam}`);
		}
	}

	// if they're cool, they get a db
	// this way, even if someone made it to a page they shouldn't have, they can't do anything with it
	if (event.locals.isCool) {
		event.locals.db = new SqliteDB();
	}

	return await resolve(event);
};
