<script lang="ts">
	import FooterLayout from '$src/lib/layouts/FooterLayout.svelte';

	export let copyright: string;
	export let links: {
		name: string;
		href: string;
	}[];
</script>

<FooterLayout>
	<div
		class="flex gap-4 font-quicksand font-medium text-sm text-textWhite text-center sm:text-base sm:gap-6 md:text-lg md:gap-8"
	>
		{#each links as link, i}
			<a
				href="{link.href}"
				target="{link.href !== '/' ? '__blank' : ''}"
				class="transition-all hover:text-hover"
			>
				{link.name}
			</a>
			{#if i < links.length - 1}
				<div class="w-[2px] min-h-full bg-gradient-to-r from-[#ee3232] to-[#db1a7b]"></div>
			{/if}
		{/each}
	</div>
	<p class="font-quicksand font-medium text-xs text-[#A6A6A6] sm:text-sm md:text-base">
		{copyright}
	</p>
</FooterLayout>
