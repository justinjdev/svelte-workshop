import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url, locals }) => {
	const year = url.searchParams.get('year') || '2024';
	return json(locals.db.getSeasonByYear(year));
};
