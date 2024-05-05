<script lang="ts">
	import AnimatedBg from '$lib/components/AnimatedBG.svelte';
</script>

<AnimatedBg />

<slot />

<style>
	:global(body) {
		background-color: var(--zip-gravitas);
	}
</style>
