<script>
</script>

<div class="wrapper">
	<h2>Rendered component:</h2>
	<div class="bound">
		<slot />
	</div>
</div>

<style>
	div.wrapper {
		border: 1px dotted var(--zip-cream);
		margin: 10px;
		padding: 5px;
	}

	.bound {
		display: flex;
		flex-direction: column;
		align-items: center;
		border: 1px solid var(--zip-cream);
		padding: 10px;
		background-color: #1b1e28;
	}
</style>
