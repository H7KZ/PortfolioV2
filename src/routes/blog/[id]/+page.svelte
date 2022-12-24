<script lang="ts">
	import type { Post } from '$kominekjan/types/post.types';

	/** @type {import('./$types').PageData} */
	export let data: {
		post: Post;
	};
</script>

<template>
	<div class="pt-40 text-textWhite">
		<h1>{data.post.title}</h1>
		<h4>{data.post.description}</h4>
		<p>{data.post.content}</p>
		{#await data.post.categories() then cats}
			{#each cats as cat}
				<p>{cat.title}</p>
			{/each}
		{/await}
		{#await data.post.tags() then tags}
			{#each tags as tag}
				<p>{tag.title}</p>
			{/each}
		{/await}
		<img src="{data.post.thumbnail}" alt="" class="h-96" />
	</div>
</template>
