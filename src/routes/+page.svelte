<script lang="ts">
	import { onMount } from 'svelte';

	import sections from '$src/content/sections';

	import BackgroundSvg from '$components/common/BackgroundSVG.svelte';

	let backgroundSVG: HTMLElement;

	onMount(() => {
		window.addEventListener('scroll', () => {
			try {
				backgroundSVG.style.top = `${window.scrollY * 0.5}px`;
			} catch {
				null;
			}
		});
	});
</script>

<template>
	<div class="flex flex-col gap-20">
		{#each sections as section}
			<svelte:component this="{section.component}" {...section.props} />
		{/each}
	</div>
	<div
		bind:this="{backgroundSVG}"
		class="absolute top-0 left-0 w-screen h-screen flex justify-center items-center -z-1"
	>
		<BackgroundSvg />
	</div>
</template>
