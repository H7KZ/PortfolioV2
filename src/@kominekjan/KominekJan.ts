import type { RequestEvent } from '@sveltejs/kit';
import login from './auth/login';
import logout from './auth/logout';
import log from './log/log';
import { usePocketBase } from './PocketBase';
import type { ErrorKominekJan } from './types/error.type';

usePocketBase.autoCancellation(false);

interface KominekJan {
	/**
	 * Login to KominekJan
	 * @param username Username
	 * @param password Password
	 * @returns True if login was successful
	 * @throws Error if login was unsuccessful
	 **/
	Login(username: string, password: string): Promise<boolean | ErrorKominekJan>;

	/**
	 * Logout from KominekJan
	 * @returns True if logout was successful
	 * @returns False if logout was unsuccessful
	 **/
	Logout(): boolean;

	/**
	 * Log event
	 * @param event Event to log
	 * @returns void
	 **/
	Log(event: RequestEvent<Partial<Record<string, string>>, string | null>): void;

	/**
	 * Get logs
	 * @returns Logs
	 * @throws Error if logs were not found
	 **/
	GetLogs(): Promise<unknown>;
}

// Path: src\@kominekjan\KominekJan.ts
class KominekJan implements KominekJan {
	async Login(username: string, password: string) {
		return await login(username, password);
	}

	Logout() {
		return logout();
	}

	Log(event: RequestEvent<Partial<Record<string, string>>, string | null>) {
		log(event);
	}

	GetLogs(): Promise<unknown> {
		return usePocketBase.collection('logs').getFullList();
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
