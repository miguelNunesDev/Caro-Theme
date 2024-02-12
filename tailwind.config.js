module.exports = {
	theme: {
		fontFamily: {
			'open-sans': ['"Open Sans"'],
			raleway: ['"Raleway"'],
			'real-text': ['"ff-real-text-pro"', '"Open Sans"'],
		},
		extend: {
			colors: {
				primary: '#F4AC20',
				secondary: '#211E1F',
			},
		},
	},
	content: [
		'./partials/**/*.{php,js,jsx,html}',
		'./src/**/*.{php,js,jsx,html}',
		'./js/**/*.{php,js,jsx,html}',
		'./js/**/*.{php,js,jsx,html}',
		'./*.{php,js,jsx,html}',
	],
	plugins: [require('@tailwindcss/typography')],
};
