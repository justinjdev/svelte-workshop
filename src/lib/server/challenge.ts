import type { Cookies } from '@sveltejs/kit';

export const cookieChallenge = (cookies: Cookies): boolean => {
	const challengeToken = cookies.get('challenge');

	if (!challengeToken || challengeToken !== 'evergreen') {
		return false;
	}

	return true;
};
