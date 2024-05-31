<script lang="ts">
	import { goto, preloadData } from '$app/navigation';
	import CenteredContent from '$lib/components/CenteredContent.svelte';

	export let team: { name: string; base: string; points: number };

	function back() {
		goto('/exercise/f1');
	}
</script>

<!-- Thoroughly misusing components to illustrate slots in Svelte :) -->
<CenteredContent>
	<button
		class="btn"
		on:click={() => back()}
		on:mouseover={async () => await preloadData('/exercise/f1')}
		on:focus={async () => await preloadData('/exercise/f1')}>Back</button
	>
	<div class="page-wrapper">
		<div class="card">
			<h1>{team.name}</h1>
			<p>{team.base}</p>
			<p>{team.points}</p>
		</div>
	</div>
</CenteredContent>

<style>
	.page-wrapper {
		padding: 20px;
	}

	.card {
		border: 1px solid black;
		border-radius: 10px;
		background-color: lightgray;
		padding: 10px;
		width: 200px;
		height: 250px;
		color: black;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

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
