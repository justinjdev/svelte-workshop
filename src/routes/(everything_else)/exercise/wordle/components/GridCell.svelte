<script>
	export let content = '';
	export let id = '';
	export let correct = false;
	export let transposed = false;
	export let activeRow = true;
</script>

<div class="cell" {id} class:transposed class:correct class:active={activeRow}>
	{content.toUpperCase()}
</div>

<style>
	.active {
		background-color: #333;
	}

	.cell {
		width: 50px;
		height: 50px;
		border: 1px solid lightcyan;
		margin: 2px;
		font-family: 'Comic Sans MS';
		display: flex;
		justify-content: center;
		align-items: center;
		color: lightcyan;
		font-size: 2rem;
	}

	.correct {
		border: 1.2px solid lightgreen;
		background-color: darkgreen;
	}

	.transposed {
		border: 1.2px solid yellow;
		background-color: darkgoldenrod;
	}
</style>
