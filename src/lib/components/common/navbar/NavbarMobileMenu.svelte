<script lang="ts">
	export let show: boolean;
</script>

<div
	class="fixed w-screen h-screen top-0 left-0 transition-all duration-500 ease-in-out z-2 bg-background
	flex flex-col justify-start pt-32 items-center gap-10 font-unbounded text-xl text-textWhite font-semibold
	{show ? 'show' : 'hide'}"
>
	<a
		href="#about"
		class="flex items-start gap-1 transition-all  hover:text-hover"
		on:click="{() => (show = false)}"
	>
		<span class="text-xs sm:text-sm md:text-md">01</span>
		About
	</a>
	<div class="w-3/4 h-[2px] bg-line"></div>
	<a
		href="#experience"
		class="flex items-start gap-1 transition-all  hover:text-hover"
		on:click="{() => (show = false)}"
	>
		<span class="text-xs sm:text-sm md:text-md">02</span>
		Experience
	</a>
	<div class="w-3/4 h-[2px] bg-line"></div>
	<a
		href="#contact"
		class="flex items-start gap-1 transition-all  hover:text-hover"
		on:click="{() => (show = false)}"
	>
		<span class="text-xs sm:text-sm md:text-md">03</span>
		Contact
	</a>
</div>

<style scoped>
	.hide {
		transform: translateX(100vw);
	}

	.show {
		transform: translateX(0);
	}
</style>
