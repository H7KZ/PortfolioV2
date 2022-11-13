/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			quicksand: ['Quicksand', 'sans-serif'],
			montserrat: ['Montserrat', 'sans-serif']
		},
		colors: {
			textWhite: '#F1F1F1',
			line: '#FFFFFF1A',
			background: '#1D1D1D',
			transparent: 'transparent',
		},
		zIndex: {
			'3': '3',
			'2': '2',
			'1': '1',
			'0': '0',
			'-1': '-1',
			'-2': '-2',
			'-3': '-3'
		},
		extend: {}
	},
	plugins: []
};
