import PocketBase from 'pocketbase';

class PocketBaseService {
	static instance: PocketBase;

	static getInstance() {
		if (!this.instance) {
			this.instance = new PocketBase('https://pb.kominekjan.cz');
		}

		return this.instance;
	}
}

export const usePocketBase: PocketBase = PocketBaseService.getInstance();
