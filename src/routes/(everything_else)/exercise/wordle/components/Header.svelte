<script>
	/**
	 * This is the header component for the wordle game, on the main game page.
	 */

	import AnimatedBg from '$lib/components/AnimatedBG.svelte';
	import Division from '$lib/components/Division.svelte';
</script>

<h1 class="header">Formulardle? Wordle F1? FWordle?</h1>

<AnimatedBg invert={true} />

<Division />

<style>
	.header {
		text-align: center;
		color: lightcyan;
		opacity: 70%;
		font-family: 'Comic Sans MS';
	}
</style>
