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
}

export const db = new TheDatabase();
