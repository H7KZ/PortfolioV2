import { usePocketBase } from '$kominekjan/PocketBase';
import type { Record } from 'pocketbase';
import { Category } from '../types/category.types';

export default async function getPostCategories(post: string): Promise<Category[]> {
	const record: Record = await usePocketBase
		.collection('posts')
		.getOne(post, { expand: 'categories' });

	const { expand } = record;

	if (!expand) return [];

	const { categories } = expand;

	if (!categories) return [];

	return categories.map(
		(c: { id: string; title: string; key: string; created: string; updated: string }) => {
			const { id, title, key, created, updated } = c;

			return new Category(id, title, key, new Date(created), new Date(updated));
		}
	);
}
