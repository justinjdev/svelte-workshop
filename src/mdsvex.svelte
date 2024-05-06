<script context="module" lang="ts">
	/**
	 * this file wraps the mdsvex component to provide a custom layout
	 * any changes here would be applied to all mdsvex components
	 */
	import SmartLink from '$lib/components/mdsvex/SmartLink.svelte';
	export { SmartLink as a };
</script>

<slot />

<style>
	:global(.prose) {
		text-wrap: wrap;
	}

	:global(.shiki) {
		width: 90%;
		text-wrap: nowrap;
		overflow: scroll;
		margin: auto;
	}

	:global(.prose a) {
		color: var(--zip-green);
	}

	:global(.prose a:hover) {
		color: var(--zip-cream);
	}
</style>
