<script lang="ts" generics="T">
	import type { Season } from '$lib/server/db/types';

	// props
	// generics are fun, aren't they?
	export let options: { value: T; text?: string }[];

	// state
	let selectedValue: T;
	let selectedSeason: Season;

	// reactive statement
	$: console.log(selectedValue);

	const loadSeason = async () => {
		selectedSeason = await fetch(`/api?year=${selectedValue}`)
			.then((res) => res.json())
			.then((data) => {
				return data;
			});
	};
</script>

<select class="selector" bind:value={selectedValue} on:change={() => loadSeason()}>
	<!-- looping -->
	{#each options as option}
		<option value={option.value}>{option.text ? option.text : option.value}</option>
	{/each}

	<!-- conditional rendering -->
	{#if selectedSeason}
		<p>{selectedSeason}</p>
	{/if}
</select>

<style>
	.selector {
		width: 200px;
		padding: 10px;
		border-radius: 5px;
		border: 1px solid #ccc;
		font-size: 1em;
	}
</style>
