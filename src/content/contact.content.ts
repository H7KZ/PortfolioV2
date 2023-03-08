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
			"If you are interested in <b>discussing potential business solutions or considering hiring me</b> for your project, <b>you have come to the right place</b>. As an experienced front-end web developer with a passion for staying up-to-date with the latest technologies and industry trends, I am <b>committed to providing the highest quality service to my clients</b>. I am open to <b>exploring long-term projects</b> that involve both <b>front-end and back-end web development</b>, and I am <b>confident in my ability to deliver exceptional results</b>. Please <b>don't hesitate to reach out</b> to me to discuss your needs and how I can help <b>bring your vision to life</b>.",
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
