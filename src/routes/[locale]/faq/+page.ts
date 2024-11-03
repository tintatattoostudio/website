import API from '$lib/api/client';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const faq = await API.getFAQ(params.locale);

	return {
		sections: faq,
	};
};
