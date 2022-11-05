/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			sans: ['Quicksand', 'sans-serif'],
			sans: ['Montserrat', 'sans-serif']
		},
		colors: {
			textWhite: '#F1F1F1',
			line: '#ffffff45',
			background: '#1D1D1D'
		},
		zIndex: {
			'3': '3',
			'2': '2',
			'1': '1',
			'-1': '-1',
			'-2': '-2',
			'-3': '-3'
		},
		extend: {}
	},
	plugins: []
};
