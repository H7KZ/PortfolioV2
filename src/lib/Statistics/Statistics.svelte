<script lang="ts">
	import { io } from 'socket.io-client';
	import Header from '../components/common/Header.svelte';
	import StatisticsLayout from '../layouts/StatisticsLayout.svelte';
	import StatCard from './StatCard.svelte';

	export let title: string;
	export let number: string;

	// const socket = io("localhost:3000");

	const socket = io('https://portfolio-api-9e7f.onrender.com', {
		reconnectionAttempts: 5,
		reconnectionDelay: 1000,
		reconnectionDelayMax: 5000,
		transports: ['websocket'],
		upgrade: false,
		autoConnect: true,
		rejectUnauthorized: false
	});

	let countLines = 29830;
	let countCollabs = 22;
	let countPRs = 115;
	let countCommits = 744;

	socket.on('project:lines:load', (c) => {
		countLines = c;
	});

	socket.on('project:lines:change', (c) => {
		countLines = c;
	});

	socket.on('project:collaborators:load', (c) => {
		countCollabs = c;
	});

	socket.on('project:collaborators:change', (c) => {
		countCollabs = c;
	});

	socket.on('project:pullrequests:load', (c) => {
		countPRs = c;
	});

	socket.on('project:pullrequests:change', (c) => {
		countPRs = c;
	});

	socket.on('project:commits:load', (c) => {
		countCommits = c;
	});

	socket.on('project:commits:change', (c) => {
		countCommits = c;
	});
</script>

<template>
	<StatisticsLayout>
		<Header smaller>
			<span class="text-lg sm:text-xl md:text-2xl">{number}</span>
			{title}
		</Header>
		<div class="flex flex-row justify-center gap-16 flex-wrap">
			<StatCard title="<i>Lines of code written</i>" count="{countLines}" />
			<StatCard title="<i>Colleagues I collaborated with</i>" count="{countCollabs}" />
			<StatCard title="<i>Pull requests opened and merged</i>" count="{countPRs}" />
			<StatCard title="<i>Production commits pushed</i>" count="{countCommits}" />
		</div>
		<div class="flex flex-col gap-8 items-center">
			<Header extraSmall>
				COMMITS OVER THE LAST YEAR
			</Header>
			<figure><embed src="https://wakatime.com/share/@H7KZ/51e0a4fc-a853-4a31-95e6-1f3208026bd7.svg" /></figure>
		</div>
	</StatisticsLayout>
</template>
