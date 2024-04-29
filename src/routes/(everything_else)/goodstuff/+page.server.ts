import type { PageServerLoad } from './$types';

export const load = (async ({ locals }) => {
	if (!locals.isCool) {
		return {
			status: 403,
			error: new Error('You are not cool enough')
		};
	}

	return {
		drivers: locals.db.getTenDrivers(),
		options: locals.db.getSeasons()
	};
}) satisfies PageServerLoad;
