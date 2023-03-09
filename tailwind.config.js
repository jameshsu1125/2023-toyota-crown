/* eslint-disable import/no-extraneous-dependencies */
// ? => https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/defaultConfig.stub.js
const { fontSize } = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./src/**/*.{html,js}'],
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#FFFFFF',
					secondary: '#152747',
					accent: '#513448',
					neutral: '#171618',
					'base-100': '#09090B',
					info: '#66C6FF',
					success: '#87D039',
					warning: '#E2D562',
					error: '#FF6F6F',
				},
			},
		],
	},
	theme: {
		container: { screen: {} },
		fontSize: {
			...fontSize,
		},
		fontFamily: {
			notoSansRegular: ['Noto Sans TC', 'sans-serif'],
			sourceSansPro: ['Source Sans Pro', 'sans-serif'],
		},
	},
	// eslint-disable-next-line global-require
	plugins: [require('daisyui')],
};
