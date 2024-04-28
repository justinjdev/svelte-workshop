<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<slot />

<Footer />

<style>
	:global(body) {
		background-color: #002325;
		font-family: Aeonik, sans-serif;
	}
</style>
