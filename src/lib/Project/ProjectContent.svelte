<script lang="ts">
	import Header from '$components/common/Header.svelte';
	import ProjectLayout from '$layouts/ProjectLayout.svelte';
	import ProjectCarousel from './ProjectCarousel.svelte';

	export let title: string;
	export let projects: {
		title: string;
		description: string;
		image: string;
		link: string;
		code: string;
		tags: string[];
	}[];
</script>

<ProjectLayout>
	<Header>
		{title}
	</Header>
	<ProjectCarousel projects="{projects}" />
</ProjectLayout>
