<script lang="ts">
	import NavbarMobileMenu from './NavbarMobileMenu.svelte';

	let showMenu: boolean = false;

	function toggleMenu(type: 'click' | 'key', e: KeyboardEvent = new KeyboardEvent('')) {
		if (type === 'key' && e.key !== 'M') return;
		showMenu = !showMenu;
	}
</script>

<template>
	<NavbarMobileMenu bind:show="{showMenu}" />
	<div
		class="absolute w-screen flex flex-row justify-between text-textWhite pt-3 px-5 z-3 sm:pt-5 sm:px-7"
	>
		<a
			class="font-unbounded font-extrabold text-2xl sm:text-3xl"
			href="/"
			on:click="{() => (showMenu = false)}"
		>
			<h1>KOMÍNEKJAN</h1>
		</a>
		<div
			class="flex justify-center items-center cursor-pointer"
			on:click="{() => toggleMenu('click')}"
			on:keypress="{(e) => toggleMenu('key', e)}"
		>
			<div
				class="
			w-7 h-1 bg-textWhite rounded-sm transition-all duration-100 ease-in-out
			before:absolute before:w-7 before:h-1 before:bg-textWhite before:rounded-sm before:-translate-y-2
			after:absolute after:w-7 after:h-1 after:bg-textWhite after:rounded-sm after:translate-y-2
			{showMenu ? 'bg-opacity-0 -translate-x-1' : ''}
			{showMenu ? 'before:-rotate-45 before:w-8 before:translate-y-0 before:translate-x-[2px]' : ''}
			{showMenu ? 'after:rotate-45 after:w-8 after:translate-y-0 after:translate-x-[2px]' : ''}
			"
			></div>
		</div>
	</div>
</template>
