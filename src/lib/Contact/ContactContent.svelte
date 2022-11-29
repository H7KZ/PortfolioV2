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
		{title}
	</Header>
	<ContactSection {text} {links} />
</ContactLayout>
