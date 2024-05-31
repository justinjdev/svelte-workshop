<script lang="ts">
	import { goto, preloadData } from '$app/navigation';

	export let url: string;
	export let innerText: string;
</script>

<button
	class="btn"
	on:click={() => goto(url)}
	on:mouseover={async () => await preloadData(url)}
	on:focus={async () => await preloadData(url)}>{innerText}</button
>

<style>
	.btn {
		background-color: var(--zip-green);
		border: none;
		border-radius: 5px;
		padding: 10px;
		margin-bottom: 10px;
		width: 100px;
		cursor: pointer;
	}
</style>
