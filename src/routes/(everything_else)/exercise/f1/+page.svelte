<script lang="ts">
	import type { Driver } from '$lib/server/db/types';
	import { setContext } from 'svelte';
	import type { PageData } from './$types';
	import ConstructorTable from './components/ConstructorTable.svelte';
	import DriverTable from './components/DriverTable.svelte';

	export let data: PageData;

	// this is unnecessary but I do it anyway
	function preprocess(drivers: Driver[]) {
		return drivers.map((driver) => {
			const names = driver.name.split(' ');
			return {
				...driver,
				name: `${names[1].toLocaleUpperCase()} ${names[0]}`
			};
		});
	}

	$: drivers = preprocess(data.drivers);

	// put the team data in the component context as a map
	setContext(
		'teams',
		data.teams.reduce((acc, team) => Object.assign(acc, { [team.id]: team }), {})
	);
</script>

<div class="page-wrapper">
	<div class="current">
		<h2>Current Standings</h2>
		<div class="current-table">
			<DriverTable {drivers} />
			<ConstructorTable constructors={data.teams} />
		</div>
	</div>
</div>

<style>
	h2 {
		grid-column: 1 / -1;
	}

	.page-wrapper {
		padding: 20px;
		width: 100%;
		/* ABF - always be flexing */
		display: flex;
		justify-content: center;
	}

	.current > h2 {
		text-align: center;
	}

	.current {
		background-color: rgba(0, 0, 0, 0.5);
		padding: 10px;
		width: 80vw;
	}

	.current-table {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 20px;
	}
</style>
