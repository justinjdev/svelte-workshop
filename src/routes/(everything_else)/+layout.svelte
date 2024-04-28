<script lang="ts">
	import AnimatedBg from '$lib/components/AnimatedBG.svelte';
</script>

<AnimatedBg imgPath="/assets/f1.svg" opacity={100} />

<slot />

<style>
	:global(body) {
		background-color: var(--zip-gravitas);
	}
</style>
