<script lang="ts">
	import { marked } from 'marked';
	import type { Post } from '$kominekjan/types/post.types';
	import footerContent from '$src/content/footer.content';

	/** @type {import('./$types').PageData} */
	export let data: {
		post: Post;
	};
</script>

<template>
	<div class="min-h-screen">
		<div class="flex flex-col items-center gap-2 pt-48">
			<h1
				class="min-w-[200px] w-full max-w-5xl px-2 sm:px-10 lg:px-20 text-xl text-start font-montserrat text-hover"
			>
				<a href="/blog" class="transition-all hover:underline">Blog</a>
				<span class="text-line">/</span>
			</h1>
			<div class="min-w-[200px] w-full max-w-5xl px-2 sm:px-10 lg:px-20 markdown-body">
				{@html marked(data.post.content)}
			</div>
		</div>
	</div>
	<svelte:component this="{footerContent.component}" {...footerContent.props} />
</template>
