import { loadTranslations } from '$lib/translations';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ fetch, url }) => {
	const { pathname } = url;

	const res = await fetch('/locale');
  const storedLocale = await res.json();
	const locale = storedLocale.locale;
  console.log(locale);

	await loadTranslations(locale, pathname);

	return {};
};
