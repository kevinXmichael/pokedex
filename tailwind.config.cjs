/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts,css}'],
	theme: {
		extend: {}
	},
	plugins: [
		require('daisyui'),

		require('tailwindcss-fluid-type')({
			settings: {
				fontSizeMin: 1.125, // 1.125rem === 18px
				fontSizeMax: 1.25, // 1.25rem === 20px
				ratioMin: 1.125, // Multiplicator Min
				ratioMax: 1.2, // Multiplicator Max
				screenMin: 20, // 20rem === 320px
				screenMax: 96, // 96rem === 1536px
				unit: 'rem', // default is rem but it's also possible to use 'px'
				prefix: '', // set a prefix to use it alongside the default font sizes
				extendValues: true // When you set extendValues to true it will extend the default values. Set it to false to overwrite the values.
			},
			prefix: 'fluid-',

			values: {
				xs: [-2, 1.6],
				sm: [-1, 1.6],
				base: [
					0,
					{
						lineHeight: 1.6,
						letterSpacing: '-0.1rem'
					}
				],
				lg: [1, 1.6],
				xl: [2, 1.2],
				'2xl': [3, 1.2],
				'3xl': [4, 1.2],
				'4xl': [5, 1.1],
				'5xl': [6, 1.1],
				'6xl': [7, 1.1],
				'7xl': [8, 1],
				'8xl': [9, 1],
				'9xl': [10, 1],
				'20xl': [20, 1]
			},

			variants: {
				fluidType: ['responsive']
			}
		})
	]
};
