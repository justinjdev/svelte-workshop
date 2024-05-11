<script lang="ts">
	import { onMount } from 'svelte';

	let canvas: HTMLCanvasElement;
	let ctx: CanvasRenderingContext2D | null;
	let wheel: WheelOfJustice;
	let words = ['Apple', 'Banana', 'Cherry', 'Grape', 'Orange'];

	onMount(() => {
		if (canvas === null) throw new Error('Canvas not found');
		ctx = canvas.getContext('2d');

		if (ctx === null) throw new Error('Canvas context not found');
		wheel = new WheelOfJustice(ctx, words);
		wheel.draw();
	});

	class WheelOfJustice {
		private ctx: CanvasRenderingContext2D;
		private words: string[];
		private numSlices: number;
		private sliceAngle: number;
		private spinAngle: number;
		private spinSpeed: number;
		private selectedWord: string | null;

		constructor(ctx: CanvasRenderingContext2D, words: string[]) {
			this.ctx = ctx;
			this.words = words;
			this.numSlices = words.length;
			this.sliceAngle = (2 * Math.PI) / this.numSlices;
			this.spinAngle = 0;
			this.spinSpeed = 0;
			this.selectedWord = null;
		}

		draw() {
			this.ctx.clearRect(0, 0, canvas.width, canvas.height);
			this.drawWheel();
			this.drawPointer();
		}

		drawWheel() {
			const centerX = canvas.width / 2;
			const centerY = canvas.height / 2;
			const radius = Math.min(centerX, centerY) - 10;

			for (let i = 0; i < this.numSlices; i++) {
				const startAngle = i * this.sliceAngle - this.spinAngle;
				const endAngle = (i + 1) * this.sliceAngle - this.spinAngle;

				this.ctx.beginPath();
				this.ctx.arc(centerX, centerY, radius, startAngle, endAngle);
				this.ctx.lineTo(centerX, centerY);
				this.ctx.fillStyle = i % 2 === 0 ? '#FFC107' : '#FF9800';
				this.ctx.fill();
				this.ctx.stroke();

				this.ctx.save();
				this.ctx.translate(centerX, centerY);
				this.ctx.rotate(startAngle + this.sliceAngle / 2);
				this.ctx.fillStyle = '#000';
				this.ctx.font = 'bold 16px Arial';
				this.ctx.fillText(this.words[i], radius / 2, 0);
				this.ctx.restore();
			}
		}

		drawPointer() {
			const centerX = canvas.width / 2;
			const centerY = canvas.height / 2;
			const radius = Math.min(centerX, centerY) - 10;

			this.ctx.beginPath();
			this.ctx.moveTo(centerX + radius - 10, centerY);
			this.ctx.lineTo(centerX + radius + 10, centerY);
			this.ctx.lineTo(centerX + radius, centerY - 30);
			this.ctx.closePath();
			this.ctx.fillStyle = '#F44336';
			this.ctx.fill();
		}

		spin() {
			const spinDuration = 3000; // milliseconds
			const spinSpeedIncrement = 0.01;
			const targetSpinSpeed = 0.5;
			const spinAcceleration = (targetSpinSpeed - this.spinSpeed) / (spinDuration / 16); // 16ms is roughly equivalent to 60fps

			const spinInterval = setInterval(() => {
				this.spinSpeed += spinAcceleration;
				this.spinAngle += this.spinSpeed;

				if (this.spinSpeed >= targetSpinSpeed) {
					clearInterval(spinInterval);
					this.selectWord();
				}

				this.draw();
			}, 16);
		}

		selectWord() {
			const selectedSliceIndex = Math.floor((this.spinAngle % (2 * Math.PI)) / this.sliceAngle);
			this.selectedWord = this.words[selectedSliceIndex];
		}
	}
</script>

<canvas id="canvas" width="400" height="400" bind:this={canvas}></canvas>

<button on:click={() => wheel.spin()}>Spin</button>
