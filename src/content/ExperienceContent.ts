import ExperienceContent from '$lib/Experience/ExperienceContent.svelte';

export default {
	component: ExperienceContent,
	props: {
		title: 'MY EXPERIENCE',
		sections: [
			{
				year: '2023',
				experiences: []
			},
			{
				year: '2022',
				experiences: [
					{
						firm: 'Precismo',
						firmLink: 'https://precismo.com/',
						icon: '/logos/Precismo.svg',
						color: '#1d66f3',
						position: 'Frontend Developer',
						time: 'part time',
						start_date: new Date('2022-12-19'),
						end_date: null,
						location: 'Prague, Czech Republic',
						skills: ['HTML', 'SCSS', 'JS', 'SvelteKit', 'ReactJS', 'Python']
					},
					{
						firm: 'HAXAGON',
						firmLink: 'https://haxagon.cz/',
						icon: '/logos/Haxagon.svg',
						color: '#9228E6',
						position: 'Frontend Developer',
						time: 'part time',
						start_date: new Date('2022-10-01'),
						end_date: null,
						location: 'Prague, Czech Republic',
						skills: ['HTML', 'SCSS', 'UnoCSS', 'JS', 'TS', 'VueJS']
					},
					{
						firm: 'TV NOVA',
						firmLink: 'https://tv.nova.cz/',
						icon: '/logos/TVNova.svg',
						color: '#D33238',
						position: 'Application Tester',
						time: 'intership',
						start_date: new Date('2022-05-14'),
						end_date: new Date('2022-05-28'),
						location: 'Prague, Czech Republic',
						skills: ['Software testing', 'Manual testing', 'Bug reporting', 'Test cases']
					},
					{
						firm: 'Froneb',
						firmLink: 'https://froneb.com/',
						icon: '/logos/Froneb.svg',
						color: '#2CDC7B',
						position: 'Frontend Developer',
						time: 'part time',
						start_date: new Date('2022-01-01'),
						end_date: new Date('2022-03-31'),
						location: 'Prague, Czech Republic',
						skills: ['HTML', 'TailwindCSS', 'JS', 'TS', 'SvelteKit']
					}
				]
			}
		]
	}
};
