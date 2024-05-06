<script lang="ts">
	import MarkdownWrapper from './MarkdownWrapper.svelte';

	// your script goes here
	const colors = [
		{ value: 'white', text: 'White' },
		{ value: 'red', text: 'Red' },
		{ value: 'green', text: 'Green' },
		{ value: 'blue', text: 'Blue' }
	];

	let selectedColor = 'red';

	$: console.log(selectedColor);
</script>

<MarkdownWrapper>
	<select name="colors" id="colors" on:change={(event) => (selectedColor = event.target.value)}>
		{#each colors as color}
			<option value={color.value} selected={selectedColor === color.value}>{color.text}</option>
		{/each}
	</select>

	<div class="colored" style="--color:{selectedColor}"></div>
</MarkdownWrapper>

<style>
	.colored {
		width: 200px;
		height: 200px;
		border: 1px solid #ccc;
		border-radius: 5px;
		background-color: var(--color);
	}
</style>
