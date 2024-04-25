export type Circuit = {
	circuitId: number;
	circuitRef: string;
	name: string;
	location: string;
	country: string;
	url: string;
};

export type ConstructorResult = {
	raceId: number;
	constructorId: number;
	points: number;
	status: string;
};

export type ConstructorStanding = {
	constructorId: number;
	points: number;
	position: number;
	positionText: string;
	wins: number;
};

export type Constructor = {
	constructorId: number;
	constructorRef: string;
	name: string;
	nationality: string;
	url: string;
};

export type DriverStanding = {
	driverId: number;
	points: number;
	position: number;
	positionText: string;
	wins: number;
};

export type Driver = {
	driverId: number;
	driverRef: string;
	number: number;
	code: string;
	forename: string;
	surname: string;
	dob: string;
	nationality: string;
	url: string;
};

export type LapTime = {
	raceId: number;
	driverId: number;
	lap: number;
	milliseconds: number;
};

export type PitStop = {
	raceId: number;
	driverId: number;
	stop: number;
	lap: number;
	time: string;
	duration: number;
};

export type Qualifying = {
	raceId: number;
	driverId: number;
	constructorId: number;
	number: number;
	position: number;
	q1: string;
	q2: string;
	q3: string;
};

export type Race = {
	raceId: number;
	year: number;
	round: number;
	circuitId: number;
	name: string;
	date: string;
	time: string;
	url: string;
};

export type Result = {
	resultId: number;
	raceId: number;
	driverId: number;
	constructorId: number;
	number: number;
	grid: number;
	position: number;
	positionText: string;
	positionOrder: number;
	points: number;
	laps: number;
	time: string;
	milliseconds: number;
	fastestLap: number;
	rank: number;
	fastestLapTime: string;
	fastestLapSpeed: string;
	statusId: number;
};

export type Season = {
	year: number;
	url: string;
};

export type SprintResult = {
	raceId: number;
	driverId: number;
	position: number;
	points: number;
};

export type Status = {
	statusId: number;
	status: string;
};
