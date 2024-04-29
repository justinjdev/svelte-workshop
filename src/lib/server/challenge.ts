import type { Cookies } from '@sveltejs/kit';

export const cookieChallenge = (cookies: Cookies): boolean => {
	const challengeToken = cookies.get('challenge');

	if (!challengeToken || !checkColor(challengeToken)) {
		return false;
	}

	return true;
};

export const checkColor = (color: string): boolean => {
	return color === 'evergreen';
};
