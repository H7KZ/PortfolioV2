import Footer from '$components/common/Footer.svelte';

export default {
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
				href: 'https://github.com/H7KZ/Portfolio'
			},
			{
				name: 'LinkedIn',
				href: '/social/linkedin'
			},
			{
				name: 'GitHub',
				href: '/social/github'
			}
		]
	}
};
