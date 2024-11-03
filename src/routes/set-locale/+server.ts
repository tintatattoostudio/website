import { json } from '@sveltejs/kit';

export async function POST({ request, cookies }) {
	const { locale } = await request.json();

	cookies.set('locale', locale, { path: '/' });

	return json({ success: true });
}
