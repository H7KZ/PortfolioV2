import { sequence } from '@sveltejs/kit/hooks';
import type { Handle } from '@sveltejs/kit';

const logger: Handle = async ({ event, resolve }) => {
	const response = await resolve(event);

	event.fetch('https://portfolio-api-9e7f.onrender.com/count/plus/portfolio', {
		method: 'POST',
	});

	return response;
};

export const handle: Handle = sequence(logger);
