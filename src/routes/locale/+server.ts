import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

// Get locale
export const GET: RequestHandler = ({ cookies }) => {
  return json({ locale: cookies.get('locale') ?? 'sl' });
}

// Set locale
export const POST: RequestHandler = async ({ request, cookies }) => {
	const { locale } = await request.json();

	cookies.set('locale', locale, { path: '' });

	return json({ success: true });
}
