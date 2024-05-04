<script lang="ts">
	let innerHeight: number;
	let innerWidth: number;
	const chairWidth = 10;

	$: columns = Math.floor(innerWidth / (chairWidth + 2));
	$: rows = Math.floor(innerHeight / Math.ceil(chairWidth * 1.6875));

	$: colors = Array.from({ length: rows }, (_, i) => `hsl(${i * 36}%, 100%, 50%)`);
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<div class="matrix-bg" style="--col:{columns};--row:{rows};--chW:{chairWidth}px;">
	{#each Array.from({ length: columns * rows }) as _, i}
		<img
			src="/assets/chair_green.svg"
			class="mtrx"
			style="--color:{colors[i % rows]}"
			alt="ziprecruiter logo"
		/>
	{/each}
</div>

<style>
	.matrix-bg {
		display: grid;
		grid-template-columns: repeat(var(--col), 1fr);
		grid-template-rows: repeat(var(--row), 1fr);
		width: 100%;
		height: 100%;
		background-color: black;
		overflow: hidden;
	}

	.mtrx {
		width: var(--chW);
		object-fit: cover;
		opacity: 0.5;

		/* opacity: 0; */
		/* animation: matrix-animation 2s infinite; */
	}
	/* 
	@keyframes matrix-animation {
		0% {
			opacity: 0;
		}
		10% {
			opacity: 1;
		}
		90% {
			opacity: 1;
		}
		100% {
			opacity: 0;
		}
	} */
</style>
