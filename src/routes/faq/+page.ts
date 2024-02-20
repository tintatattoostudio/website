import API from '$lib/api/client';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const faq = await API.getFAQ();

	return {
		sections: faq,
	};
};
