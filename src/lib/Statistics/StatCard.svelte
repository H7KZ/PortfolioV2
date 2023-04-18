<script lang="ts">
	export let title: string;
	export let count: number;
</script>

<template>
	<div class="w-min flex flex-col items-center gap-1 text-center">
		<h1 class="text-6xl overflow-hidden font-unbounded font-bold text-hover">
			{Intl.NumberFormat('en-US', { notation: 'compact', maximumFractionDigits: 1 }).format(count)}
		</h1>
		<h1 class="font-montserrat text-sm text-[#868686] font-bold uppercase">
			{@html title}
		</h1>
	</div>
</template>
