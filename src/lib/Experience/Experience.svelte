<script lang="ts">
	import type { ExperienceArray } from '$src/types/experience.types';
	import Header from '../components/common/Header.svelte';
	import ExperienceLayout from '../layouts/ExperienceLayout.svelte';
	import ExperienceTimeline from './ExperienceTimeline.svelte';

	export let title: string;
	export let sections: {
		year: string;
		experiences: ExperienceArray;
	}[];

	export let number: string;
</script>

<template>
	<ExperienceLayout>
		<Header>
			<span class="text-lg sm:text-xl md:text-2xl">{number}</span>
			{title}
		</Header>
		<div class="flex flex-col justify-center items-center gap-4">
			<ExperienceTimeline sections="{sections}" />
		</div>
	</ExperienceLayout>
</template>
