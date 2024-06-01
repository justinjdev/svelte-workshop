<script lang="ts">
	import GridCell from './GridCell.svelte';

	export let isActive = false;

	export let cells: number;
	export let rowNum = 0;

	export let entryValue: string[];

	export let correct: boolean[];
	export let transposed: boolean[];
</script>

<div class="row" id="row_{rowNum}" class:active={isActive}>
	{#each [...Array(cells).keys()] as i}
		<GridCell
			id="cell_${i}"
			content={entryValue[i]}
			correct={correct[i]}
			transposed={transposed[i]}
			activeRow={isActive}
		/>
	{/each}
</div>

<style>
	.row {
		display: flex;
		justify-content: center;
	}

	.active {
		scale: 1.02;
	}
</style>
