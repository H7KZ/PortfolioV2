import type { Record } from 'pocketbase';
import { usePocketBase } from '../PocketBase';
import { Tag } from '../types/tag.types';

export default async function getAllTags(): Promise<Tag[]> {
	const records: Record[] = await usePocketBase
		.collection('tags')
		.getFullList(undefined, { sort: '-created' });

	return records.map((record) => {
		const { id, title, key, created, updated } = record;

		return new Tag(id, title, key, new Date(created), new Date(updated));
	});
}
