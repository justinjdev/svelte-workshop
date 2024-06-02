<script lang="ts">
	/**
	 * A given key on the on-screen keyboard, with custom event dispatching
	 */

	import { createEventDispatcher } from 'svelte';
	import { pastGuesses } from '../stores';

	// custom dispatcher?

	export let key: string;

	const keyPress = key === '↵' ? 'Enter' : key === '⌫' ? 'Backspace' : key;

	// custom event dispatch?
	
</script>

<!-- using the class directive to dynamically style -->
<!-- add the transposed and correct status here -->
<button
	class="key"
	class:guessed={$pastGuesses.has(keyPress)}
	class:transposed={false} 
	class:correct={false}
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
