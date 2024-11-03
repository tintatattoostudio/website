import { json } from '@sveltejs/kit';

export function GET({ cookies }) {
	return json({ locale: cookies.get('locale') ?? 'sl' });
}
