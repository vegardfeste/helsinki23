/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			'recoleta': ['Recoleta'],
			'graphik': ['Graphik']
		},
		extend: {
			colors: {
				'light-purple': '#534DAC',
				'dark-purple': '#35316E',
				'robins-egg-blue': '#03DAC6'
			},

		},
	},
	plugins: [],
}
