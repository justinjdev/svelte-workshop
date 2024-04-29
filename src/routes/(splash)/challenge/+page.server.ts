import { checkColor } from '$lib/server/challenge';
import { fail, redirect, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	return {};
}) satisfies PageServerLoad;

// https://kit.svelte.dev/docs/form-actions
export const actions: Actions = {
	challenge: async ({ request, cookies }) => {
		const data = await request.formData();
		const color = data.get('color');
		const next = data.get('next');
		if (color && checkColor(color.toString())) {
			cookies.set('challenge', 'evergreen', { path: '/' });
			if (next) {
				throw redirect(302, next.toString());
			} else {
				throw redirect(302, '/learn');
			}
		} else {
			return fail(400, { guess: color, missing: true });
		}
	}
};
