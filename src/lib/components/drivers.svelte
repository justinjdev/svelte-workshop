<script lang="ts">
	import type { Driver } from '$lib/server/db/types';
	import DriverCard from './driverCard.svelte';

	export let drivers: Driver[];
</script>

<div class="drivers">
	{#each drivers as driver}
		<DriverCard {driver} />
	{/each}
</div>

<style>
	.drivers {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		gap: 1em;
	}
</style>
