<script lang="ts">
	import { useKominekJan } from '$kominekjan/KominekJan';
	import type { Post } from '$kominekjan/types/post.types';
	import BlogItem from '$src/lib/Blog/BlogItem.svelte';

	const { getAllPosts } = useKominekJan;

	let posts: Post[];

	let search = '';

	async function searchPosts(words: string = ''): Promise<Post[]> {
		if (!posts) posts = await getAllPosts(undefined, '-created');

		return posts.filter((post) => {
			return (
				post.title.toLowerCase().includes(words.toLowerCase()) ||
				post.description.toLowerCase().includes(words.toLowerCase())
			);
		});
	}
</script>

<template>
	<div class="pt-40"></div>
	<div class="mb-20 gap-4 flex items-center justify-center">
		<input
			class="w-3/4 max-w-6xl px-4 py-2 text-2xl font-quicksand bg-line rounded-xl outline-none text-textWhite transition-all placeholder:text-hover hover:shadow-[0_0_16px_0_rgba(201,32,80,0.2)] focus:shadow-[0_0_16px_0_rgba(201,32,80,0.2)]"
			placeholder="Search"
			type="text"
			bind:value="{search}"
		/>
	</div>

	<div class="flex flex-col items-center gap-8">
		{#await searchPosts(search) then posts}
			{#each posts as post}
				<BlogItem post="{post}" />
			{/each}
		{/await}
	</div>
</template>
