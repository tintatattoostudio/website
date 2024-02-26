import type { PageLoad } from './$types';
import API from '$lib/api/client';

export const load: PageLoad = async () => {
	const landing = await API.getLanding(true);
	const artists = await API.getArtists(true);

	return {
		landing,
		artists,
	};
};
