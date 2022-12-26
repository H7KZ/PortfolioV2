import getFileURL from '$kominekjan/files/getFileURL[col, post, id]';
import { usePocketBase } from '$kominekjan/PocketBase';
import type { Record } from 'pocketbase';
import { Post } from '../types/post.types';

export default async function getPost(id: string): Promise<Post | undefined> {
	const record: Record | undefined = await usePocketBase
		.collection('posts')
		.getOne(id)
		.catch(() => undefined);

	if (!record) {
		return undefined;
	}

	const { title, content, created, updated, likes, description, thumbnail } = record;

	return new Post(
		id,
		title,
		content,
		new Date(created),
		new Date(updated),
		likes,
		description,
		getFileURL(record, thumbnail)
	);
}
