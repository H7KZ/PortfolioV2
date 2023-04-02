<script lang="ts">
	import { onMount } from 'svelte';

	import { Circle } from '$src/utils/BubbleCircle.util';

	let width: () => number,
		height: () => number,
		canvas: HTMLCanvasElement,
		ctx: CanvasRenderingContext2D,
		circles: Circle[];

	onMount(() => {
		width = () => window.innerWidth;
		height = () => screen.availHeight / 1.5;

		canvas.width = width();
		canvas.height = screen.availHeight / 1.5;
		ctx = canvas.getContext('2d') ?? new CanvasRenderingContext2D();

		circles = [];
		for (var x = 0; x < width() * 0.02; x++) {
			let c = new Circle(width(), height());
			circles.push(c);
		}

		animate();

		window.addEventListener('resize', resize);
		window.addEventListener('load', resize);
	});

	function resize() {
		try {
			canvas.width = window.innerWidth;
			canvas.height = screen.availHeight / 1.5;
		} catch {
			null;
		}
	}

	function animate() {
		ctx.clearRect(0, 0, width(), height());
		for (let i in circles) {
			circles[i].draw(ctx, width(), height());
		}

		requestAnimationFrame(animate);
	}
</script>

<template>
	<canvas bind:this="{canvas}" class="absolute bottom-0 left-0"></canvas>
</template>
