<script lang="ts">
	import Drivers from '$lib/components/drivers.svelte';
	import Select from '$lib/components/select.svelte';
	import type { Season } from '$lib/server/db/types';
	import type { PageData } from './$types';
	import { onMount } from 'svelte';

	export let data: PageData;

	let selectedSeason: Season;

	async function change() {
		console.log('onchange');
		selectedSeason = await fetch(`/api?year=${selectedValue}`)
			.then((r) => r.json())
			.then((data) => data);
	}

	// onMount(() => {
	// 	onChange();
	// });

	let selectedValue: number = 2021;

	// $: selectedValue && change();
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<Drivers drivers={data.drivers} />
<Select
	options={data.options.map((o) => {
		return { value: o, text: `${o}` };
	})}
	bind:selectedValue
	on:change={() => change()}
/>

<div>{selectedValue}</div>

{#if selectedSeason}
	<span>{JSON.stringify(selectedSeason)}</span>
{/if}

<style>
</style>
