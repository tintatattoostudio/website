import { persisted } from 'svelte-persisted-store';

export const localeStore = persisted('locale', {
	code: 'sl',
});
