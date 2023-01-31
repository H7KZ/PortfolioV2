import { storedToken } from '$kominekjan/stores/auth.store';
import { get } from 'svelte/store';

export default function logout(): boolean {
	storedToken.set('');

	if (get(storedToken) == '') {
		return true;
	}

	return false;
}
