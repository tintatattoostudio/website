import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import API from '$lib/api/client';

export const load: PageLoad = async ({ params }) => {
	if (params.artist) {
		const artist = await API.getArtistGallery(params.artist, params.locale);

		return {
			artist,
		};
	}

	error(404, 'Not found');
};
