<script lang="ts">
	import Months from '$utils/Months';

	export let firm: string;
	export let icon: string;
	export let color: string;
	export let position: string;
	export let time: string;
	export let start_date: Date;
	export let end_date: Date | null;
	export let location: string;
	export let skills: string[];

	const monthDiff = () => {
		return Math.abs(start_date.getMonth() - (end_date?.getMonth() ?? new Date().getMonth())) + 1;
	};
</script>

<div
	class="w-[200px] flex flex-col gap-3 font-quicksand text-base font-semibold mx-2 sm:text-lg sm:w-[300px] lg:w-[400px]"
>
	<div class="flex gap-2 font-montserrat">
		<img src="{icon}" alt="{icon}" />
		<div class="flex flex-col">
			<h3
				style="color: {color};"
				class="font-extrabold text-2xl leading-6 md:text-4xl md:leading-9"
			>
				{firm}
			</h3>
			<h4 class="text-textWhite font-semibold text-base leading-4 md:text-xl md:leading-5">
				{position}
			</h4>
		</div>
	</div>
	<div class="flex gap-2">
		<div style="background-color: {color};" class="min-h-full w-1 rounded"></div>

		<div class="text-textWhite">
			<h5>{time}</h5>
			<h5>
				{Months[start_date.getMonth()] + ' ' + start_date.getFullYear().toString()} - {end_date
					? Months[end_date?.getMonth() ?? 0] + ' ' + end_date?.getFullYear()
					: 'now'}
				•
				{monthDiff()}
				{monthDiff() === 1 ? 'month' : 'months'}
			</h5>
			<h5>{location}</h5>
		</div>
	</div>
	<div>
		<p>
			{#each skills as skill, i}
				<span style="color: {color};">
					<span>
						{skill}
					</span>
					{#if i != skills.length - 1}
						<span class="text-textWhite"> • </span>
					{/if}
				</span>
			{/each}
		</p>
	</div>
</div>
