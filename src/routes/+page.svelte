<script lang="ts">
	import Driver from '$lib/components/driverCard.svelte';
	import Drivers from '$lib/components/drivers.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<Drivers drivers={data.drivers} />

<style>
</style>
