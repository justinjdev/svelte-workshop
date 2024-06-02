<script lang="ts">
	/**
	 * The on-screen keyboard for the game
	 */

	import Key from './Key.svelte';

	export let rows = ['q w e r t y u i o p', 'a s d f g h j k l', '⌫ z x c v b n m ↵'];
</script>

<div class="keyboardContainer">
	{#each rows as row}
		<div class="kbRow">
			{#each row.split(' ') as key}
				<!-- event bubbling -->
				<Key {key} />
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
