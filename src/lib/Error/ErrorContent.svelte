<script lang="ts">
	export let status: number = 404;
	export let message: string = 'Page not found';
</script>

<template>
	<div
		class="w-full h-screen flex flex-col justify-center items-center gap-2 font-montserrat font-extrabold text-center"
	>
		<h1 class="text-7xl gradient-name gradient-animation clip-text md:text-9xl lg:text-[12rem]">
			{status}
		</h1>
		<h2 class="text-2xl text-textWhite uppercase md:text-4xl lg:text-6xl">
			{message}
		</h2>
	</div>
</template>
