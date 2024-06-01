<script lang="ts">
	import Key from './Key.svelte';

	export let rows = ['q w e r t y u i o p', 'a s d f g h j k l', '⌫ z x c v b n m ↵'];
</script>

<div class="keyboardContainer">
	{#each rows as row}
		<div class="kbRow">
			{#each row.split(' ') as key}
				<Key {key} on:keyClick />
			{/each}
		</div>
	{/each}
</div>

<style>
	.keyboardContainer {
		display: block;
	}

	.kbRow {
		display: flex;
		justify-content: center;
	}
</style>
