import { redirect, type RequestEvent, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ params }: RequestEvent) => {
	let social: string;

	switch (params.to) {
		case 'github':
			social = 'https://github.com/H7KZ';
			break;
		case 'linkedin':
			social = 'https://www.linkedin.com/in/jan-kom%C3%ADnek-36b4b7209/';
			break;
		case 'steam':
			social = 'https://steamcommunity.com/id/H7KZ/';
			break;
		case 'discord':
			social = 'https://discord.com/users/466867931821637632';
			break;
		default:
			throw redirect(303, '/');
	}

	throw redirect(302, social);
};
