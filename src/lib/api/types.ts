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

export interface CareBase {
	data: {
		attributes: Care;
	};
}

export interface Care {
	title: string;
	locale: string;
	sections: WebSegment[];
}

export interface WebSegment {
	title: string;
	content: string;
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
