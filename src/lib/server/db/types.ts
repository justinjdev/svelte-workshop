/**
 * DB types
 */

export type Driver = {
	id: number;
	name: string;
	number: number;
	teamId: number;
	points: number;
	nationality: string;
	dateOfBirth: Date;
	code: string;
};

export type Race = {
	id: number;
	trackName: string;
	raceDate: Date;
	country: string;
	isSprintRace: boolean;
	fastestLap: boolean;
};

export type Result = {
	driverCode: string;
	raceId: number;
	finishingPosition: number;
	pointsScored: number;
	dnf: boolean;
	fastestLap: boolean;
};

export type Team = {
	id: number;
	name: string;
	base: string;
};
