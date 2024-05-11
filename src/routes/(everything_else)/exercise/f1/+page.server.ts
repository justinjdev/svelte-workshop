import type { PageServerLoad } from '../../learn/$types';

export const load = (async ({ locals }) => {
	return {
		drivers: locals.db.getTenDrivers(),
		options: locals.db.getSeasons()
	};
}) satisfies PageServerLoad;
