<script lang="ts">
	import ExperienceSection from './ExperienceSection.svelte';

	export let sections: {
		year: string;
		experiences: {
			firm: string;
			icon: string;
			color: string;
			position: string;
			time: string;
			start_date: Date;
			end_date: Date;
			location: string;
			skills: string[];
		}[];
	}[];
</script>

{#each sections as section}
    {#each section.experiences as experience}
        <ExperienceSection {...experience} />
    {/each}
    {section.year}
{/each}