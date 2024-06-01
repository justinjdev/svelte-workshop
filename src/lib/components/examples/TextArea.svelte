<script lang="ts">
	export let placeholder: string;
	export let value: string;

	function click(e: Event) {
		console.log('Click!');
	}
</script>

<div class="text-input">
	<textarea {placeholder} {value} on:click={click} on:keydown />
</div>

<style>
	textarea {
		width: 200px;
		height: 100px;
		padding: 10px;
		font-size: 1em;
		border: 1px solid #ccc;
		border-radius: 5px;
	}
</style>
