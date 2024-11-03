import API from '$lib/api/client';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const care = await API.getCare(params.locale);

	return {
		care,
	};
};
