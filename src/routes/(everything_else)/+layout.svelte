<script lang="ts">
	import AnimatedBg from '$lib/components/AnimatedBG.svelte';
</script>

<AnimatedBg imgPath="assets/f1.svg" />

<slot />

<style>
	:global(body) {
		background-color: var(--formula-red-dark);
	}
</style>
