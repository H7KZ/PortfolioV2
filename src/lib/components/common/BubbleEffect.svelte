<script lang="ts">
	import { onMount } from 'svelte';

	let width: number,
		height: () => any,
		largeHeaderHeight,
		canvas: HTMLCanvasElement,
		ctx: CanvasRenderingContext2D,
		circles: any[],
		target,
		animateHeader = true;

	onMount(() => {
		initHeader();
		addListeners();
	});

	function initHeader() {
		width = window.innerWidth;
		height = () => screen.availHeight / 1.5;
		largeHeaderHeight = screen.availHeight / 1.5;
		target = { x: 0, y: height };

		canvas.width = width;
		canvas.height = largeHeaderHeight;
		ctx = canvas.getContext('2d') ?? new CanvasRenderingContext2D();

		circles = [];
		for (var x = 0; x < width * 0.02; x++) {
			let c = new Circle();
			circles.push(c);
		}
		animate();
	}

	function addListeners() {
		window.addEventListener('scroll', scrollCheck);
		window.addEventListener('resize', resize);
		window.addEventListener('load', resize);
	}

	function scrollCheck() {
		if (document.body.scrollTop > height()) animateHeader = false;
		else animateHeader = true;
	}

	function resize() {
		canvas.width = window.innerWidth;
		canvas.height = screen.availHeight / 1.5;
	}

	function animate() {
		if (animateHeader) {
			ctx?.clearRect(0, 0, width, height());
			for (let i in circles) {
				circles[i].draw();
			}
		}
		requestAnimationFrame(animate);
	}

	function Circle(this: any) {
		let _this = this;

		(function () {
			_this.pos = {};
			init();
		})();

		function init() {
			_this.pos.x = Math.random() * width;
			_this.pos.y = height() + Math.random() * 100;
			_this.alpha = 0.1 + Math.random() * 0.65;
			_this.scale = 0.3 + Math.random() * 0.35;
			_this.velocity = Math.random();
		}

		this.draw = function () {
			if (_this.alpha <= 0) {
				init();
			}
			_this.pos.y -= _this.velocity;
			_this.alpha -= 0.0006;
			ctx?.beginPath();
			ctx?.arc(_this.pos.x, _this.pos.y, _this.scale * 10, 0, 2 * Math.PI, false);
			ctx.fillStyle = 'rgba(183, 38, 27,' + _this.alpha + ')';
			ctx?.fill();
		};
	}
</script>

<canvas bind:this={canvas} class="absolute bottom-0 left-0" />
