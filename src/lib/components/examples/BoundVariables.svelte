<script lang="ts">
	import TextInput from '$lib/components/examples/TextArea.svelte';
	import Division from '../Division.svelte';

	let value = 'Adrian Newey set to leave Red Bull Racing at the start of 2025.';
</script>

<Division />

<h4>These text areas are bound together, unlike Adrian Newey and Red Bull Racing!</h4>

<TextInput placeholder="This is useless" bind:value />

<TextInput placeholder="This is also useless" bind:value />

<Division />
