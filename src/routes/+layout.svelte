<script>
	import AnimatedBg from "$lib/components/AnimatedBG.svelte";
</script>

<AnimatedBg invert={true} />

<slot />

<style>
	:global(body) {
		background-color: var(--zip-gravitas);
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

	/* global css variables */
	:global(:root) {
		--zip-green: rgb(69, 219, 97);
		--zip-gravitas: rgb(0, 35, 37);
		--zip-white: rgb(255, 255, 255);
		--zip-cream: rgb(236, 235, 230);
		--zip-gray: rgb(93, 103, 112);
		--zip-coral: rgb(253, 126, 85);
		--light-cyan: rgb(224, 255, 255);
		--that-blue-color: rgb(0, 119, 255);
		--formula-red: rgb(255, 6, 0);
		--formula-red-dark: rgb(66, 2, 1);
		--formula-red-light: rgb(255, 152, 150);

		/* global settings */
		color: var(--zip-white);
	}
</style>