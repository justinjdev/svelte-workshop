<script lang="ts">
	// the path to the image
	export let imgPath: string = '/assets/chair_green.svg';

	// the opacity of the moving background
	export let opacity: number = 5;

	// the number of tiles we want
	export let count: number = 10;

	// invert the direction of the animation (default is rising)
	export let invert: boolean = false;

	// the duration of the animation
	export let duration: number = 300;
</script>

<div
	class="bg-container"
	style="--opacity:{opacity}%; --start:{invert ? -10 : 110}vh; --end:{invert ? 110 : -10}vh;"
>
	<div class="moving" style="--count:{count}; --duration:{duration}s;">
		{#each Array.from({ length: count }) as _}
			<img
				src={imgPath}
				alt="bgimage"
				class="bg-tile"
				style="--velocity:{Math.random() * 15 + 5};"
			/>
		{/each}
	</div>
</div>

<style>
	img {
		max-height: 50px;
	}

	.bg-container {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		z-index: -1;
		opacity: var(--opacity);
		overflow: hidden;
	}

	.moving {
		position: relative;
		display: flex;
	}

	.moving > .bg-tile {
		position: relative;
		width: 30px;
		margin: 0 calc(100vw / (var(--count) * 2.6));
		animation: animate 15s linear infinite;
		animation-duration: calc(var(--duration) / var(--velocity));
		opacity: 0;
	}

	@keyframes animate {
		0% {
			transform: translateY(var(--start));
		}
		50% {
			opacity: 100;
		}
		80% {
			opacity: 0;
		}
		100% {
			transform: translateY(var(--end));
		}
	}
</style>
