<script lang="ts">
	import { useKominekJan } from '$kominekjan/KominekJan';

	const { getAllPosts } = useKominekJan;
</script>

<template>
	<div class="pt-40"></div>
	{#await getAllPosts(undefined, '-created') then posts}
		{#each posts as post}
			<a href="/blog/{post.id}">{post.title}</a>
		{/each}
	{/await}
</template>
