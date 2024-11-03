import type { PageLoad } from './$types';
import API from '$lib/api/client';

export const load: PageLoad = async ({ params }) => {
	const landing = await API.getLanding(params.locale);
	const artists = await API.getArtists(params.locale);

	return {
		landing,
		artists,
	};
};
