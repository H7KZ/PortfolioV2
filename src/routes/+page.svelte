<script lang="ts">
	import sections from '$src/content/sections';

	import BackgroundSvg from '$components/common/BackgroundSVG.svelte';
</script>

<template>
	<div class="flex flex-col gap-20">
		{#each sections as section, i}
			<svelte:component this="{section.component}" number="{'0' + i}" {...section.props} />
		{/each}
	</div>
	<div
		class="absolute top-0 left-0 w-screen h-screen flex justify-center items-center -z-1"
	>
		<BackgroundSvg />
	</div>
</template>
