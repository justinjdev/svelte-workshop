<script context="module" lang="ts">
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

	:global(.prose > * > a) {
		color: var(--zip-accent);
	}
</style>
