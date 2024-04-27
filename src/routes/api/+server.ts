import type { Season } from '$lib/server/db/types';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { db } from '$lib/server/db/db';

export const GET: RequestHandler = async ({ url }) => {
	const year = url.searchParams.get('year') || '2024';
	return json(db.getSeasonByYear(year));
};
