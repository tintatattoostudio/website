import { PUBLIC_API_URL } from '$env/static/public';

export function getImageUrl(path: string) {
	return PUBLIC_API_URL + path;
}
