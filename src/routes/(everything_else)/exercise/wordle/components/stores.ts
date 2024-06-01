import { writable } from 'svelte/store';

export const guessOutcomes = writable(new Map<string, number>());
export const pastGuesses = writable(new Set<String>());

/**
 * 0 = correct
 * 1 = transposed
 * 2 = wrong
 */
export interface GuessedLetter {
	key: string;
	status: number;
}
