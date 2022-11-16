<script lang="ts">
	import BubbleEffect from "$lib/components/common/BubbleEffect.svelte";

	let profesion: string = "Frontend Developer";
	let type = [
		'Frontend Developer',
		'Minecraft Developer',
		'UI/UX Designer'
	];
	let typeIndex = 1;
	let backwards = true;
	let intervalTimer: number = 90;
	let interval: string | number | NodeJS.Timeout | undefined;
	let stop = false;

	setTimeout(() => {
		writingEffect();
	}, 2000);

	function writingEffect() {
		clearInterval(interval);

		if (backwards) {
			profesion = profesion.slice(0, -1);
			if (profesion.length === 0) {
				backwards = false;
				intervalTimer = 250;
			}
		} else {
			profesion += type[typeIndex].charAt(profesion.length);
			if (profesion.length === type[typeIndex].length) {
				backwards = true;
				stop = true;
				intervalTimer = 90;
				typeIndex = (typeIndex + 1) % type.length;
			}
		}

		if (stop) {
			stop = false;
			setTimeout(() => {
				interval = setTimeout(writingEffect, intervalTimer);
			}, 1000);
		} else {
			interval = setInterval(writingEffect, intervalTimer);
		}
	}
</script>
<div class="w-full h-auto">
	<div class="w-full h-screen">
		<div class="w-full h-full flex flex-col justify-center items-center text-textWhite font-montserrat font-extrabold z-1">
			<h1 class="text-7xl">
				Hi, my name is <span class="text-9xl gradient-name clip-text">Jan</span>
			</h1>
			<h2 class="text-5xl">
				a passionate <span class="gradient-sub clip-text">{profesion}</span><span class="font-normal">|</span>
			</h2>
		</div>
		<div class="relative -z-1">
			<BubbleEffect />
		</div>
	</div>
	<div>
		
	</div>
</div>

