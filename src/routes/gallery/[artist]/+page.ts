import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { artists } from '$lib/content';
import API from '$lib/api/client';

export const load: PageLoad = async ({ params }) => {
	if (params.artist) {
		const gallery = await API.getGallery(params.artist);

		return {
			artist: artists.find((artist) => artist.gallery === params.artist),
			gallery: gallery?.attributes.images.data,
		};
	}

	error(404, 'Not found');
};
