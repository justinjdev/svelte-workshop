import type { PageServerLoad } from '../../learn/$types';

export const load = (async ({ locals }) => {
	return {
		drivers: locals.db.getAllDrivers(),
		races: locals.db.getAllRaces(),
		teams: locals.db.getAllTeams()
	};
}) satisfies PageServerLoad;
