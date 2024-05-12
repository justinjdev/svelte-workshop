<script lang="ts">
	import TextArea from '$lib/components/examples/TextArea.svelte';

	let value = '';
	let count = 0;
</script>

<TextArea placeholder={'hello'} bind:value on:keydown={() => (count += 1)} />
<p>{count}</p>
