import type { Driver } from '$lib/server/db/types';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
	return {
		driver: {} as Driver
	};
}) satisfies PageServerLoad;
