import { db } from '$lib/server/db/db';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	return {
		drivers: db.getTenDrivers(),
		options: db.getSeasons()
	};
}) satisfies PageServerLoad;
