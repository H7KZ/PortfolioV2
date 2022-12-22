<script lang="ts">
	import Header from '$components/common/Header.svelte';
	import ContactLayout from '$layouts/ContactLayout.svelte';
	import type { ContactLinkArray } from '$src/types/contact.types';
	import ContactSection from './ContactSection.svelte';

	export let title: string;
	export let description: string;
	export let links: ContactLinkArray;

	const text = description.replaceAll('<b>', "<b class='text-transparent'>");
</script>

<template>
	<ContactLayout>
		<Header>
			<span class="text-lg sm:text-xl md:text-2xl">04</span>
			{title}
		</Header>
		<ContactSection text="{text}" links="{links}" />
	</ContactLayout>
</template>
