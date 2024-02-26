import API from '$lib/api/client';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const care = await API.getInstructions(false);

	return {
		care,
	};
};
