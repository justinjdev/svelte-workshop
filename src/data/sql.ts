import * as fs from 'fs';
import * as sqlite3 from 'sqlite3';

// Step 1: Read CSV files and parse their contents
function readCSV(filePath: string): string[][] {
	return fs
		.readFileSync(filePath, 'utf-8')
		.split('\n')
		.map((line: string) => line.split(','));
}

// Step 2: Create SQLite database
const db = new sqlite3.Database('formula1.db');

// Step 3: Define table creation queries for Drivers and Circuits
const createDriversTableQuery = `
  CREATE TABLE IF NOT EXISTS Drivers (
    driverId INTEGER PRIMARY KEY AUTOINCREMENT,
    driverRef TEXT,
    number INTEGER,
    code TEXT,
    forename TEXT,
    surname TEXT,
    dob DATE,
    nationality TEXT,
    url TEXT
  )
`;

const createCircuitsTableQuery = `
  CREATE TABLE IF NOT EXISTS Circuits (
    circuitId INTEGER PRIMARY KEY AUTOINCREMENT,
    circuitRef TEXT,
    name TEXT,
    location TEXT,
    country TEXT,
    lat REAL,
    lng REAL,
    alt INTEGER,
    url TEXT
  )
`;

// Step 4: Create tables in the database
db.serialize(() => {
	db.run(createDriversTableQuery);
	db.run(createCircuitsTableQuery);

	// Step 5: Read data from CSV and insert into the database for Drivers
	const driversData = readCSV('../../db/drivers.csv');
	const insertDriverQuery = `
    INSERT INTO Drivers (driverRef, number, code, forename, surname, dob, nationality, url)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;

	driversData.slice(1).forEach((row) => {
		db.run(insertDriverQuery, row, (err) => {
			if (err) {
				console.error('Error inserting driver:', err.message);
			}
		});
	});

	// Step 6: Read data from CSV and insert into the database for Circuits
	const circuitsData = readCSV('../../db/circuits.csv');
	const insertCircuitQuery = `
    INSERT INTO Circuits (circuitRef, name, location, country, lat, lng, alt, url)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;

	circuitsData.slice(1).forEach((row) => {
		db.run(insertCircuitQuery, row, (err) => {
			if (err) {
				console.error('Error inserting circuit:', err.message);
			}
		});
	});
});

// Close the database connection
db.close();
