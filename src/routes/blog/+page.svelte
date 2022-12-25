<script lang="ts">
	import { useKominekJan } from '$kominekjan/KominekJan';
	import BlogItem from '$src/lib/Blog/BlogItem.svelte';

	const { getAllPosts } = useKominekJan;
</script>

<template>
	<div class="pt-40"></div>
	<div class="flex flex-col items-center gap-8">
		{#await getAllPosts(undefined, '-created') then posts}
			{#each posts as post}
				<BlogItem post="{post}" />
			{/each}
		{/await}
	</div>
</template>
