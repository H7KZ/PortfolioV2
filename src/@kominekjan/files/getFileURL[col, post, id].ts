import { usePocketBase } from '$kominekjan/PocketBase';
import type { Record } from 'pocketbase';

export default function getFileURL(collection: Record, post: string): string {
	return usePocketBase.getFileUrl(collection, post);
}
