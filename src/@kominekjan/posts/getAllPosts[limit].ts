import { usePocketBase } from '$kominekjan/PocketBase';
import getFileURL from '$kominekjan/files/getFileURL[col, post, id]';

import type { Sort } from '$kominekjan/types/sort.types';
import { Post } from '../types/post.types';
import type { Record } from 'pocketbase';

export default async function getAllPosts(limit: number | undefined, sort: Sort): Promise<Post[]> {
	if (limit != undefined && limit < 1) {
		return [];
	}

	const records: Record[] = await usePocketBase
		.collection('posts')
		.getFullList(limit, { sort: sort });

	return records.map((record) => {
		const { id, title, content, created, updated, likes, description, thumbnail } = record;

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
	});
}
