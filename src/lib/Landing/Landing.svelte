<script lang="ts">
	import BubbleEffect from '$src/lib/components/effects/BubbleEffect.svelte';
	import WritingTextEffect from '$lib/components/common/WritingTextEffect.svelte';

	export let text: string[] = ['Frontend Developer', 'Backend Developer', 'UI/UX Designer'];
</script>

<template>
	<div class="w-full h-screen relative">
		<div
			class="w-full h-full flex flex-col justify-center items-center text-center text-textWhite font-montserrat font-extrabold z-1 px-3"
		>
			<h1 class="text-3xl sm:text-5xl md:text-6xl xl:text-7xl">
				Hi, my name is
				<span class="text-5xl gradient-name clip-text sm:text-7xl md:text-8xl xl:text-9xl">
					Jan
				</span>
			</h1>
			<h2 class="text-xl sm:text-3xl md:text-4xl xl:text-5xl">
				a passionate
				<span class="gradient-sub clip-text"><WritingTextEffect text="{text}" /></span><span
					class="font-normal">|</span
				>
			</h2>
		</div>
		<div class="relative -z-1">
			<BubbleEffect />
		</div>
	</div>
</template>
