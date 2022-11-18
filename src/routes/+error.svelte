<script lang="ts">
	import { page } from '$app/stores';
	import ErrorContent from '$lib/Error/ErrorContent.svelte';
</script>

<template>
	<ErrorContent status={$page.status} message={$page.error?.message} />
</template>
