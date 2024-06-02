<script lang="ts">
	import { getAWord } from './grid';
	import Grid from './Grid.svelte';
	import Keyboard from './keyboard/Keyboard.svelte';

	let isOver = false;
	let didWin = false;
	let answer = getAWord();

	console.log(answer);

	function handleGameOver(e: any) {
		isOver = true;
		didWin = e.detail.won;
	}

	let clickedKey: string = '';

	/**
	 * Handle the key click event
	 * @param e
	 */
	function handleClick(e: any) {
		clickedKey = e.detail.key;
	}
</script>

<p class="rip msg-wrapper" class:hidden={answer.length <= 6}>(I'm so sorry, good luck)</p>

<!-- custom event binding -->
<Grid on:gameOver={handleGameOver} {answer} bind:clickedKey rowCount={answer.length + 1} />

<!-- class: directive -->
<div class:hidden={!isOver} class="msg-wrapper" class:won={didWin}>
	{didWin ? 'Congratulations!' : `It was \'${answer}\'. Maybe next time :(`}
</div>

<div class="kbContainer">
	<Keyboard />
</div>

<style>
	.kbContainer {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 200px;
	}

	.hidden {
		opacity: 0%;
	}

	.msg-wrapper {
		font-family: 'Comic Sans MS';
		text-align: center;
		color: palevioletred;
	}

	.won {
		color: greenyellow;
	}
</style>
