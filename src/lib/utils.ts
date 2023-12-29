import { PUBLIC_API_URL } from '$env/static/public';

export function chunkArray<T>(arr: T[] | undefined, size: number): T[][] {
	if (!arr) return [];

	const chunkedArr: T[][] = [];
	let index = 0;

	while (index < arr.length) {
		chunkedArr.push(arr.slice(index, index + size));
		index += size;
	}

	return chunkedArr;
}

export function getImageUrl(path: string) {
	return PUBLIC_API_URL + path;
}
