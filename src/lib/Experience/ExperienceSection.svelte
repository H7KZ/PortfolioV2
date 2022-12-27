<script lang="ts">
	import type { Experience } from '$src/types/experience.types';
	import Months from '$src/utils/Months.util';
	export let experience: Experience;
	const monthDiff = () => {
		return (
			Math.abs(
				(experience.start_date?.getMonth() ?? new Date().getMonth()) -
					(experience.end_date?.getMonth() ?? new Date().getMonth())
			) + 1
		);
	};
</script>

<div
	class="w-[200px] flex flex-col gap-3 font-quicksand text-base font-semibold mx-2 sm:text-lg sm:w-[300px] lg:w-[400px]"
	data-aos="slide-up"
	data-aos-once="true"
>
	<div class="flex gap-2 font-montserrat">
		<a href="{experience.firmLink}" target="__blank">
			<img src="{experience.icon}" alt="{experience.icon}" />
		</a>
		<div class="flex flex-col">
			<a href="{experience.firmLink}" target="__blank">
				<h3
					style="color: {experience.color};"
					class="font-extrabold text-2xl leading-6 md:text-4xl md:leading-9"
				>
					{experience.firm}
				</h3>
			</a>
			<h4 class="text-textWhite font-semibold text-base leading-4 md:text-xl md:leading-5">
				{experience.position}
			</h4>
		</div>
	</div>
	<div class="flex gap-2">
		<div style="background-color: {experience.color};" class="min-h-full w-1 rounded"></div>
		<div class="text-textWhite">
			<h5>{experience.time}</h5>
			{#if experience.start_date}
				<h5>
					{Months[experience.start_date.getMonth()] +
						' ' +
						experience.start_date.getFullYear().toString()} - {experience.end_date
						? Months[experience.end_date?.getMonth() ?? 0] +
						  ' ' +
						  experience.end_date?.getFullYear()
						: 'now'}
					•
					{monthDiff()}
					{monthDiff() === 1 ? 'month' : 'months'}
				</h5>
			{/if}
			<h5>{experience.location}</h5>
		</div>
	</div>
	<div>
		<p>
			{#each experience.skills as skill, i}
				<span style="color: {experience.color};">
					<span>
						{skill}
					</span>
					{#if i != experience.skills.length - 1}
						<span class="text-textWhite"> • </span>
					{/if}
				</span>
			{/each}
		</p>
	</div>
</div>
