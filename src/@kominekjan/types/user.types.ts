export class User {
	constructor(
		id: string,
		collectionId: string,
		collectionName: string,
		created: string,
		updated: string,
		username: string,
		verified: boolean,
		emailVisibility: boolean,
		email: string,
		name: string,
		avatar: string,
		bio: string,
		roles: string[]
	) {
		this.id = id;
		this.collectionId = collectionId;
		this.collectionName = collectionName;
		this.created = created;
		this.updated = updated;
		this.username = username;
		this.verified = verified;
		this.emailVisibility = emailVisibility;
		this.email = email;
		this.name = name;
		this.avatar = avatar;
		this.bio = bio;
		this.roles = roles;
	}

	id: string;
	collectionId: string;
	collectionName: string;
	created: string;
	updated: string;
	username: string;
	verified: boolean;
	emailVisibility: boolean;
	email: string;
	name: string;
	avatar: string;
	bio: string;
	roles: string[];

	async delete() {
		// Delete user
	}

	async update() {
		// Update user
	}

	async posts() {
		// Get posts
	}

	async liked_posts() {
		// Get posts likes
	}

	async comments() {
		// Get comments
	}

	async liked_comments() {
		// Get comments likes
	}
}
