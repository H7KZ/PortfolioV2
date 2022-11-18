<script lang="ts">
	import LandingContent from '$lib/Landing/LandingContent.svelte';
	import AboutContent from '$lib/About/AboutContent.svelte';
	import ExperienceContent from '$lib/Experience/ExperienceContent.svelte';
	import ContactContent from '$lib/Contact/ContactContent.svelte';
	import LinkedIn from '$icons/LinkedIn.svelte';
	import Steam from '$icons/Steam.svelte';
	import Discord from '$icons/Discord.svelte';
	import Email from '$icons/Email.svelte';
	import Footer from '$components/common/Footer.svelte';

	const sections = [
		{
			component: LandingContent,
			props: {
				text: ['Frontend Developer', 'Minecraft Developer', 'UI/UX Designer']
			}
		},
		{
			component: AboutContent,
			props: {
				title: 'ABOUT ME',
				sections: [
					{
						title: 'In general',
						description: 'Hello, my name is <b>Jan Komínek</b> and I am an <b>open-minded entrepreneur that focuses on frontend web development</b>. In parallel I am <b>studying industrial high school</b> in the <b>field of cyber security</b>.'
					},
					{
						title: 'Frontend development',
						description: '<b>My interest in web development started in 2020</b>, since then I have learned every aspect of frontend web development and I have been <b>constantly learning new technologies</b>. I have a <b>great experience in HTML, CSS, TailwindCSS, JavaScript, TypeScript, SvelteKit and VueJS</b>.'
					},
					{
						title: 'Learn more',
						description: 'You can read more about me on my <b><a style="text-decoration-line: underline; text-decoration-color: #db1a7b;" href="https://www.linkedin.com/">LinkedIn</a></b> or <b><a style="text-decoration-line: underline; text-decoration-color: #db1a7b;" class="underline" href="https://github.com/">GitHub</a></b>.'
					}
				]
			}
		},
		{
			component: ExperienceContent,
			props: {
				title: 'MY EXPERIENCE',
				sections: [

				]
			}
		},
		{
			component: ContactContent,
			props: {
				title: 'CONTACT ME',
				sections: [
					{
						description: '*Intrested in hiring me* or just want to *talk about business solutions*. Then you have came to the right individual. I am *fully open to a long term projects that include frontend and backend web development*.',
						links: [
							{
								icon: LinkedIn,
								href: 'https://www.linkedin.com/'
							},
							{
								icon: Steam,
								href: 'https://www.linkedin.com/'
							},
							{
								icon: Discord,
								href: 'https://www.linkedin.com/'
							},
							{
								icon: Email,
								href: 'https://www.linkedin.com/'
							}
						]
					}
				]
			}
		},
		{
			component: Footer,
			props: {
				copyright: 'Copyright © 2022 Komínek Jan. All rights reserved',
				links: [
					{
						name: 'Home',
						href: '/'
					},
					{
						name: 'Source code',
						href: ''
					},
					{
						name: 'LinkedIn',
						href: 'https://www.linkedin.com/'
					},
					{
						name: 'GitHub',
						href: ''
					}
				]
			}
		}
	];
</script>

<template>
	<div class="flex flex-col gap-20">
		{#each sections as section}
			<svelte:component this={section.component} {...section.props} />
		{/each}
	</div>
</template>
