/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{html,js,svelte,ts}'
	],
	theme: {
		fontFamily: {
			quicksand: ['Quicksand', 'sans-serif'],
			montserrat: ['Montserrat', 'sans-serif'],
			unbounded: ['Unbounded', 'sans-serif']
		},
		colors: {
			textWhite: '#F1F1F1',
			line: '#FFFFFF1A',
			background: '#1D1D1D',
			hover: '#C92050',
			transparent: 'transparent'
		},
		zIndex: {
			4: '4',
			3: '3',
			2: '2',
			1: '1',
			0: '0',
			'-1': '-1',
			'-2': '-2',
			'-3': '-3',
			'-4': '-4'
		},
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--gradient-color-stops))'
			}
		}
	},
	plugins: []
};
