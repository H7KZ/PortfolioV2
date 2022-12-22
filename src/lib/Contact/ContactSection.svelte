<script lang="ts">
	import type { ContactLinkArray } from '$src/types/contact.types';

	export let text: string;
	export let links: ContactLinkArray;
</script>

<template>
	<div
		class="max-w-4xl mx-6 flex flex-col gap-6 font-quicksand font-medium text-base text-textWhite bg-clip-text bg-gradient-to-r from-[#ee3232] to-[#db1a7b] sm:text-lg md:text-xl"
	>
		<p>
			{@html text}
		</p>
		<div class="ml-3 flex flex-wrap gap-6">
			{#each links as link}
				<a href="{link.href}" target="__blank">
					<svelte:component this="{link.icon}" />
				</a>
			{/each}
		</div>
	</div>
</template>
