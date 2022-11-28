<script lang="ts">
	import { page } from '$app/stores';

	import ErrorContent from '$lib/Error/ErrorContent.svelte';

	import BackgroundSvg from '$src/lib/components/common/BackgroundSVG.svelte';
</script>

<template>
	<ErrorContent status={$page.status} message={$page.error?.message} />
	<div
		class="absolute top-0 left-0 w-screen h-screen flex justify-center items-center overflow-hidden -z-1"
	>
		<BackgroundSvg />
	</div>
</template>
