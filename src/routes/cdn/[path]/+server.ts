import { redirect, type RequestEvent, type RequestHandler } from '@sveltejs/kit';

const CDN: Map<string, string> = new Map([
	['ecology', 'https://docs.google.com/presentation/d/1CdWTCnjJc498UmnG8tBo3HnwIWeDaUdxcAHMUYFL0h8/edit?usp=sharing'],
]);

export const GET: RequestHandler = async ({ params }: RequestEvent) => {
	if (!CDN.has(params.path ?? '')) throw redirect(303, '/');

	throw redirect(302, CDN.get(params.path ?? '') ?? '/');
};
