import { writable } from 'svelte/store';

export const loaded = writable(false);
export const postsStorage = writable([]);
