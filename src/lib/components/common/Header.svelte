<script lang="ts">
	export let smaller: boolean = false;
	export let extraSmall: boolean = false;
</script>

<template>
	<h1
		class="{
			extraSmall
				? 'text-lg sm:text-xl md:text-2xl'
					: smaller
						? 'text-2xl sm:text-3xl md:text-4xl'
							: 'text-4xl sm:text-5xl sm:leading-[60px] md:text-6xl md:leading-[72px]'} relative px-2 flex items-start gap-2 font-unbounded font-bold gradient-header clip-text text-center"
	>
		<slot />
		<div class="absolute -bottom-2 w-2/5 h-1 bg-line rounded-full"></div>
		<div class="absolute -bottom-2 right-1/3 w-2/5 h-1 bg-line rounded-full"></div>
		<div class="absolute -bottom-2 right-0 w-1/5 h-1 bg-line rounded-full"></div>
	</h1>
</template>
