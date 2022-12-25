<script lang="ts">
	import { marked } from 'marked';
	import type { Post } from '$kominekjan/types/post.types';

	/** @type {import('./$types').PageData} */
	export let data: {
		post: Post;
	};
</script>

<template>
	<div class="flex justify-center pt-40">
		<div class="max-w-5xl text-textWhite">
			{@html marked(data.post.content)}
		</div>
	</div>
</template>
