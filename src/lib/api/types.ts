export interface Gallery {
	id: number;
	attributes: {
		artist: string;
		images: {
			data: StrapiImage[];
		};
	};
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
