import AboutContent from '$lib/About/AboutContent.svelte';

export default {
	component: AboutContent,
	props: {
		title: 'ABOUT ME',
		sections: [
			{
				title: 'In general',
				description:
					'Hello, my name is <b>Jan Komínek</b> and I am an <b>open-minded entrepreneur that focuses on frontend web development</b>. In parallel I am <b>studying industrial high school</b> in the <b>field of cyber security</b>.'
			},
			{
				title: 'Frontend development',
				description:
					'<b>My interest in web development started in 2020</b>, since then I have learned every aspect of frontend web development and I have been <b>constantly learning new technologies</b>. I have a <b>great experience in HTML, CSS, TailwindCSS, JavaScript, TypeScript, SvelteKit and VueJS</b>.'
			},
			{
				title: 'Learn more',
				description:
					'You can read more about me on my <b><a target="__blank" style="text-decoration-line: underline; text-decoration-color: #db1a7b;" href="/social/linkedin">LinkedIn</a></b> or <b><a target="__blank" style="text-decoration-line: underline; text-decoration-color: #db1a7b;" class="underline" href="/social/github">GitHub</a></b>.'
			}
		]
	}
};
