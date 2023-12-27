const daisyui = require('daisyui');
const flowbite = require('flowbite/plugin')

/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {},
	},

	plugins: [daisyui, flowbite],
};

module.exports = config;
