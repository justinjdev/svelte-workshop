import { json, type RequestHandler } from '@sveltejs/kit';
export const GET: RequestHandler = async ({ locals }) => {
	return json(locals.db.getAllRaces());
};
