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
		margin: 0;
	}

	/* custom font faces are the same */
	@font-face {
		font-family: 'Aeonik';
		font-style: normal;
		font-weight: 500;
		src: url('/fonts/Aeonik-Regular.woff2') format('woff2');
		src:
			local('Aeonik'),
			local('Aeonik-Regular'),
			url('/fonts/aeoniktrial-regular-webfont.woff2') format('woff2');
		src: url('/fonts/aeoniktrial-regular-webfont.woff') format('woff');
		src:
			local('Aeonik'),
			local('Aeonik-Regular'),
			url('/fonts/aeoniktrial-regular-webfont.woff') format('woff');
	}
</style>
