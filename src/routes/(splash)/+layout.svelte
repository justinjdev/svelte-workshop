<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import MatrixBg from '$lib/components/MatrixBG.svelte';
</script>

<MatrixBg />

<slot />

<Footer />

<style>
	:global(body) {
		background: var(--zip-gravitas);
	}
</style>
