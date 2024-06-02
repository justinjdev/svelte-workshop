import type { Team } from '$lib/server/db/types';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
	return {
		team: {id: params.id, name: "McLaren", base: "Woking, UK"}
	};
}) satisfies PageServerLoad;
