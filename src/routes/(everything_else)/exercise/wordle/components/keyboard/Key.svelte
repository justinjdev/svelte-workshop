<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { guessOutcomes, pastGuesses } from '../stores';

	const dispatch = createEventDispatcher();

	export let key: string;

	const keyPress = key === '↵' ? 'Enter' : key === '⌫' ? 'Backspace' : key;

	function clickToKeydown() {
		dispatch('keyClick', { key: keyPress });
	}
</script>

<button
	class="key"
	on:click|preventDefault={clickToKeydown}
	class:guessed={$pastGuesses.has(keyPress)}
	class:transposed={$guessOutcomes.get(keyPress) == 1}
	class:correct={$guessOutcomes.get(keyPress) == 0}
>
	{key}
</button>

<style>
	.key {
		height: 35px;
		min-width: 40px;
		padding: 0px 2px 0px 2px;
		border: 1px solid lightcyan;
		background-color: #333;
		margin: 1px;
		color: lightcyan;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		font-size: large;
	}

	.guessed {
		background-color: darkred;
	}

	.correct {
		background-color: darkgreen;
	}

	.transposed {
		background-color: darkgoldenrod;
	}
</style>
