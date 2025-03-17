import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
  const res = await fetch('/locale');
  const storedLocale = await res.json();
	const locale = storedLocale.locale;
	console.log(locale)
	redirect(301, locale);
};
