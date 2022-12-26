<script lang="ts">
	import type { Post } from '$kominekjan/types/post.types';
	import Tag from './Tag.svelte';

	export let post: Post;

	console.log(post);

	const isImage = (url: string) => {
		return (
			url.endsWith('jpg') ||
			url.endsWith('png') ||
			url.endsWith('jpeg') ||
			url.endsWith('gif') ||
			url.endsWith('svg') ||
			url.endsWith('webp') ||
			url.endsWith('bmp')
		);
	};
</script>

<template>
	<a
		href="/blog/{post.id}"
		class="w-3/4 max-w-6xl text-textWhite font-quicksand rounded-3xl px-8 py-4 bg-gradient-to-tl from-[#ffffff17] to-line shadow-[0_0_32px_0_rgba(0,0,0,0.4)] transition-all hover:scale-105"
	>
		<div class="flex gap-4">
			{#if isImage(post.thumbnail)}
				<img src="{post.thumbnail}" alt="thumbnail" class="w-32 h-32 object-cover rounded-3xl" />
			{/if}
			<div class="flex flex-col justify-between gap-4">
				<div>
					<div class="flex items-center flex-wrap gap-2">
						<h1 class="text-2xl font-unbounded underline">{post.title}</h1>
						{#await post.tags() then tags}
							{#each tags as tag}
								<Tag title="{tag.title}" />
							{/each}
						{/await}
					</div>
					<p class="text-base pl-4">{post.description}</p>
				</div>
				<p class="text-[#ffffff79]">
					Published: {new Date(post.created).toLocaleDateString('en-GB', {
						year: 'numeric',
						month: 'long',
						day: 'numeric'
					})}
				</p>
			</div>
		</div>
	</a>
</template>
