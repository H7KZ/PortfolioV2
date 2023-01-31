import { sequence } from '@sveltejs/kit/hooks';
import type { Handle } from '@sveltejs/kit';
import useKominekJan from '$kominekjan/KominekJan';

const { Log } = useKominekJan;

const logger: Handle = async ({ event, resolve }) => {
	const response = await resolve(event);

	Log(event);

	return response;
};

export const handle: Handle = sequence(logger);
