import Database from 'better-sqlite3';
import { DATABASE_URL } from '$env/static/private';
import type { Driver } from './types';

class TheDatabase {
	private readonly db;

	constructor() {
		this.db = new Database(DATABASE_URL, { verbose: console.log });
		this.db.pragma('journal_mode = WAL');
	}

	getTenDrivers(): Driver[] {
		const stmt = this.db.prepare('SELECT * FROM drivers;');
		const rows = stmt.all({ limit: 10 });
		return rows as Driver[];
	}
}
