import type { Cookies } from '@sveltejs/kit';

/**
 * Given cookies from the request, check if the user passed the challenge.
 *
 * @param cookies cookies from the request
 * @returns true if used passed the challenge, else false
 */
export const cookieChallenge = (cookies: Cookies): boolean => {
	const challengeToken = cookies.get('challenge');

	if (!challengeToken || !checkColor(challengeToken)) {
		return false;
	}

	return true;
};

/**
 * Given a color, check if it is The One True Green.
 *
 * @param color the user's favorite color
 * @returns true if the user's favorite color is The One True Green, else false
 */
export const checkColor = (color: string): boolean => {
	return color === 'evergreen';
};
