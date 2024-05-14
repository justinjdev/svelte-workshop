<script lang="ts">
	import type { Driver } from '$lib/server/db/types';

	export let driver: Driver;
	export let mini: Boolean = false;
</script>

<div class="driver" class:mini>
	{#if !mini}
		<img
			src="/assets/avatars/{driver.code.toLowerCase()}.webp"
			alt="avatar of {driver.name}"
			class="avatar"
		/>
	{/if}
	<h2>{driver.name}</h2>
	<p>{driver.points}</p>
</div>

<style>
	.driver {
		text-align: center;
		padding: 5px;
		border: 2px solid var(--zip-gravitas);
		border-radius: 4px;
		width: 200px;
		height: 250px;
		background-color: lightgray;
		color: black;
	}

	.avatar {
		width: 100px;
		height: 100px;
		border-radius: 50%;
		margin: 0 auto;
		display: block;
	}

	.mini {
		height: 100px;
	}
</style>
