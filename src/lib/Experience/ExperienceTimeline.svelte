<script lang="ts">
	import type { ExperienceArray } from '$src/types/experience.types';

	import ExperienceSection from './ExperienceSection.svelte';

	export let sections: {
		year: string;
		experiences: ExperienceArray;
	}[];

	function renderRightSide(experiences: ExperienceArray): ExperienceArray {
		let right: ExperienceArray = [];
		let i: number = 1;
		experiences.forEach((ex) => {
			if (i % 2 === 0) {
				right.push(ex);
			}
			i++;
		});

		return right;
	}

	function renderLeftSide(experiences: ExperienceArray): ExperienceArray {
		let left: ExperienceArray = [];
		let i: number = 1;
		experiences.forEach((ex) => {
			if (i % 2 !== 0) {
				left.push(ex);
			}
			i++;
		});

		return left;
	}
</script>

{#each sections as section}
	<div class="flex flex-col justify-center items-start gap-4 md:items-center">
		{#if section.experiences.length !== 0}
			<div class="flex gap-8">
				<div class="hidden flex-col gap-24 my-6 md:flex">
					{#each renderLeftSide(section.experiences) as experience}
						<ExperienceSection experience="{experience}" />
					{/each}
				</div>

				<div class="min-h-full w-1 rounded bg-[#ffffff9f] ml-6 md:m-0"></div>

				<div class="hidden flex-col gap-24 my-6 md:flex">
					<div class="h-9"></div>
					{#each renderRightSide(section.experiences) as experience}
						<ExperienceSection experience="{experience}" />
					{/each}
				</div>

				<div class="flex flex-col gap-16 my-6 md:hidden">
					{#each section.experiences as experience}
						<ExperienceSection experience="{experience}" />
					{/each}
				</div>
			</div>
		{/if}

		<h1 class="font-montserrat font-bold text-3xl text-textWhite ml-6 md:m-0">
			{section.year}
		</h1>
	</div>
{/each}
