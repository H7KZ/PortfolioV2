<script lang="ts">
	import Header from '$components/common/Header.svelte';
	import ProjectLayout from '$layouts/ProjectLayout.svelte';
	import type { projectArray } from '$src/types/project.types';
	import ProjectCarousel from './ProjectCarousel.svelte';

	export let title: string;
	export let projects: projectArray;
</script>

<template>
	<ProjectLayout>
		<Header>
			<span class="text-lg sm:text-xl md:text-2xl">03</span>
			{title}
		</Header>
		<ProjectCarousel projects="{projects}" />
	</ProjectLayout>
</template>
