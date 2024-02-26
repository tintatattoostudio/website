// https://localhost:1337/api/galleries?filters[artist][$eq]=lana&populate=*
import Axios from 'axios';
import { PUBLIC_API_URL } from '$env/static/public';
import type { Care, CareBase, FAQ, FAQSection, Artist, Landing, LandingBase } from './types';

const axiosInstance = Axios.create({
	baseURL: `${PUBLIC_API_URL}/api`,
});

module API {
	export function getImageUrl(url: string | undefined) {
		if (!url) return '';

		return PUBLIC_API_URL + url;
	}

	export async function getArtistGallery(artist: string) {
		const data = await axiosInstance.get<{ data: Artist[] }>(
			`/galleries?filters[artist][$eq]=${artist}&populate=deep`,
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

	export async function getArtists(): Promise<Artist[]> {
		const data = await axiosInstance.get<{ data: Artist[] }>('/galleries?populate=pfp');

		return data.data.data;
	}
}

export default API;
