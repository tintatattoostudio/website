import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { artists } from '$lib/content';
import API from '$lib/api/client';

export const load: PageLoad = async () => {
	const landing = await API.getLanding();

	return {
		landing,
	};
};
