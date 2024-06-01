<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Row from './Row.svelte';
	import { guessOutcomes, pastGuesses } from './stores';

	export let answer: string;
	export let rowCount: number;
	export let clickedKey: string;

	let cellCount: number = answer.length;

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

	export function keydown(e: any) {
		if (hasWon || hasLost) {
			return;
		}
		if (e.key === 'Enter') {
			if (currIdx != cellCount) {
				// don't let enter if we're not full
				return;
			}
			currIdx = 0;
			dealWithGuessFallout();
			return;
		}

		if (e.key === 'Backspace' && currIdx > 0) {
			currIdx -= 1;
			rowValues[activeRow][currIdx] = '';
			return;
		}

		if (currIdx == cellCount) {
			return;
		}

		if ((e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode >= 97 && e.keyCode <= 122)) {
			rowValues[activeRow][currIdx] = e.key;
			currIdx += 1;
			return;
		}
	}

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
			pastGuesses.update((current) => {
				current.add(guess[i]);
				return current;
			});
			guessOutcomes.update((current) => {
				current.set(guess[i], resArr[i]);
				return current;
			});
		}

		active[activeRow] = false;

		hasWon = resArr.every((elem) => elem == 0);

		if (!hasWon) {
			if (activeRow < rowCount - 1) {
				active[++activeRow] = true;
			} else {
				hasLost = true;
			}
		}

		return resArr;
	}

	$: if (hasWon || hasLost) {
		dispatch('gameOver', { won: hasWon });
	}

	$: if (clickedKey) {
		const argTransf = {
			key: clickedKey,
			keyCode: clickedKey.charCodeAt(0)
		};

		keydown(argTransf);
		clickedKey = '';
	}
</script>

<!-- <svelte:window on:keydown={keydown} /> -->
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
