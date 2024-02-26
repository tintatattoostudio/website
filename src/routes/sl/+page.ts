import type { PageLoad } from './$types';
import API from '$lib/api/client';

export const load: PageLoad = async () => {
	const landing = await API.getLanding(false);
	const artists = await API.getArtists(false);

	return {
		landing,
		artists,
	};
};
