/**
 * Get a random word from the list of words. This isn't really "safe" (you'd probably want to handle this server-side), but it's good enough for this exercise.
 *
 * @returns a random word from the list of words
 */
export function getAWord() {
	return words[Math.floor(Math.random() * words.length)];
}

const words = [
	'circuit',
	'aerokit',
	'gearbox',
	'pitstop',
	'spoiler',
	'qualify',
	'chassis',
	'turbo',
	'slicks',
	'monocoque',
	'downforce',
	'driveline',
	'fastlap',
	'cockpit',
	'revlimiter',
	'telemetry',
	'compound',
	'traction',
	'paddock',
	'marshal',
	'helmet',
	'laptime',
	'pitwall',
	'podium',
	'racing',
	'slipstream',
	'oversteer',
	'understeer',
	'clutch',
	'diffuser',
	'launch',
	'penalty',
	'qualifying',
	'retire',
	'sector',
	'session',
	'steward',
	'victory',
	'warmup',
	'weight',
	'wheel',
	'winglet',
	'braking',
	'cooling',
	'engine',
	'garage',
	'livery',
	'pitlane',
	'stint',
	'chicane'
];
