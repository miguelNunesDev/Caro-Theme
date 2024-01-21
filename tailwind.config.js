module.exports = {
	theme: {
		fontFamily: {
			'open-sans': ['"Open Sans"'],
			'raleway': ['"Raleway"'],
            'real-text': ['"ff-real-text-pro"','"Open Sans"']
		},
		extend: {
			colors: {
				primary: '#F4AC20',
				secondary: '#211E1F',
			}
		},
	},
	content: ['./**/*.php','./js/*.js', './src/**/*.js', './src/**/*.jsx'],
	plugins: [require('@tailwindcss/typography')],
};
