<script lang="ts">
	import ExampleWrapper from './ExampleWrapper.svelte';

	let name = 'World';
	function greet() {
		alert(`Hello, ${name}!`);
	}
</script>

<ExampleWrapper>
	<p>Hello, {name}!</p>
	<button on:click={greet}> Greet </button>
</ExampleWrapper>

<style>
	button {
		background-color: blue;
		color: white;
		padding: 8px 15px;
		border: none;
		border-radius: 5px;
	}
</style>
