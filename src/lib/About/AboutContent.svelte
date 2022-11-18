<script lang="ts">
    import SectionLayout from "$layouts/SectionLayout.svelte";
	import Header from "$components/common/Header.svelte";
	import AboutSection from "./AboutSection.svelte";
	import AboutSectionGrid from "./AboutSectionGrid.svelte";

	export let title: string;
	export let sections: { title: string; description: string }[];
</script>

<template>
    <SectionLayout>
        <Header>
            {title}
        </Header>
        <AboutSectionGrid>
            {#each sections as section}
                <AboutSection {...section} />
            {/each}
        </AboutSectionGrid>
    </SectionLayout>
</template>