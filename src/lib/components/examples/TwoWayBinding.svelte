<script>
	import ExampleWrapper from './ExampleWrapper.svelte';

	let name = ''; // State variable
</script>

<ExampleWrapper>
	<input type="text" bind:value={name} placeholder="Enter your name" />
	<!-- `value` of the input is bound to the `name` variable -->
	<p>Hello, {name}!</p>
	<!-- Any changes in the input will automatically update here and vice versa -->
</ExampleWrapper>
