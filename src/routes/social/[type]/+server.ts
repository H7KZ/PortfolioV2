import { redirect, type RequestEvent, type RequestHandler } from '@sveltejs/kit';

const socials: Map<string, string> = new Map([
	['github', 'https://github.com/H7KZ'],
	['linkedin', 'https://www.linkedin.com/in/jan-kominek/'],
	['steam', 'https://steamcommunity.com/id/H7KZ'],
	['discord', 'https://discord.com/users/466867931821637632'],
	['instagram', 'https://www.instagram.com/jan_kominek'],
	['twitter', 'https://twitter.com/_jankominek'],
	['fiverr', 'https://www.fiverr.com/jan_kominek?up_rollout=true']
]);

export const GET: RequestHandler = async ({ params }: RequestEvent) => {
	if (!socials.has(params.type ?? '')) throw redirect(303, '/');

	throw redirect(302, socials.get(params.type ?? '') ?? '/');
};
