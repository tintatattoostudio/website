import { redirect } from '@sveltejs/kit';

export const load = ({ cookies }) => {
	const locale = cookies.get('locale') ? `/${cookies.get('locale')}` : '/sl';
	redirect(301, locale);
};
