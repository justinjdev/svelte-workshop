import { writable } from 'svelte/store';

export const pastGuesses = writable(new Set<String>());

/**
 * 0 = correct
 * 1 = transposed
 * 2 = wrong
 *
 *
 */
export class GuessedLetter {
	key: string;
	status: number;

	/**
	 * Encapsulates the state of a guessed letter. We could also add repetitions and multiple occurrence handling here.
	 *
	 * @param key the key (letter) that was guessed
	 * @param status the status of the guess (0, 1, or 2)
	 */
	constructor(key: string, status: number) {
		this.key = key;
		this.status = status;
	}

	public isCorrect(): boolean {
		return this.status === 0;
	}

	public isTransposed(): boolean {
		return this.status === 1;
	}

	public isWrong(): boolean {
		return this.status === 2;
	}
}
