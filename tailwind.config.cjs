const flowbite = require('flowbite/plugin');
const typography = require('@tailwindcss/typography');
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config}*/
const config = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}',
	],

	theme: {
		extend: {
			fontFamily: {
				pacifico: ['Pacifico', ...defaultTheme.fontFamily.mono],
			},
		},
		colors: {
			offblack: '#404040',
		},
	},

	plugins: [flowbite, typography],
};

module.exports = config;
