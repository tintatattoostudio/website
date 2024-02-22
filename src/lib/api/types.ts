export interface Gallery {
	id: number;
	attributes: {
		artist: string;
		images: {
			data: StrapiImage[];
		};
	};
}

export interface FAQ {
	data: {
		attributes: {
			locale: Locales;
			section: FAQSection[];
		};
	};
}

export interface FAQSection {
	title: string;
	content?: string;
	qa: QA[];
}

export interface QA {
	question: string;
	answer: string;
}

export interface CareBase {
	data: {
		attributes: Care;
	};
}

export interface Care {
	title: string;
	locale: Locales;
	sections: WebSegment[];
}

export interface WebSegment {
	title: string;
	content: string;
}

export interface LandingBase {
	data: {
		attributes: Landing;
	};
}

export interface Landing {
	aboutTitle: string;
	aboutContent: string;
	artistsTitle: string;
	artistsContent: string;
	locale: Locales;
}

export enum Locales {
	SL = 'sl',
	EN = 'en',
}

export interface StrapiImage {
	id: number;
	attributes: {
		url: string;
		formats: {
			thumbnail: {
				url: string;
			};
		};
	};
}
