import fs from 'fs';
import type { PageLoad } from './$types';

export const load = (async () => {
	const file = fs.readFileSync('./static/assets/exampleFile.go', 'utf-8');
	return { file };
}) satisfies PageLoad;
