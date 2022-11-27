<script lang="ts">
	import { onMount } from 'svelte';

	import '$css/tailwind.css';
	import '$css/scrollbar.css';
	import '$css/gradients.css';
	
	import Navbar from '$components/common/navbar/Navbar.svelte';
	import BackgroundSvg from '$components/common/BackgroundSVG.svelte';

	let backgroundSVG: HTMLElement;

	onMount(() => {
		window.addEventListener('scroll', () => {
			try {
				backgroundSVG.style.top = `${window.scrollY * 0.5}px`;
			} catch {}
		});
	});
</script>

<template class="relative overflow-hidden">
	<Navbar />
	<div class="w-full h-auto">
		<slot />
	</div>
	<div bind:this={backgroundSVG} class="absolute top-0 left-0 w-screen h-screen flex justify-center items-center -z-1">
		<BackgroundSvg />
	</div>
</template>
