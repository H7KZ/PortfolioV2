export class Category {
	constructor(id: string, title: string, key: string, created: Date, updated: Date) {
		this.id = id;
		this.title = title;
		this.key = key;
		this.created = created;
		this.updated = updated;
	}
	id: string;
	title: string;
	key: string;
	created: Date;
	updated: Date;
}
