import { loadTranslations } from '$lib/translations';

export const load = async ({ url }) => {
	const { pathname } = url;

	const storedLocale = (await fetch('/get-locale')).body;
	console.log(storedLocale);
	const initLocale = 'sl';

	await loadTranslations(initLocale, pathname);

	return {};
};
