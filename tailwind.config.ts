import type { Config } from 'tailwindcss'
import fluid, { extract, fontSize, screens } from 'fluid-tailwind'

export default {
	content: { files: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'], extract },
	theme: {
		screens,
		fontSize,
		extend: {
			container: {
				center: true,
				padding: '1rem',
			},
			colors: {
				'primary': '#98989a',
				'accent': '#ffd11a',
				'likes': '#ff5500',
				'background-dark': '#141414',
				'background-light': '#1A1A1A',
				'border': '#262626',
			},
			fontFamily: {
				primary: ['Inter, sans-serif'],
				accent: ['Kumbh Sans', 'sans-serif'],
			},
		},
	},
	plugins: [fluid],
} satisfies Config
