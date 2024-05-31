import type { PageServerLoad } from './$types';

export const load = (async ({ locals, params }) => {
	return {
		driver: locals.db.getDriverById(params.id)
	};
}) satisfies PageServerLoad;
