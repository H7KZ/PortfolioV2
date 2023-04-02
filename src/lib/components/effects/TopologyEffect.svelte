<script lang="ts">
    import { onMount } from 'svelte';
    import TOPOLOGY from 'vanta/dist/vanta.topology.min';

	let vantaEffect: HTMLElement;

	const parallaxValue = 0.4;

    onMount(async () => {
		const body = document.body, html = document.documentElement;
		const height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

		TOPOLOGY({
			el: vantaEffect,
			mouseControls: true,
			touchControls: true,
			gyroControls: false,
			minHeight: height * (1 - parallaxValue),
			minWidth: 200.00,
			scale: 1.00,
			scaleMobile: 1.00,
			color: '#141414',
			backgroundColor: '#1d1d1d'
		});

		window.addEventListener('scroll', () => {
			const scrollY = window.scrollY;

			vantaEffect.style.top = `-${scrollY * parallaxValue}px`;
		});
	});
</script>

<template>
    <div bind:this="{vantaEffect}" class="fixed top-0 left-0 h-screen w-screen -z-1" />
</template>