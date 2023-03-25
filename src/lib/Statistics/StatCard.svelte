<script lang="ts">
    export let title: string;
    export let count: number;
    export let titleFirst: boolean = false;
</script>

<template>
    <div class="flex justify-center items-center gap-6">
        {#if titleFirst}
            <h1 class="font-montserrat text-lg text-end text-textWhite font-bold uppercase">
                {@html title}
            </h1>
        {/if}
        <h1 class="text-7xl overflow-hidden font-unbounded font-bold text-hover">
            {Intl.NumberFormat('en-US', { notation: "compact",maximumFractionDigits: 2 }).format(count)}
        </h1>
        {#if !titleFirst}
            <h1 class="font-montserrat text-lg text-start text-textWhite font-bold uppercase">
                {@html title}
            </h1>
        {/if}
    </div>
</template>