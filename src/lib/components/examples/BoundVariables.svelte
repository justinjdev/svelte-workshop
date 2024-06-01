<script lang="ts">
	import TextArea from '$lib/components/examples/TextArea.svelte';
	import ExampleWrapper from './ExampleWrapper.svelte';

	let keys = 0;

	let value = 'Adrian Newey set to leave Red Bull Racing at the start of 2025.';
	let headerText = 'Templating, so hot right now 🔥';
</script>

<ExampleWrapper>
	<h4>{headerText}</h4>
	<TextArea placeholder="This is useless" {value} />

	<TextArea placeholder="This is also useless" {value} />
</ExampleWrapper>
