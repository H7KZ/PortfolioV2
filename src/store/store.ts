import { writable } from 'svelte/store';

export const loaded = writable(true);
export const postsStorage = writable([]);
