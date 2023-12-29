// https://localhost:1337/api/galleries?filters[artist][$eq]=lana&populate=*
import Axios from 'axios';
import { PUBLIC_API_URL } from '$env/static/public';
import type { Gallery } from './types';
import { artists } from '$lib/content';

const axiosInstance = Axios.create({
	baseURL: `${PUBLIC_API_URL}/api`,
});

module API {
	export async function getGallery(artist: string) {
		if (artists.filter((e) => e.gallery === artist).length <= 0) return;

		const data = await axiosInstance.get<{ data: Gallery[] }>(
			`/galleries?filters[artist][$eq]=${artist}&populate=*`,
		);

		return data.data.data.at(0);
	}
}

export default API;
