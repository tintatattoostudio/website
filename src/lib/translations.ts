import i18n from 'sveltekit-i18n';

const config = ({
  loaders: [
    {
      locale: 'en',
      key: 'common',
      loader: async () => (
        await import('./locales/en.json')
      ).default,
    },
    {
      locale: 'sl',
      key: 'common',
      loader: async () => (
        await import('./locales/sl.json')
      ).default,
    },
  ],
});

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);