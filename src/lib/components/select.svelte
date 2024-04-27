<script lang="ts" generics="T">
	import { createEventDispatcher } from 'svelte';

	// props
	// generics are fun, aren't they?
	export let options: { value: T; text?: string }[];
	export let selectedValue: T;

	// custom event firing
	// const dispatch = createEventDispatcher();
	// function onChange() {
	// 	dispatch('change');
	// }
</script>

<!-- event 'bubbling' -->
<select class="selector" bind:value={selectedValue} on:change>
	<!-- looping -->
	{#each options as option}
		<option selected={selectedValue === option.value} value={option.value}
			>{option.text ? option.text : option.value}</option
		>
	{/each}
</select>

<style>
	.selector {
		width: 200px;
		padding: 10px;
		border-radius: 5px;
		border: 1px solid #ccc;
		font-size: 1em;
	}
</style>
