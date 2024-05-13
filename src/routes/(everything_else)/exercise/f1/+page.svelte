<script lang="ts">
	import Drivers from '$lib/components/Drivers.svelte';
	import Select from '$lib/components/Select.svelte';
	import type { Season } from '$lib/server/db/types';
	import type { PageData } from './$types';

	export let data: PageData;

	let selectedSeason: Season;

	/**
	 * Fired when the select element changes
	 * This hits the api endpoint and loads the selected season
	 */
	async function change() {
		selectedSeason = await fetch(`/api?year=${selectedValue}`).then((r) => r.json());
	}

	function options(): { value: number; text?: string | undefined }[] {
		return data.options.map((o: number) => {
			return { value: o, text: `${o}` };
		});
	}

	let selectedValue: number = 2021;
</script>

<Drivers drivers={data.drivers} />
<!-- bind:<variable>[=variableName] is the syntax for two-way data binding in props -->
<!-- on:<eventName> is the syntax for event binding in svelte -->
<Select options={options()} bind:selectedValue on:change={() => change()} />

<div>{selectedValue}</div>

{#if selectedSeason}
	<span>{JSON.stringify(selectedSeason)}</span>
{/if}

<style>
</style>
