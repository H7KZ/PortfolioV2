<script lang="ts">
	import Header from '$components/common/Header.svelte';
	import TestimonialsLayout from '$src/lib/layouts/TestimonialLayout.svelte';
	import TestimonialSection from './TestimonialSection.svelte';

	export let title: string;
	export let reviews: {
		name: string;
		position: string;
		text: string;
		image: string;
	}[];
</script>

<TestimonialsLayout>
	<Header>
		{title}
	</Header>
	<TestimonialSection reviews="{reviews}" />
</TestimonialsLayout>
