<script lang="ts">
    import { io } from "socket.io-client";
	import Header from "../components/common/Header.svelte";
	import StatisticsLayout from "../layouts/StatisticsLayout.svelte";
	import StatCard from "./StatCard.svelte";

    export let title: string;
	export let number: string;

    // const socket = io("localhost:3000");
    
    const socket = io("https://portfolio-api-9e7f.onrender.com", {
        reconnectionAttempts: 5,
        reconnectionDelay: 1000,
        reconnectionDelayMax: 5000,
        transports: ["websocket"],
        upgrade: false,
        autoConnect: true,
        rejectUnauthorized: false,
    });

    let countVisits = 1645;

    socket.on("counter:count:change", (c) => {
        countVisits = c;
    });

    socket.on("counter:count:load", (c) => {
        countVisits = c;
    });

    let countLines = 1684;
    let countCollabs = 6;
    let countPRs = 94;
    let countCommits = 834;

    socket.on("project:lines:load", (c) => {
        countLines = c;
    });

    socket.on("project:lines:change", (c) => {
        countLines = c;
    });

    socket.on("project:collaborators:load", (c) => {
        countCollabs = c;
    });

    socket.on("project:collaborators:change", (c) => {
        countCollabs = c;
    });

    socket.on("project:pullrequests:load", (c) => {
        countPRs = c;
    });

    socket.on("project:pullrequests:change", (c) => {
        countPRs = c;
    });

    socket.on("project:commits:load", (c) => {
        countCommits = c;
    });

    socket.on("project:commits:change", (c) => {
        countCommits = c;
    });
</script>

<template>
    <StatisticsLayout>
        <Header>
            <span class="text-lg sm:text-xl md:text-2xl">{number}</span>
            {title}
        </Header>
        <StatCard title="People visited websites<br>I helped to create" count={countVisits} />
        <StatCard title="At total I wrote<br>lines of code" count={countLines} titleFirst={true} />
        <StatCard title="Number of people<br>I collaborated with" count={countCollabs} />
        <StatCard title="All the pull requests<br>opened and merged" count={countPRs} titleFirst={true} />
        <StatCard title="More than<br>commits pushed" count={countCommits} />
    </StatisticsLayout>
</template>
