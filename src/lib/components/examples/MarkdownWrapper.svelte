<script lang="ts">
	import Division from '../Division.svelte';
</script>

<div class="centered-wrapper">
	<Division />

	<slot />

	<Division />
</div>

<style>
	.centered-wrapper {
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
