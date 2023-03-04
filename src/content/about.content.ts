import AboutContent from '$src/lib/About/About.svelte';

export default {
	component: AboutContent,
	props: {
		title: 'ABOUT ME',
		sections: [
			{
				title: 'In general',
				description:
					'<b>Greetings</b>, my name is <b>Jan Komínek</b>, and I am a <b>driven entrepreneur</b> with a <b>keen focus on front-end web development</b>. Concurrently, I am pursuing my <b>studies in the field of cybersecurity at an industrial high school</b>. As a <b>dedicated and open-minded individual</b>, I am committed to furthering my <b>expertise in both areas</b> and staying abreast of the <b>latest industry trends and best practices</b>.'
			},
			{
				title: 'Frontend development',
				description:
					'In 2020, my <b>passion for web development</b> was ignited, and I have since devoted myself to <b>mastering every aspect of front-end web development</b>. Through self-study and ongoing professional development, I have gained <b>significant proficiency in a range of cutting-edge technologies</b>, including <b>HTML5, CSS3, TailwindCSS, JavaScript, TypeScript, SvelteKit, VueJS and ReactJS</b>. I am committed to <b>staying current with emerging trends and best practices</b> in the field, and I am constantly <b>expanding my skill set</b> to provide the <b>highest level of service to my clients</b>.'
			},
			{
				title: 'Learn more',
				description:
					'<b>For more information</b> about my background and experience, I invite you to <b>visit my <a target="__blank" style="text-decoration-line: underline; text-decoration-color: #db1a7b;" href="/social/linkedin">LinkedIn</a> and <a target="__blank" style="text-decoration-line: underline; text-decoration-color: #db1a7b;" class="underline" href="/social/github">GitHub</a> profiles</b>. There, you can find a comprehensive <b>overview of my skills, work history, and projects</b>, as well as <b>recommendations from colleagues and clients</b>. Thank you for your consideration, and <b>I look forward</b> to the opportunity to discuss <b>how I can contribute to your project or organization</b>.'
			}
		]
	}
};
