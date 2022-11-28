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
			end_date: Date | null;
			location: string;
			skills: string[];
		}[];
	}[];

	type Experience = {
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

	function renderRightSide(experiences: Experience): Experience {
		let right: Experience = [];
		let i: number = 1;
		experiences.forEach((ex) => {
			if (i % 2 === 0) {
				right.push(ex);
			}
			i++;
		});

		return right;
	}

	function renderLeftSide(experiences: Experience): Experience {
		let left: Experience = [];
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
	<div class="flex flex-col justify-center items-center gap-4">
		{#if section.experiences.length !== 0}
			<div class="flex gap-8">
				<div class="hidden flex-col justify-around gap-10 my-6 md:flex">
					{#each renderLeftSide(section.experiences) as experience}
						<ExperienceSection {...experience} />
					{/each}
				</div>

				<div class="min-h-full w-1 rounded bg-[#ffffff9f] ml-6 md:m-0" />

				<div class="hidden flex-col justify-around gap-10 my-6 md:flex">
					{#each renderRightSide(section.experiences) as experience}
						<ExperienceSection {...experience} />
					{/each}
				</div>

				<div class="flex flex-col gap-10 my-6 md:hidden">
					{#each section.experiences as experience}
						<ExperienceSection {...experience} />
					{/each}
				</div>
			</div>
		{/if}

		<h1 class="font-montserrat font-bold text-3xl text-textWhite ml-6 md:m-0">
			{section.year}
		</h1>
	</div>
{/each}
