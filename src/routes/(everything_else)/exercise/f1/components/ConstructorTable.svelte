<script lang="ts">
	import { goto } from '$app/navigation';
	import type { Team } from '$lib/server/db/types';
	import { getContext } from 'svelte';

	export let constructors: Team[] = [];

	const teams: { [key: string]: Team } = getContext('teams');
</script>

<table>
	<tr>
		<th> Position </th>
		<th> Team </th>
		<th> Points Total </th>
	</tr>
	{#each constructors as team, idx}
		<tr class="constructor" on:click={() => goto(`/exercise/f1/constructor/${team.id}`)}>
			<td>
				{idx + 1}
			</td>
			<td>
				{team.name}
			</td>
			<td> 0 </td>
		</tr>
	{/each}
</table>

<style>
	.constructor {
		background-color: lightgray;
		padding: 10px;
		border: 1px solid black;
		color: black;
	}

	.constructor:hover {
		background-color: darkgray;
		cursor: pointer;
	}

	td {
		min-width: 50px;
		text-align: center;
	}
</style>
