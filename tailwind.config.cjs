/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			'recoleta': ["Recoleta", "serif"],
			'graphik': ['"Graphik Web"', "system-ui", "sans-serif"],
		  },
		extend: {
			colors: {
				'light-purple': '#534DAC'
			},
		},
	},
	plugins: [],
}
