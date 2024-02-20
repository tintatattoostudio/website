const flowbite = require('flowbite/plugin');
const typography = require('@tailwindcss/typography');

/** @type {import('tailwindcss').Config}*/
const config = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}',
	],

	theme: {
		extend: {},
		colors: {
			offblack: '#404040',
		},
	},

	plugins: [flowbite, typography],
};

module.exports = config;
