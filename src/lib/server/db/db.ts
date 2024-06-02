import { DATABASE_PATH } from '$env/static/private';
import Database from 'better-sqlite3';
import type { Driver, Race, Team } from './types';

/**
 * Wrapper implementation for the sqlite3 database.
 *
 * DATABASEBABY
 */
export default class SqliteDB {
	private readonly db;

	constructor() {
		this.db = new Database(DATABASE_PATH);
		this.db.pragma('journal_mode = WAL');
	}

	getAllDrivers(): Driver[] {
		const stmt = this.db.prepare('SELECT * FROM drivers ORDER BY points DESC;');
		const rows = stmt.all();
		return rows as Driver[];
	}

	getAllRaces(): Race[] {
		const stmt = this.db.prepare('SELECT * FROM races;');
		const rows = stmt.all();
		return rows as Race[];
	}

	getAllTeams(): Team[] {
		const stmt = this.db.prepare('SELECT * FROM teams;');
		const rows = stmt.all();
		return rows as Team[];
	}

	getDriverByCode(code: string): Driver {
		const stmt = this.db.prepare('SELECT * FROM drivers WHERE code = ?;');
		const row = stmt.get(code);
		return row as Driver;
	}

	getDriverById(id: number): Driver {
		const stmt = this.db.prepare('SELECT * FROM drivers WHERE id = ?;');
		const row = stmt.get(id);
		return row as Driver;
	}

	getPointsByDriverCode(code: string): number {
		const stmt = this.db.prepare('SELECT sum(points) FROM results WHERE code = ?;');
		const row = stmt.get(code);

		return row as number;
	}

	getResultsByRaceId(raceId: number) {
		const stmt = this.db.prepare('SELECT * FROM results WHERE raceId = ?;');
		const rows = stmt.all(raceId);
		return rows;
	}

	getTeamById(id: number) {
		const stmt = this.db.prepare('SELECT * FROM teams WHERE id = ?;');
		const row = stmt.get(id);
		return row as Team;
	}

	getPointsByTeamId(id: number) {
		const stmt = this.db.prepare(
			'SELECT SUM(r.pointsScored) AS points FROM teams t JOIN drivers d ON t.id = d.teamId JOIN results r ON d.code = r.driverCode WHERE t.id = ? GROUP BY t.name;'
		);
		const row = stmt.get(id);
		return row as number;
	}
}
