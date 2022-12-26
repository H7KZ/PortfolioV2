<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let color: string = '#fff';
	export let backgroundColor: string = '#000';
	export let disabled: boolean = false;

	const dispatch = createEventDispatcher();

	function clickHandler() {
		if (!disabled) {
			dispatch('click');
		}
	}
</script>

<template>
	<button
		type="button"
		class="button"
		style="color: {color}; background-color: {backgroundColor}"
		on:click="{clickHandler}"
		disabled="{disabled}"
	>
		<slot />
	</button>
</template>
