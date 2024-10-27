// https://localhost:1337/api/galleries?filters[artist][$eq]=lana&populate=*
import Axios from 'axios';
import { PUBLIC_API_URL } from '$env/static/public';
import type {
	Care,
	CareBase,
	FAQ,
	FAQSection,
	Artist,
	Landing,
	LandingBase,
	InstructionsBase,
	Instructions,
} from './types';

const axiosInstance = Axios.create({
	baseURL: `${PUBLIC_API_URL}/api`,
});

export default class API {
	static getImageUrl(url: string | undefined) {
		if (!url) return '';
	
		return PUBLIC_API_URL + url;
	}
	
	static async getArtistGallery(artist: string, en: boolean) {
		const locale = en ? '&locale=en' : '';
		const data = await axiosInstance.get<{ data: Artist[] }>(
			`/galleries?filters[artist][$eq]=${artist}&populate=deep${locale}`,
		);
	
		return data.data.data.at(0);
	}
	
	static async getFAQ(en: boolean): Promise<FAQSection[]> {
		const locale = en ? '&locale=en' : '';
		const data = await axiosInstance.get<FAQ>(`/faq?populate=deep${locale}`);
	
		return data.data.data.attributes.section;
	}
	
	static async getCare(en: boolean): Promise<Care> {
		const locale = en ? '&locale=en' : '';
		const data = await axiosInstance.get<CareBase>(`/care?populate=deep${locale}`);
	
		return data.data.data.attributes;
	}
	
	static async getInstructions(en: boolean): Promise<Instructions> {
		const locale = en ? '&locale=en' : '';
		const data = await axiosInstance.get<InstructionsBase>(`/pretattoo?populate=deep${locale}`);
	
		return data.data.data.attributes;
	}
	
	static async getLanding(en: boolean): Promise<Landing> {
		const locale = en ? '?locale=en' : '';
		const data = await axiosInstance.get<LandingBase>(`/landing${locale}`);
	
		return data.data.data.attributes;
	}
	
	static async getArtists(en: boolean): Promise<Artist[]> {
		const locale = en ? '&locale=en' : '';
		const data = await axiosInstance.get<{ data: Artist[] }>(`/galleries?populate=deep${locale}`);
	
		return data.data.data;
	}	
}
