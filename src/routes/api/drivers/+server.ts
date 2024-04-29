import { json, type RequestHandler } from '@sveltejs/kit';
export const GET: RequestHandler = async ({ url, locals }) => {
	const year = url.searchParams.get('year') || '2024';
	return json(locals.db.getSeasonByYear(year));
};
