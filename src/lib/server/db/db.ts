import Database from 'better-sqlite3';
import type { Driver, Season } from './types';
import { DATABASE_PATH } from '$env/static/private';

class TheDatabase {
	private readonly db;

	constructor() {
		this.db = new Database(DATABASE_PATH, { verbose: console.log });
		this.db.pragma('journal_mode = WAL');
	}

	getTenDrivers(): Driver[] {
		const stmt = this.db.prepare('SELECT * FROM drivers LIMIT 10;');
		const rows = stmt.all();
		return rows as Driver[];
	}

	getSeasons(): number[] {
		const stmt = this.db.prepare('SELECT year FROM seasons;');
		const rows = stmt.all();
		return rows.map((season) => (season as Season).year);
	}

	getSeasonByYear(year: string): Season {
		const stmt = this.db.prepare('SELECT * FROM seasons WHERE year = ?;');
		const row = stmt.get(year);
		return row as Season;
	}

	getDriversByYear(year: number): Driver[] {
		const stmt = this.db.prepare(
			'WITH participants(driverId) as (select distinct(driverId) from results JOIN races on results.raceId = races.raceId where races.year = ?) select * from drivers JOIN participants on drivers.driverId = participants.driverId;'
		);
		const rows = stmt.all(year);
		return rows as Driver[];
	}
}

export const db = new TheDatabase();
