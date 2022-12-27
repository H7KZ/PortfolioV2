<script lang="ts">
	export let icon: string;
	export let href: string;
</script>

<template>
	<a href="{href}" target="_blank" rel="noopener noreferrer">
		<img src="{icon}" alt="{icon}" class="h-10 md:h-12" />
	</a>
</template>
