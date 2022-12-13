<script lang="ts">
	import Header from '$components/common/Header.svelte';
	import ContactLayout from '$layouts/ContactLayout.svelte';
	import ContactSection from './ContactSection.svelte';

	export let title: string;
	export let description: string;
	export let links: {
		icon: ConstructorOfATypedSvelteComponent;
		href: string;
	}[];

	const text = description.replaceAll('<b>', "<b class='text-transparent'>");
</script>

<ContactLayout>
	<Header>
		<span class="text-lg sm:text-xl md:text-2xl">03</span>
		{title}
	</Header>
	<ContactSection text="{text}" links="{links}" />
</ContactLayout>
