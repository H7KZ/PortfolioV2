<script lang="ts">
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	import AOS from 'aos';
	import 'aos/dist/aos.css';

	import '$css/global.css';

	import Navbar from '$components/common/navbar/Navbar.svelte';

	import { loaded } from '$src/store/store';
	import BarLoader from '$src/lib/components/common/BarLoader.svelte';

	onMount(() => {
		AOS.init();

		loaded.set(true);
	});
</script>

<template class="relative overflow-hidden">
	{#if !$loaded}
		<div
			transition:slide="{{ duration: 800, easing: quintOut }}"
			class="fixed top-0 left-0 bg-background w-screen h-screen flex flex-col justify-center items-center z-4"
		>
			<div class="absolute top-0 left-0 w-screen h-screen flex justify-center items-center"></div>
			<div
				class="w-1/2 flex shrink-0 flex-col justify-center items-center text-center gap-1 z-2 md:w-1/4"
			>
				<h1
					class="font-montserrat font-bold text-[12rem] leading-none text-textWhite md:text-[16rem]"
				>
					KJ
				</h1>
				<h1 class="font-quicksand font-bold text-xl gradient-sub clip-text">Loading...</h1>
				<BarLoader color="#ff2e2e" size="64" />
			</div>
		</div>
	{/if}
	<Navbar />
	<div class="w-full h-auto">
		<slot />
	</div>
</template>
