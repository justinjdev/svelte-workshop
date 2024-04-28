<script lang="ts">
	import type { Driver } from '$lib/server/db/types';

	export let driver: Driver;
</script>

<div class="driver">
	<h2>{driver.surname.toUpperCase()}</h2>
	<p>{driver.dob}</p>
</div>

<style>
	.driver {
		text-align: center;
		padding: 5px;
		border: 2px solid var(--zip-gravitas);
		border-radius: 4px;
		width: 200px;
		height: 250px;
		background-color: var(--zip-coral);
	}
</style>
