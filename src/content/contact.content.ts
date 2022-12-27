import ContactContent from '$src/lib/Contact/Contact.svelte';

import LinkedIn from '$icons/LinkedIn.svelte';
import Steam from '$icons/Steam.svelte';
import Discord from '$icons/Discord.svelte';
import Email from '$icons/Email.svelte';
import Instagram from '$icons/Instagram.svelte';
import Fiverr from '$icons/Fiverr.svelte';

export default {
	component: ContactContent,
	props: {
		title: 'CONTACT ME',
		description:
			'<b>Intrested in hiring me</b> or just want to <b>talk about business solutions</b>. Then you have came to the right individual. I am <b>fully open to long term projects that include frontend and backend web development</b>.',
		links: [
			{
				icon: LinkedIn,
				href: '/social/linkedin'
			},
			{
				icon: Discord,
				href: '/social/discord'
			},
			{
				icon: Email,
				href: 'mailto:contact@jankominek.cz'
			},
			{
				icon: Instagram,
				href: '/social/instagram'
			},
			{
				icon: Steam,
				href: '/social/steam'
			},
			{
				icon: Fiverr,
				href: '/social/fiverr'
			}
		]
	}
};
