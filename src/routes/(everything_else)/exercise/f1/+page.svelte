<script lang="ts">
	import type { Driver } from '$lib/server/db/types';
	import { setContext } from 'svelte';
	import type { PageData } from './$types';
	import DriverCard from './components/DriverCard.svelte';
	import DriverTable from './components/DriverTable.svelte';

	export let data: PageData;

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

	setContext(
		'teams',
		data.teams.reduce((acc, team) => ({ ...acc, [team.id]: team }), {})
	);
</script>

<div class="page-wrapper">
	<div class="current">
		<h2>Current Standings</h2>
		<div class="current-table">
			<DriverTable drivers={data.drivers} />

			<div class="drivers standings">
				<div class="left">
					<div class="leader">
						<span>Current Leader</span>
						<DriverCard driver={drivers[0]} />
					</div>
				</div>
				<div class="right">
					<div>
						<span>2nd Place</span>
						<DriverCard driver={drivers[1]} mini={true} />
					</div>
					<div>
						<span>3rd Place</span>
						<DriverCard driver={drivers[2]} mini={true} />
					</div>
				</div>
			</div>
		</div>
	</div>

	<img src="/assets/avatars/ver.webp" alt="avatar of ver" class="avatar" />
</div>

<style>
	h2 {
		grid-column: 1 / -1;
	}
	.page-wrapper {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		padding: 20px;
	}

	.current > h2 {
		text-align: center;
	}

	.current {
		border: 1px solid black;
		padding: 10px;
	}

	.current-table {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 20px;
	}

	.standings {
		display: flex;
	}

	.left,
	.right {
		flex: 1;
	}
</style>
