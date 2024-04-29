import { cookieChallenge } from '$lib/server/challenge';
import SqliteDB from '$lib/server/db/db';
import { redirect, type Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	// event.locals is like request metadata - a custom object, it is built for each request and passed along
	// it is common to store clients/users in locals
	// I'm using it to pretend I have auth :)
	event.locals.isCool = cookieChallenge(event.cookies);

	// once we figure out of they're cool, see if they're able to access the cool stuff
	if (event.url.pathname.startsWith('/cool') || event.url.pathname.startsWith('/examples')) {
		if (!event.locals.isCool) {
			throw redirect(303, '/challenge');
		}
	}

	// if they're cool, they get a db
	if (event.locals.isCool) {
		event.locals.db = new SqliteDB();
	}

	const response = await resolve(event);

	return response;
};
