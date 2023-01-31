<script lang="ts">
	import NavbarLinks from '$content/navbar.content';

	export let show: boolean;
</script>

<template>
	<div
		class="fixed w-screen h-screen top-0 left-0 transition-all duration-500 ease-in-out z-2 bg-background
	flex flex-col justify-start pt-32 items-center gap-10 font-unbounded text-xl text-textWhite font-semibold
	{show ? 'show' : 'hide'}"
	>
		{#each NavbarLinks['default'] as link, i}
			<a
				href="{link.href}"
				class="flex items-start gap-1 transition-all  hover:text-hover"
				on:click="{() => (show = false)}"
			>
				<span class="text-xs sm:text-sm md:text-md">0{i + 1}</span>
				{link.title}
			</a>
			<div class="w-3/4 h-[2px] bg-line last:hidden"></div>
		{/each}
	</div>
</template>

<style scoped>
	.hide {
		transform: translateX(100vw);
	}

	.show {
		transform: translateX(0);
	}
</style>
