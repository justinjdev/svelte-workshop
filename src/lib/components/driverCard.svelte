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
		margin: 1em 0;
		padding: 1em;
		border: 1px solid #ccc;
		border-radius: 4px;
		width: 200px;
		height: 250px;
		padding: 10px;
		background-color: #333;
	}
</style>
