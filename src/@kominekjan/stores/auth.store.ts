import { writable } from 'svelte/store';
import { browser } from '$app/environment';

let token: string = '';

if (browser) {
	const loaded = localStorage.getItem('token');
	token = JSON.parse(loaded ?? '');
}

export const storedToken = writable(token);

if (browser) {
	storedToken.subscribe((value) => localStorage.setItem('token', JSON.stringify(value)));
}
