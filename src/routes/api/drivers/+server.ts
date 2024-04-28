import { json, type RequestHandler } from '@sveltejs/kit';
import { db } from '$lib/server/db/db';

export const GET: RequestHandler = async ({ url }) => {
	const year = url.searchParams.get('year') || '2024';
	return json(db.getSeasonByYear(year));
};
