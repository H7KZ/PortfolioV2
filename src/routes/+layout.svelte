<script lang="ts">
	import "$css/tailwind.css";
	import "$css/scrollbar.css";
	import "$css/gradients.css";
	import Navbar from '$components/common/navbar/Navbar.svelte';
</script>

<template>
	<Navbar />
	<slot />
</template>
