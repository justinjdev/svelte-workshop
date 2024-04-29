import type { PageServerLoad } from './$types';

export const load = (async ({ locals }) => {
	return {
		drivers: locals.db.getTenDrivers(),
		options: locals.db.getSeasons()
	};
}) satisfies PageServerLoad;
