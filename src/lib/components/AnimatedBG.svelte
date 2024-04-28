<script lang="ts">
	export let imgPath: string = './assets/chair_green.svg';
	export let opacity: number = 5;
</script>

<div class="bg-container" style="--opacity:{opacity}%;">
	<div class="moving">
		<img src={imgPath} alt="bgimage" class="bg-tile" style="--f:11;" />
		<img src={imgPath} alt="bgimage" class="bg-tile" style="--f:12;" />
		<img src={imgPath} alt="bgimage" class="bg-tile" style="--f:24;" />
		<img src={imgPath} alt="bgimage" class="bg-tile" style="--f:10;" />
		<img src={imgPath} alt="bgimage" class="bg-tile" style="--f:14;" />
		<img src={imgPath} alt="bgimage" class="bg-tile" style="--f:23;" />
		<img src={imgPath} alt="bgimage" class="bg-tile" style="--f:18;" />
		<img src={imgPath} alt="bgimage" class="bg-tile" style="--f:16;" />
		<img src={imgPath} alt="bgimage" class="bg-tile" style="--f:19;" />
		<img src={imgPath} alt="bgimage" class="bg-tile" style="--f:20;" />
	</div>
</div>

<style>
	:global(body) {
		margin: 0;
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
		animation-duration: calc(300s / var(--f));
	}

	@keyframes animate {
		0% {
			/* transform: translate(0vh, 0vw); */
			transform: translateY(100vh);
			opacity: 0;
		}
		50% {
			opacity: 100;
		}
		100% {
			/* transform: translateY(100vh, 100vw); */
			transform: translateY(-10vh);
			opacity: 0;
		}
	}
</style>
