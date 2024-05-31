import type { PageServerLoad } from '../$types';

export const load = (async ({ locals, params }) => {
	return {
		team: { ...locals.db.getTeamById(params.id), ...locals.db.getPointsByTeamId(params.id) }
	};
}) satisfies PageServerLoad;
