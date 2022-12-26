import getFileURL from '$kominekjan/files/getFileURL[col, post, id]';
import { usePocketBase } from '$kominekjan/PocketBase';

import type { Sort } from '$kominekjan/types/sort.types';
import type { Record } from 'pocketbase';
import { Post } from '../types/post.types';

export default async function getPostsByTags(tag: string, sort: Sort): Promise<Post[]> {
	const records: Record[] = await usePocketBase
		.collection('posts')
		.getFullList(undefined, { sort: sort, filter: `tags.key = "${tag}"` });

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
