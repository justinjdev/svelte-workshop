<script lang="ts">
	import AnimatedBg from '$lib/components/AnimatedBG.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<AnimatedBg invert={true} />

<slot />

<Footer />

<style>
	:global(body) {
		background: var(--zip-gravitas);
	}
</style>
