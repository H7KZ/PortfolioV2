<script lang="ts">
	import type { AboutSection } from '$src/types/about.types';

	export let section: AboutSection;

	const text = section.description.replaceAll('<b>', "<b class='text-transparent'>");
</script>

<template>
	<div
		class="max-w-xl min-w-[12rem] px-4 text-textWhite bg-clip-text bg-gradient-to-r from-[#ee3232] to-[#db1a7b]"
	>
		<h2
			class="text-2xl font-montserrat font-bold gradient-header clip-text md:text-3xl lg:text-[2.5rem] lg:leading-[2.75rem]"
		>
			{section.title}
		</h2>
		<p class="text-sm font-quicksand font-normal sm:text-base md:text-lg">
			{@html text}
		</p>
	</div>
</template>
