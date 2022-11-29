<script lang="ts">
	import AboutLayout from '$layouts/AboutLayout.svelte';
	import Header from '$components/common/Header.svelte';
	import AboutSection from './AboutSection.svelte';
	import AboutSectionGrid from './AboutSectionGrid.svelte';

	export let title: string;
	export let sections: { title: string; description: string }[];
</script>

<template>
	<AboutLayout>
		<Header>
			{title}
		</Header>
		<AboutSectionGrid>
			{#each sections as section}
				<AboutSection {...section} />
			{/each}
		</AboutSectionGrid>
	</AboutLayout>
</template>
