import type { Record } from 'pocketbase';
import { usePocketBase } from '../PocketBase';
import { Category } from '../types/category.types';

export default async function getAllCategories(): Promise<Category[]> {
	const records: Record[] = await usePocketBase
		.collection('categories')
		.getFullList(undefined, { sort: '-created' });

	return records.map((record) => {
		const { id, title, key, created, updated } = record;

		return new Category(id, title, key, new Date(created), new Date(updated));
	});
}
