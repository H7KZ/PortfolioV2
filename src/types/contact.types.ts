import type { SvelteComponent } from 'svelte';

export type ContactLink = {
	icon: SvelteComponent;
	href: string;
};

export type ContactLinkArray = ContactLink[];
