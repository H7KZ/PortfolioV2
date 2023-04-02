<script lang="ts">
	import { onMount } from 'svelte';

	import { loaded } from '$src/store/store';

	import AOS from 'aos';

	import Navbar from '$components/common/navbar/Navbar.svelte';
	import Loading from '$src/lib/Loading/Loading.svelte';
	// import TopologyEffect from '$src/lib/components/effects/TopologyEffect.svelte';

	import 'aos/dist/aos.css';
	import '$css/global.css';

	onMount(() => {
		AOS.init();

		loaded.set(true);
	});
</script>

<template class="relative overflow-hidden">
	{#if !$loaded}
		<Loading />
	{/if}
	<!-- <TopologyEffect /> -->
	<Navbar />
	<div class="w-full h-auto">
		<slot />
	</div>
</template>
