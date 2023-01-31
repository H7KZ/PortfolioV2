<script lang="ts">
	import NavbarLinks from '$content/navbar.content';
</script>

<template>
	<div
		class="w-screen absolute flex flex-row justify-between items-center text-textWhite font-unbounded pt-4 px-8 z-2 xl:pt-6 xl:px-14"
	>
		<h1 class="font-extrabold text-4xl"><a href="/">KOMÍNEKJAN</a></h1>

		<div class="flex flex-row gap-10 text-xl font-semibold xl:gap-16">
			{#each NavbarLinks['default'] as link, i}
				<a href="{link.href}" class="flex items-start gap-1 transition-all  hover:text-hover">
					<span class="text-xs sm:text-sm md:text-md">0{i + 1}</span>
					{link.title}
				</a>
			{/each}
		</div>
	</div>
</template>
