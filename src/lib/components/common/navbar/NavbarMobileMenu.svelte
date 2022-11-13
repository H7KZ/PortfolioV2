<script lang="ts">
	export let show: boolean;
</script>

<div
	class="
fixed w-screen h-screen top-0 left-0 transition-all duration-500 ease-in-out z-2 bg-background
flex flex-col justify-start pt-32 items-center gap-5 font-montserrat text-xl text-textWhite font-semibold
{show ? 'show' : 'hide'}
"
>
	<a
		class="gradient-header-hover clip-text-hover-animation"
		href="/"
		on:click={() => (show = false)}>Home</a
	>

	<div class="w-3/4 h-[2px] bg-line" />

	<a
		class="gradient-header-hover clip-text-hover-animation"
		href="#about"
		on:click={() => (show = false)}>About</a
	>

	<div class="w-3/4 h-[2px] bg-line" />

	<a
		class="gradient-header-hover clip-text-hover-animation"
		href="#experience"
		on:click={() => (show = false)}>Experience</a
	>

	<div class="w-3/4 h-[2px] bg-line" />

	<a
		class="gradient-header-hover clip-text-hover-animation"
		href="#contact"
		on:click={() => (show = false)}>Contact</a
	>
</div>

<style scoped>
	.hide {
		transform: translateX(100vw);
	}

	.show {
		transform: translateX(0);
	}
</style>
