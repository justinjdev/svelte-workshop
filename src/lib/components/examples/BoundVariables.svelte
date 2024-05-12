<script lang="ts">
	import TextArea from '$lib/components/examples/TextArea.svelte';
	import ExampleWrapper from './ExampleWrapper.svelte';

	let keys = 0;

	let value = 'Adrian Newey set to leave Red Bull Racing at the start of 2025.';
</script>

<ExampleWrapper>
	<h4>These text areas are bound together, unlike Adrian Newey and Red Bull Racing!</h4>
	<p>Change events: {keys}</p>
	<TextArea placeholder="This is useless" bind:value on:keydown={() => (keys += 1)} />

	<TextArea placeholder="This is also useless" bind:value />
</ExampleWrapper>
