<script lang="ts">
	export let team: { name: string; base: string; points: number };
</script>

<div class="page-wrapper">
	<div class="card">
		<h1>{team.name}</h1>
		<p>{team.base}</p>
		<p>{team.points}</p>
	</div>
</div>

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
</style>
