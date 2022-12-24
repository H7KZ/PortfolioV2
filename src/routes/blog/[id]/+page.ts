import { error } from '@sveltejs/kit';
import { useKominekJan } from '$kominekjan/KominekJan';

const { getPost } = useKominekJan;

/** @type {import('./$types').PageLoad} */
export async function load({ params }: { params: { id: string } }) {
	const post = await getPost(params.id);

	if (!post) {
		throw error(404, 'Not found');
	}

	return {
		post: post
	};
}
