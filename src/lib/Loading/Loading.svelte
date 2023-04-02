<script lang="ts">
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	import BarLoader from '$src/lib/components/effects/BarLoader.svelte';
</script>

<template>
	<div
		transition:slide="{{ duration: 800, easing: quintOut }}"
		class="fixed top-0 left-0 bg-background w-screen h-screen flex flex-col justify-center items-center z-4"
	>
		<div class="absolute top-0 left-0 w-screen h-screen flex justify-center items-center"></div>
		<div
			class="w-1/2 flex shrink-0 flex-col justify-center items-center text-center gap-6 z-2 md:w-1/4"
		>
			<h1 class="font-quicksand font-bold text-5xl gradient-sub clip-text h-16">Loading...</h1>
			<BarLoader color="#ff2e2e" size="64" />
		</div>
	</div>
</template>
