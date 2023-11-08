/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}','./node_modules/flowbite/**/*.js'],
	theme: {
		extend: {
			colors: {
				'agro-green': '#8BBF20',
			}
		},
	},
	plugins: [
		require('flowbite/plugin')
	],
}
