export interface F1Driver {
	name: string;
	number: number;
	team: string;
	points: number;
	nationality: string;
	dateOfBirth: string; // YYYY-MM-DD format
	code: string;
}

export const f1Drivers: F1Driver[] = [
	{
		name: 'Max Verstappen',
		number: 33,
		team: 'Red Bull Racing',
		points: 136,
		nationality: 'Dutch',
		dateOfBirth: '1997-09-30',
		code: 'VER'
	},
	{
		name: 'Sergio Perez',
		number: 11,
		team: 'Red Bull Racing',
		points: 103,
		nationality: 'Mexican',
		dateOfBirth: '1990-01-26',
		code: 'PER'
	},
	{
		name: 'Charles Leclerc',
		number: 16,
		team: 'Ferrari',
		points: 98,
		nationality: 'Monegasque',
		dateOfBirth: '1997-10-16',
		code: 'LEC'
	},
	{
		name: 'Lando Norris',
		number: 4,
		team: 'McLaren',
		points: 83,
		nationality: 'British',
		dateOfBirth: '1999-11-13',
		code: 'NOR'
	},
	{
		name: 'Carlos Sainz',
		number: 55,
		team: 'Ferrari',
		points: 83,
		nationality: 'Spanish',
		dateOfBirth: '1994-09-01',
		code: 'SAI'
	},
	{
		name: 'Oscar Piastri',
		number: 81,
		team: 'McLaren',
		points: 41,
		nationality: 'Australian',
		dateOfBirth: '2001-04-06',
		code: 'PIA'
	},
	{
		name: 'George Russell',
		number: 63,
		team: 'Mercedes',
		points: 37,
		nationality: 'British',
		dateOfBirth: '1998-02-15',
		code: 'RUS'
	},
	{
		name: 'Fernando Alonso',
		number: 14,
		team: 'Aston Martin',
		points: 33,
		nationality: 'Spanish',
		dateOfBirth: '1981-07-29',
		code: 'ALO'
	},
	{
		name: 'Lewis Hamilton',
		number: 44,
		team: 'Mercedes',
		points: 27,
		nationality: 'British',
		dateOfBirth: '1985-01-07',
		code: 'HAM'
	},
	{
		name: 'Yuki Tsunoda',
		number: 22,
		team: 'AlphaTauri',
		points: 14,
		nationality: 'Japanese',
		dateOfBirth: '2000-05-11',
		code: 'TSU'
	},
	{
		name: 'Lance Stroll',
		number: 18,
		team: 'Aston Martin',
		points: 9,
		nationality: 'Canadian',
		dateOfBirth: '1998-10-29',
		code: 'STR'
	},
	{
		name: 'Oliver Bearman',
		number: 47,
		team: 'Ferrari',
		points: 6,
		nationality: 'British',
		dateOfBirth: '2005-03-12',
		code: 'BEA'
	},
	{
		name: 'Nico Hulkenberg',
		number: 27,
		team: 'Haas F1 Team',
		points: 6,
		nationality: 'German',
		dateOfBirth: '1987-08-19',
		code: 'HUL'
	},
	{
		name: 'Daniel Ricciardo',
		number: 3,
		team: 'AlphaTauri',
		points: 5,
		nationality: 'Australian',
		dateOfBirth: '1989-07-01',
		code: 'RIC'
	},
	{
		name: 'Esteban Ocon',
		number: 31,
		team: 'Alpine',
		points: 1,
		nationality: 'French',
		dateOfBirth: '1996-09-17',
		code: 'OCO'
	},
	{
		name: 'Kevin Magnussen',
		number: 20,
		team: 'Haas F1 Team',
		points: 1,
		nationality: 'Danish',
		dateOfBirth: '1992-10-05',
		code: 'MAG'
	},
	{
		name: 'Alexander Albon',
		number: 23,
		team: 'Williams',
		points: 0,
		nationality: 'Thai',
		dateOfBirth: '1996-03-23',
		code: 'ALB'
	},
	{
		name: 'Zhou Guanyu',
		number: 24,
		team: 'Alfa Romeo',
		points: 0,
		nationality: 'Chinese',
		dateOfBirth: '1999-05-30',
		code: 'ZHO'
	},
	{
		name: 'Pierre Gasly',
		number: 10,
		team: 'Alpine',
		points: 0,
		nationality: 'French',
		dateOfBirth: '1996-02-07',
		code: 'GAS'
	},
	{
		name: 'Valtteri Bottas',
		number: 77,
		team: 'Alfa Romeo',
		points: 0,
		nationality: 'Finnish',
		dateOfBirth: '1989-08-28',
		code: 'BOT'
	},
	{
		name: 'Logan Sargeant',
		number: 2,
		team: 'Williams',
		points: 0,
		nationality: 'American',
		dateOfBirth: '2000-12-31',
		code: 'SAR'
	}
];

export interface Race {
	id: number;
	trackName: string;
	raceDate: string;
	country: string;
	isSprintRace: boolean;
}

export const f1Tracks2024: Race[] = [
	{
		id: 1,
		trackName: 'Bahrain International Circuit',
		raceDate: '2024-03-03',
		country: 'Bahrain',
		isSprintRace: false
	},
	{
		id: 2,
		trackName: 'Jeddah Corniche Circuit',
		raceDate: '2024-03-17',
		country: 'Saudi Arabia',
		isSprintRace: false
	},
	{
		id: 3,
		trackName: 'Melbourne Grand Prix Circuit',
		raceDate: '2024-03-31',
		country: 'Australia',
		isSprintRace: false
	},
	{
		id: 4,
		trackName: 'Shanghai International Circuit',
		raceDate: '2024-04-14',
		country: 'China',
		isSprintRace: false
	},
	{
		id: 5,
		trackName: 'Shanghai International Circuit',
		raceDate: '2024-04-13',
		country: 'China',
		isSprintRace: true
	},
	{
		id: 6,
		trackName: 'Baku City Circuit',
		raceDate: '2024-04-28',
		country: 'Azerbaijan',
		isSprintRace: false
	},
	{
		id: 7,
		trackName: 'Miami International Autodrome',
		raceDate: '2024-05-05',
		country: 'USA',
		isSprintRace: false
	},
	{
		id: 8,
		trackName: 'Miami International Autodrome',
		raceDate: '2024-05-04',
		country: 'USA',
		isSprintRace: true
	},
	{
		id: 9,
		trackName: 'Circuit de Barcelona-Catalunya',
		raceDate: '2024-05-19',
		country: 'Spain',
		isSprintRace: false
	},
	{
		id: 10,
		trackName: 'Circuit de Monaco',
		raceDate: '2024-05-26',
		country: 'Monaco',
		isSprintRace: false
	},
	{
		id: 11,
		trackName: 'Circuit Gilles Villeneuve',
		raceDate: '2024-06-16',
		country: 'Canada',
		isSprintRace: false
	},
	{
		id: 12,
		trackName: 'Red Bull Ring',
		raceDate: '2024-06-30',
		country: 'Austria',
		isSprintRace: false
	},
	{
		id: 13,
		trackName: 'Red Bull Ring',
		raceDate: '2024-06-29',
		country: 'Austria',
		isSprintRace: true
	},
	{
		id: 14,
		trackName: 'Silverstone Circuit',
		raceDate: '2024-07-14',
		country: 'United Kingdom',
		isSprintRace: false
	},
	{
		id: 15,
		trackName: 'Hungaroring',
		raceDate: '2024-07-28',
		country: 'Hungary',
		isSprintRace: false
	},
	{
		id: 16,
		trackName: 'Spa-Francorchamps',
		raceDate: '2024-08-25',
		country: 'Belgium',
		isSprintRace: false
	},
	{
		id: 17,
		trackName: 'Zandvoort',
		raceDate: '2024-09-01',
		country: 'Netherlands',
		isSprintRace: false
	},
	{ id: 18, trackName: 'Monza', raceDate: '2024-09-08', country: 'Italy', isSprintRace: false },
	{
		id: 19,
		trackName: 'Marina Bay Street Circuit',
		raceDate: '2024-09-22',
		country: 'Singapore',
		isSprintRace: false
	},
	{
		id: 20,
		trackName: 'Suzuka International Racing Course',
		raceDate: '2024-10-13',
		country: 'Japan',
		isSprintRace: false
	},
	{
		id: 21,
		trackName: 'Circuit of The Americas',
		raceDate: '2024-10-27',
		country: 'USA',
		isSprintRace: false
	},
	{
		id: 22,
		trackName: 'Circuit of The Americas',
		raceDate: '2024-10-26',
		country: 'USA',
		isSprintRace: true
	},
	{
		id: 23,
		trackName: 'Autódromo Hermanos Rodríguez',
		raceDate: '2024-11-03',
		country: 'Mexico',
		isSprintRace: false
	},
	{
		id: 24,
		trackName: 'Interlagos Circuit',
		raceDate: '2024-11-17',
		country: 'Brazil',
		isSprintRace: false
	},
	{
		id: 25,
		trackName: 'Interlagos Circuit',
		raceDate: '2024-11-16',
		country: 'Brazil',
		isSprintRace: true
	},
	{
		id: 26,
		trackName: 'Las Vegas Street Circuit',
		raceDate: '2024-11-24',
		country: 'USA',
		isSprintRace: false
	},
	{
		id: 27,
		trackName: 'Yas Marina Circuit',
		raceDate: '2024-12-01',
		country: 'UAE',
		isSprintRace: false
	},
	{
		id: 28,
		trackName: 'Yas Marina Circuit',
		raceDate: '2024-11-30',
		country: 'UAE',
		isSprintRace: true
	}
];

export type DriverResult = {
	driverCode: string;
	raceId: number;
	finishingPosition: number;
	pointsScored: number;
};

const placePointsMap = new Map<number, number>([
	[1, 25],
	[2, 18],
	[3, 15],
	[4, 12],
	[5, 10],
	[6, 8],
	[7, 6],
	[8, 4],
	[9, 2],
	[10, 1]
]);

export function placeToPoints(place: number): number {
	return placePointsMap.get(place) || 0;
}
