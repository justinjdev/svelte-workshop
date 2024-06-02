<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Row from './Row.svelte';
	import { GuessedLetter, pastGuesses } from './stores';

	export let answer: string;
	export let rowCount: number;
	export let clickedKey: string;

	// number of cells in the answer, this depends on the randomly chosen word because I'm sadistic
	let cellCount: number = answer.length;

	// game state
	let hasWon: boolean = false;
	let hasLost: boolean = false;

	// used for checking guess status
	const answerArr: string[] = answer.split('');

	// tracking the active row
	let activeRow: number = 0;

	// lets the row know which is active for style adjustments
	// could do that here now after refactoring
	let active: boolean[] = [true, ...Array(rowCount - 2).fill(false)];

	// current loc in the answer cell range (0..answer.length-1)
	// reset with each row advancement
	let currIdx = 0;

	// get row# of arrays, filled with cell# empties
	let rowValues: string[][] = Array.from(Array(rowCount), () => Array(cellCount).fill(''));
	let correctValues: boolean[][] = Array.from(Array(rowCount), () => Array(cellCount).fill(false));
	let transposedValues: boolean[][] = Array.from(Array(rowCount), () =>
		Array(cellCount).fill(false)
	);

	const dispatch = createEventDispatcher();

	/**
	 * Handles keydown events
	 * @param e the event
	 */
	export function keydown(e: any) {
		// don't let entry if the game is complete
		if (hasWon || hasLost) {
			return;
		}

		// try to submit
		if (e.key === 'Enter') {
			if (currIdx != cellCount) {
				// don't let enter if we're not full
				return;
			}
			// reset the position in the row
			currIdx = 0;
			dealWithGuessFallout();
			return;
		}

		// backspace - deleting the last entry
		if (e.key === 'Backspace' && currIdx > 0) {
			currIdx -= 1;
			rowValues[activeRow][currIdx] = '';
			return;
		}

		// ignore if we're full (don't overflow)
		if (currIdx == cellCount) {
			return;
		}

		// only allow letters
		if ((e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode >= 97 && e.keyCode <= 122)) {
			rowValues[activeRow][currIdx] = e.key;
			currIdx += 1;
			return;
		}
	}

	/**
	 * Handles the fallout from a guess...
	 *
	 * In other words, processes the guess and updates the array states
	 */
	function dealWithGuessFallout() {
		let guessingFor = activeRow;
		const resArr = handleGuess(rowValues[activeRow]);
		resArr.forEach((element, idx) => {
			if (element == 0) {
				correctValues[guessingFor][idx] = true;
			} else if (element == 1) {
				transposedValues[guessingFor][idx] = true;
			}
		});
	}

	/**
	 * 0 = correct
	 * 1 = transposed
	 * 2 = wrong
	 *
	 * This takes a guess and updates the stores with the results
	 */
	function handleGuess(guess: string[]) {
		// make a guess array
		const resArr = [...Array(cellCount).fill(2)];
		// TODO should prob handle occurrences properly
		for (let i = 0; i < guess.length; i++) {
			if (guess[i] === answerArr[i]) {
				resArr[i] = 0;
			} else if (answerArr.includes(guess[i])) {
				resArr[i] = 1;
			}

			// add to the past guesses
			pastGuesses.update((current) => {
				current.add(guess[i]);
				return current;
			});

			// add the outcomes - this goes to the key component for highlighting
			
		}

		// shift the active row down
		active[activeRow] = false;

		// check if we've won (every array letter guess status is 0)
		hasWon = resArr.every((elem) => elem == 0);

		// if we haven't won, check if we've lost (we've run out of rows)
		if (!hasWon) {
			if (activeRow < rowCount - 1) {
				active[++activeRow] = true;
			} else {
				hasLost = true;
			}
		}

		return resArr;
	}

	// dispatch the game over event if we've won or lost, with the status
	$: if (hasWon || hasLost) {
		dispatch('gameOver', { won: hasWon });
	}

	// handle manually clicking the on-screen keyboard to enter data
	$: if (clickedKey) {
		const argTransf = {
			key: clickedKey,
			keyCode: clickedKey.charCodeAt(0)
		};

		keydown(argTransf);
		clickedKey = '';
	}
</script>

<!-- attach the keydown listener to the DOM -->
<svelte:window on:keydown={keydown} />

<Row
	rowNum={0}
	isActive={active[0]}
	cells={cellCount}
	entryValue={rowValues[0]}
	correct={correctValues[0]}
	transposed={transposedValues[0]}
/>
{#each [...Array(rowCount - 1).keys()] as i}
	<Row
		rowNum={i + 1}
		isActive={active[i + 1]}
		cells={cellCount}
		entryValue={rowValues[i + 1]}
		correct={correctValues[i + 1]}
		transposed={transposedValues[i + 1]}
	/>
{/each}
