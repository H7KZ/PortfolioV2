import type { RequestEvent } from '@sveltejs/kit';
import log from './log/log';
import { usePocketBase } from './PocketBase';

usePocketBase.autoCancellation(false);

interface KominekJan {
	/**
	 * Log event
	 * @param event Event to log
	 * @returns void
	 **/
	Log(event: RequestEvent<Partial<Record<string, string>>, string | null>): void;
}

// Path: src\@kominekjan\KominekJan.ts
class KominekJan implements KominekJan {
	Log(event: RequestEvent<Partial<Record<string, string>>, string | null>) {
		log(event);
	}

	static instance: KominekJan;

	static getInstance() {
		if (!this.instance) {
			this.instance = new KominekJan();
		}

		return this.instance;
	}
}

const useKominekJan: KominekJan = KominekJan.getInstance();

export default useKominekJan;
