import getPostCategories from '../categories/getPostCategories[post]';
import getPostTags from '../tags/getPostTags[post]';

import type { Category } from './category.types';
import type { Tag } from './tag.types';

export class Post {
	constructor(
		id: string,
		title: string,
		content: string,
		created: Date,
		updated: Date,
		likes: number = 0,
		description: string = '',
		thumbnail: string = ''
	) {
		this.id = id;
		this.title = title;
		this.description = description;
		this.content = content;
		this.thumbnail = thumbnail;
		this.created = created;
		this.updated = updated;
		this.likes = likes;
	}
	id: string;
	title: string;
	description: string;
	content: string;
	thumbnail: string;
	created: Date;
	updated: Date;
	likes: number;
	tagsCache: Tag[] | undefined;
	categoriesCache: Category[] | undefined;

	async tags(): Promise<Tag[]> {
		if (this.tagsCache) {
			return this.tagsCache;
		}

		this.tagsCache = await getPostTags(this.id);

		return this.tagsCache;
	}

	async categories(): Promise<Category[]> {
		if (this.categoriesCache) {
			return this.categoriesCache;
		}

		this.categoriesCache = await getPostCategories(this.id);

		return this.categoriesCache;
	}
}
