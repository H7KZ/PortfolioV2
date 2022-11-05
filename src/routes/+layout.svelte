<script lang="ts">
	import Navbar from '$lib/components/common/Navbar.svelte';
</script>

<template>
	<nav>
		<Navbar />
	</nav>
	<main>
		<slot />
	</main>
</template>
