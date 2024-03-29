import ExperienceContent from '$src/lib/Experience/Experience.svelte';

export default {
	component: ExperienceContent,
	props: {
		title: 'MY EXPERIENCE',
		sections: [
			{
				year: '2024',
				experiences: []
			},
			{
				year: '2023',
				experiences: [
					// {
					// 	firm: 'FIGURIQUE',
					// 	firmLink: 'https://figurique.com/',
					// 	icon: '/logos/Figurique.svg',
					// 	color: '#d99d29',
					// 	position: 'Founder | FullStack Developer',
					// 	time: 'part time',
					// 	start_date: new Date('2023-04-25'),
					// 	end_date: null,
					// 	location: 'Prague, Czech Republic',
					// 	skills: ['HTML5', 'TailwindCSS', 'FlowBiteUI', 'SvelteKit', 'TS', 'ExpressJS', 'MongoDB']
					// },
					{
						firm: 'Precismo',
						firmLink: 'https://precismo.com/',
						icon: '/logos/Precismo.svg',
						color: '#1d66f3',
						position: 'Frontend Developer',
						time: 'part time',
						start_date: new Date('2023-01-02'),
						end_date: null,
						location: 'Prague, Czech Republic',
						skills: ['HTML5', 'CSS', 'JS', 'ReactJS', 'MaterialUI', 'Playwright']
					},
					{
						firm: 'Froneb',
						firmLink: 'https://froneb.com/',
						icon: '/logos/Froneb.svg',
						color: '#2CDC7B',
						position: 'Frontend Developer',
						time: 'contract',
						start_date: new Date('2022-12-28'),
						end_date: new Date('2023-01-18'),
						location: 'Prague, Czech Republic',
						skills: ['HTML5', 'TailwindCSS', 'TS', 'SvelteKit']
					}
				]
			},
			{
				year: '2022',
				experiences: [
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
						skills: ['HTML5', 'SCSS', 'UnoCSS', 'TS', 'VueJS']
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
						time: 'contract',
						start_date: new Date('2022-01-01'),
						end_date: new Date('2022-03-31'),
						location: 'Prague, Czech Republic',
						skills: ['HTML5', 'TailwindCSS', 'TS', 'SvelteKit']
					}
				]
			}
		]
	}
};
