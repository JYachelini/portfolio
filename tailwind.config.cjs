/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				sidebar: 'rgba(38,37,35,0.2)',
				background: '#19196f',
				main: '#4682b4',
			},
		},
		borderColor: {
			default: '#4682b4',
		},
		textFillColor: (theme) => theme('borderColor'),
		textStrokeColor: (theme) => theme('borderColor'),
		textStrokeWidth: (theme) => theme('borderWidth'),
		paintOrder: {
			fsm: { paintOrder: 'fill stroke markers' },
			fms: { paintOrder: 'fill markers stroke' },
			sfm: { paintOrder: 'stroke fill markers' },
			smf: { paintOrder: 'stroke markers fill' },
			mfs: { paintOrder: 'markers fill stroke' },
			msf: { paintOrder: 'markers stroke fill' },
		},
	},
	plugins: [require('tailwindcss-text-fill-stroke')()],
}
