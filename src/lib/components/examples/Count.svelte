<script lang="ts">
	import ExampleWrapper from './ExampleWrapper.svelte';

	let count = 0;

	function increment() {
		count += 1; // This assignment triggers the UI to update
	}

	$: squared = count * count;
</script>

<ExampleWrapper>
	<button on:click={increment}>Click me</button>
	<p>Count: {count}</p>
	<p>Squared: {squared}</p>
</ExampleWrapper>
