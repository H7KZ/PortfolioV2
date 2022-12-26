import { usePocketBase } from './PocketBase';

import getAllTags from './tags/getAllTags';
import getAllCategories from './categories/getAllCategories';
import getPost from './posts/getPost[id]';
import getAllPosts from './posts/getAllPosts[limit]';
import getPostsByTag from './posts/getPostsByTag[tag]';
import getPostsByCategory from './posts/getPostsByCategory[category]';

import type { Post } from './types/post.types';
import type { Tag } from './types/tag.types';
import type { Category } from './types/category.types';
import type { Sort } from './types/sort.types';

usePocketBase.autoCancellation(false);

interface KominekJan {
	getAllTags(): Promise<Tag[]>;
	// getTag(id).id
	// getTag(id).title
	// getTag(id).key
	getAllCategories(): Promise<Category[]>;
	// getCategory(id).id
	// getCategory(id).title
	// getCategory(id).key
	getPost(id: string): Promise<Post>;
	// getPost(id).id
	// getPost(id).title
	// getPost(id).description
	// getPost(id).content
	// getPost(id).thumbnail
	// getPost(id).created_at
	// getPost(id).updated_at
	// getPost(id).likes
	// getPost(id).tags()
	// getPost(id).categories()
	getAllPosts(limit: number | undefined, sort: Sort): Promise<Post[]>;
	// -||- but for all posts
	getPostsByTag(tag: string, sort: Sort): Promise<Post[]>;
	// -||- but for posts by tags
	getPostsByCategory(category: string, sort: Sort): Promise<Post[]>;
	// -||- but for posts by categories
}

// Path: src\@kominekjan\KominekJan.ts
class KominekJan implements KominekJan {
	async getAllTags(): Promise<Tag[]> {
		return await getAllTags();
	}

	async getAllCategories(): Promise<Category[]> {
		return await getAllCategories();
	}

	async getPost(id: string): Promise<Post | undefined> {
		return await getPost(id);
	}

	async getAllPosts(limit: number | undefined, sort: Sort): Promise<Post[]> {
		return await getAllPosts(limit, sort);
	}

	async getPostsByTag(tag: string, sort: Sort): Promise<Post[]> {
		return await getPostsByTag(tag, sort);
	}

	async getPostsByCategory(category: string, sort: Sort): Promise<Post[]> {
		return await getPostsByCategory(category, sort);
	}

	static instance: KominekJan;

	static getInstance() {
		if (!this.instance) {
			this.instance = new KominekJan();
		}

		return this.instance;
	}
}

export const useKominekJan: KominekJan = KominekJan.getInstance();
