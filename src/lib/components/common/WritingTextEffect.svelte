<script lang="ts">
	export let text: string[] = [];
	export let eraseInterval: number = 50;
	export let typeInterval: number = 200;
	export let waitInterval: number = 2000;
	export let firstWaitInterval: number = 2500;

	let actualText: string = text[0];
	let typeIndex: number = 1;
	let backwards: boolean = true;
	let intervalTimer: number = 90;
	let interval: number | undefined;
	let stop: boolean = false;

	setTimeout(() => {
		writingEffect();
	}, firstWaitInterval);

	function writingEffect() {
		clearInterval(interval as number);

		if (backwards) {
			actualText = actualText.slice(0, -1);
			if (actualText.length === 0) {
				backwards = false;
				intervalTimer = typeInterval;
			}
		} else {
			actualText += text[typeIndex].charAt(actualText.length);
			if (actualText.length === text[typeIndex].length) {
				backwards = true;
				stop = true;
				intervalTimer = eraseInterval;
				typeIndex = (typeIndex + 1) % text.length;
			}
		}

		if (stop) {
			stop = false;
			setTimeout(() => {
				interval = setTimeout(writingEffect, intervalTimer);
			}, waitInterval);
		} else {
			interval = setInterval(writingEffect, intervalTimer);
		}
	}
</script>

<template>
	{actualText}
</template>
