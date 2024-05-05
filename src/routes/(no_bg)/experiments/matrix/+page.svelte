<script lang="ts">
	import { onMount } from 'svelte';

	let canvas: HTMLCanvasElement;
	let context: CanvasRenderingContext2D | null;
	let innerHeight: number;
	let innerWidth: number;
	let img: HTMLImageElement;

	onMount(() => {
		context = canvas.getContext('2d');
		if (!context) {
			throw new Error('Canvas context not found');
		}
		canvas.width = innerWidth;
		canvas.height = innerHeight;

		animate(context);

		img = document.createElement('img');
		img.src = '/assets/ch.bmp';
		img.classList.add('ch-tile');
		img.sizes = '10px';
	});

	function animate(ctx: CanvasRenderingContext2D): void {
		ctx.clearRect(0, 0, innerWidth, innerHeight);

		const fontSize = 10;
		const columns = innerWidth / fontSize;
		const elements = Array.from({ length: columns }, () => 1);

		const letters = 'ZIPRECRUITER'.split('');

		function drawText() {
			ctx.fillStyle = 'rgba(0, 0, 0, .1)';
			ctx.fillRect(0, 0, innerWidth, innerHeight);
			requestAnimationFrame(() => {
				ctx.fillStyle = '#0f0';
				for (var i = 0; i < elements.length; i++) {
					var text = letters[Math.floor(Math.random() * letters.length)];
					ctx.fillText(text, i * fontSize, elements[i] * fontSize);
					elements[i]++;
					if (elements[i] * fontSize > innerHeight && Math.random() > 0.95) {
						elements[i] = 0;
					}
				}
				animate(ctx);
			});
			for (var i = 0; i < elements.length; i++) {
				var text = letters[Math.floor(Math.random() * letters.length)];
				ctx.fillStyle = '#0f0';
				ctx.fillText(text, i * fontSize, elements[i] * fontSize);
				elements[i]++;
				if (elements[i] * fontSize > innerHeight && Math.random() > 0.95) {
					elements[i] = 0;
				}
			}
		}

		function drawImage() {
			ctx.fillStyle = 'rgba(0, 0, 0, .1)';
			ctx.fillRect(0, 0, innerWidth, innerHeight);
			ctx.fillStyle = '#0f0';
			for (var i = 0; i < elements.length; i++) {
				ctx.drawImage(
					img,
					i * fontSize,
					elements[i] * fontSize,
					fontSize - 2,
					(fontSize - 2 * 1.6875) * 1.6875
				);
				elements[i]++;
				if (elements[i] * fontSize > innerHeight && Math.random() > 0.95) {
					elements[i] = 0;
				}
			}

			requestAnimationFrame(drawImage);
		}

		// setInterval(drawImage, 100);
		// draw(drawText);
		requestAnimationFrame(drawImage);
	}
</script>

<svelte:window bind:innerHeight bind:innerWidth />

<canvas id="matrix" bind:this={canvas}> </canvas>

<style>
	:global(body) {
		margin: 0;
		overflow: hidden;
		background-color: black;
	}
	#matrix {
		display: block;
		background-color: black;
	}
</style>
