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

	function handleClick(e: any) {
		clickedKey = e.detail.key;
	}
</script>

<Grid on:gameOver={handleGameOver} {answer} bind:clickedKey rowCount={answer.length + 1} />

<div class:hidden={!isOver} class="msg-wrapper" class:won={didWin}>
	{didWin ? 'Congratulations!' : `It was \'${answer}\'. Maybe next time :(`}
</div>

<div class="kbContainer">
	<Keyboard on:keyClick={handleClick} />
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
