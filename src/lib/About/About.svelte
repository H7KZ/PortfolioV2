<script lang="ts">
	import AboutLayout from '$layouts/AboutLayout.svelte';
	import Header from '$components/common/Header.svelte';
	import AboutSection from './AboutSection.svelte';
	import AboutSectionGrid from './AboutSectionGrid.svelte';
	import type { AboutSectionArray } from '$src/types/about.types';

	export let title: string;
	export let sections: AboutSectionArray;

	export let number: string;
</script>

<template>
	<AboutLayout>
		<Header>
			<span class="text-lg sm:text-xl md:text-2xl">{number}</span>
			{title}
		</Header>
		<AboutSectionGrid>
			{#each sections as section}
				<AboutSection section="{section}" />
			{/each}
		</AboutSectionGrid>
	</AboutLayout>
</template>
