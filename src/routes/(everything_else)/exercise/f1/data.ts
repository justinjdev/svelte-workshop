import type { Driver, Race, Result, Team } from '$lib/server/db/types';

/**
 * FINDTHEDATA
 */

export const drivers: Driver[] = [
    { id: 1, name: 'Lando Norris',code: 'NOR', number: 4, teamId: 1, points: 100, nationality: 'UK', dateOfBirth: new Date() }
];

export const teams: Team[] = [
    { id: 1, name: 'McLaren', base: 'Woking, UK' }
];

export const races: Race[] = [
    { id: 1, trackName: 'Bahrain International Circuit', raceDate: new Date('2024-03-03'), country: 'Bahrain', isSprintRace: false, fastestLap: false }
];

export const results: Result[] = [
    { driverCode: 'VER', raceId: 1, finishingPosition: 1, pointsScored: 25, dnf: false, fastestLap: false }
];
