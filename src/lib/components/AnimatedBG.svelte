<script lang="ts">
	export let imgPath: string = './assets/chair_green.svg';
	export let opacity: number = 5;
	export let invert: boolean = false;
</script>

<div
	class="bg-container"
	style="--opacity:{opacity}%; --start:{invert ? -10 : 110}vh; --end:{invert ? 110 : -10}vh;"
>
	<div class="moving">
		<img src={imgPath} alt="bgimage" class="bg-tile" style="--velocity:12;" />
		<img src={imgPath} alt="bgimage" class="bg-tile" style="--velocity:11;" />
		<img src={imgPath} alt="bgimage" class="bg-tile" style="--velocity:24;" />
		<img src={imgPath} alt="bgimage" class="bg-tile" style="--velocity:10;" />
		<img src={imgPath} alt="bgimage" class="bg-tile" style="--velocity:14;" />
		<img src={imgPath} alt="bgimage" class="bg-tile" style="--velocity:23;" />
		<img src={imgPath} alt="bgimage" class="bg-tile" style="--velocity:18;" />
		<img src={imgPath} alt="bgimage" class="bg-tile" style="--velocity:16;" />
		<img src={imgPath} alt="bgimage" class="bg-tile" style="--velocity:19;" />
		<img src={imgPath} alt="bgimage" class="bg-tile" style="--velocity:20;" />
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
		margin: 0 calc(100vw / 26);
		animation: animate 15s linear infinite;
		animation-duration: calc(300s / var(--velocity));
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
