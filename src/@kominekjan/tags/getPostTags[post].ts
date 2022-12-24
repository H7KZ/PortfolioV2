import { usePocketBase } from '$kominekjan/PocketBase';
import type { Record } from 'pocketbase';
import { Tag } from '../types/tag.types';

export default async function getPostTags(post: string): Promise<Tag[]> {
	const record: Record = await usePocketBase.collection('posts').getOne(post, { expand: 'tags' });

	const { expand } = record;

	if (!expand) return [];

	const { tags } = expand;

	if (!tags) return [];

	return tags.map(
		(t: { id: string; title: string; key: string; created: string; updated: string }) => {
			const { id, title, key, created, updated } = t;

			return new Tag(id, title, key, new Date(created), new Date(updated));
		}
	);
}
