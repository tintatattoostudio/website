function getRoutes(locale: string) {
	return [
		{
			name: "common.navigation.about",
			link: `/${locale}`,
		},
		{
			name: 'common.navigation.care',
			link: `/${locale}/care`,
		},
		{
			name: 'common.navigation.instructions',
			link: `/${locale}/instructions`,
		},
		{
			name: 'common.navigation.faq',
			link: `/${locale}/faq`,
		},
	];
}

export default getRoutes;
