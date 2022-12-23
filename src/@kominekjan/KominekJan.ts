import type { User } from './types/user.types';
import type { Post } from './types/post.types';

import getMe from './users/getMe';

interface useKominekJan {
	signIn(data: any): Promise<void>;

	signUp(data: any): Promise<void>;

	signOut(): Promise<void>;

	getMe(): Promise<User>;
	// getMe().id
	// getMe().name
	// getMe().email
	// getMe().username
	// getMe().avatar
	// getMe().bio
	// getMe().role
	// getMe().created_at
	// getMe().updated_at
	// getMe().delete()
	// getMe().update()
	// getMe().posts()
	// getMe().liked_posts()
	// getMe().comments()
	// getMe().liked_comments()
	getUser(id: string): Promise<User>;
	// getUser(id).id
	// getUser(id).name
	// getUser(id).email
	// getUser(id).username
	// getUser(id).avatar
	// getUser(id).bio
	// getUser(id).role
	// getUser(id).created_at
	// getUser(id).posts()
	// getUser(id).liked_posts()
	// getUser(id).comments()
	// getUser(id).liked_comments()
	getUsers(ids: string[]): Promise<User[]>;
	// -||- but for array of users
	getPost(id: string): Promise<Post>;
	// getPost(id).id
	// getPost(id).creator()
	// getPost(id).title
	// getPost(id).description
	// getPost(id).content
	// getPost(id).thumbnail
	// getPost(id).created_at
	// getPost(id).updated_at
	// getPost(id).tags()
	// getPost(id).categories()
	// getPost(id).delete()
	// getPost(id).update()
	// getPost(id).comments()
	// getPost(id).likes()
	getPosts(ids: string[]): Promise<Post[]>;
	// -||- but for array of posts
	getLatestPost(): Promise<Post>;
	// -||- but for latest post
	getLatestPosts(limit: number): Promise<Post[]>;
	// -||- but for latest posts with limit
	getAllPosts(): Promise<Post[]>;
	// -||- but for all posts
	getAllPosts(limit: number): Promise<Post[]>;
	// -||- but for all posts with limit
	getPostsByTag(tag: string): Promise<Post[]>;
	// -||- but for posts by tag
	getPostsByTags(tags: string[]): Promise<Post[]>;
	// -||- but for posts by tags
	getPostsByCategory(category: string): Promise<Post[]>;
	// -||- but for posts by category
	getPostsByCategories(categories: string[]): Promise<Post[]>;
	// -||- but for posts by categories
}

// Path: src\@kominekjan\KominekJan.ts
class useKominekJan implements useKominekJan {
	getMe(): Promise<User> {
		return getMe();
	}
}

export default useKominekJan;
