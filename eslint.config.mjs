import antfu from '@antfu/eslint-config'
import tailwind from 'eslint-plugin-tailwindcss'

export default antfu({
	astro: true,

	stylistic: {
		indent: 'tab',
		quotes: 'single',
	},

	rules: {
		'style/jsx-quotes': ['error', 'prefer-single'],
	},
}, ...tailwind.configs['flat/recommended'])
