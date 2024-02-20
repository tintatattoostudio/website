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
			locale: string;
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
