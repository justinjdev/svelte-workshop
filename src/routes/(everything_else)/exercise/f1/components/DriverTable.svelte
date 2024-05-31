<script lang="ts">
	import type { Driver, Team } from '$lib/server/db/types';
	import { getContext } from 'svelte';

	export let drivers: Driver[];

	const teams: { [key: string]: Team } = getContext('teams');
</script>

<table>
	<h2>Drivers:</h2>
	<tr>
		<th> Position </th>
		<th> Driver </th>
		<th> Code </th>
		<th> Team </th>
		<th> Points Total </th>
	</tr>
	{#each drivers as driver, idx}
		<tr class="driver">
			<td>
				{idx + 1}
			</td>
			<td>
				{driver.name}
			</td>
			<td>
				{driver.code}
			</td>
			<td>
				{teams[driver.teamId].name}
			</td>
			<td>
				{driver.points}
			</td>
		</tr>
	{/each}
</table>

<style>
	.driver {
		background-color: lightgray;
		padding: 10px;
		border: 1px solid black;
		color: black;
	}

	.driver:hover {
		background-color: darkgray;
	}

	td {
		min-width: 50px;
		text-align: center;
	}
</style>
