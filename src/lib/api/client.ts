// https://localhost:1337/api/galleries?filters[artist][$eq]=lana&populate=*
import Axios from 'axios';
import { PUBLIC_API_URL } from '$env/static/public';
import type { Care, CareBase, FAQ, FAQSection, Gallery, Landing, LandingBase } from './types';
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

	export async function getFAQ(): Promise<FAQSection[]> {
		const data = await axiosInstance.get<FAQ>('/faq?populate=deep');

		return data.data.data.attributes.section;
	}

	export async function getCare(): Promise<Care> {
		const data = await axiosInstance.get<CareBase>('/care?populate=deep');

		return data.data.data.attributes;
	}

	export async function getLanding(): Promise<Landing> {
		const data = await axiosInstance.get<LandingBase>('/landing');

		return data.data.data.attributes;
	}
}

export default API;
