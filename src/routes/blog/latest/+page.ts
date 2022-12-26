import { useKominekJan } from '$kominekjan/KominekJan';
import { redirect } from '@sveltejs/kit';

const { getAllPosts } = useKominekJan;

/** @type {import('./$types').PageLoad} */
export async function load() {
	throw redirect(302, `/blog/${(await getAllPosts(1, '-created'))[0].id}`);
}
