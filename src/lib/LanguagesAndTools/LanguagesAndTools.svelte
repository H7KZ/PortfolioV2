<script lang="ts">
	import Header from '$components/common/Header.svelte';
	import LanguageAndToolsLayout from '../layouts/LanguageAndToolsLayout.svelte';
	import LanguageAndToolsItem from './LanguageAndToolsItem.svelte';

	export let title: string;
	export let content: {
		icon: string;
		href: string;
	}[];

	export let number: string;
</script>

<template>
	<LanguageAndToolsLayout>
		<Header smaller>
			<span class="text-sm sm:text-base md:text-lg">{number}</span>
			{title}
		</Header>
		<div class="max-w-4xl px-8 flex justify-center gap-x-6 gap-y-10 flex-wrap">
			{#each content as section}
				<LanguageAndToolsItem icon="{section.icon}" href="{section.href}" />
			{/each}
		</div>
	</LanguageAndToolsLayout>
</template>
