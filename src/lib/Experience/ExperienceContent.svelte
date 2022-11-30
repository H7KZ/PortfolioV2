<script lang="ts">
	import Header from '../components/common/Header.svelte';
	import ExperienceLayout from '../layouts/ExperienceLayout.svelte';
	import ExperienceTimeline from './ExperienceTimeline.svelte';

	export let title: string;
	export let sections: {
		year: string;
		experiences: {
			firm: string;
			icon: string;
			color: string;
			position: string;
			time: string;
			start_date: Date;
			end_date: Date | null;
			location: string;
			skills: string[];
		}[];
	}[];
</script>

<ExperienceLayout>
	<Header>
		{title}
	</Header>
	<div class="flex flex-col justify-center items-center gap-4">
		<ExperienceTimeline sections="{sections}" />
	</div>
</ExperienceLayout>
