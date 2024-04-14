/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
	"./node_modules/tw-elements/js/**/*.js"],
	theme: {
		extend: {},
	},
	plugins: [require("tw-elements/plugin.cjs")]
}


