module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'pub-yellow': '#FFF695'
			},
			fontFamily: {
				sans: [
					'Helvetica neue',
					'-apple-system',
					'BlinkMacSystemFont',
					'Segoe UI',
					'Roboto',
					'Oxygen',
					'Ubuntu',
					'Cantarell',
					'Open Sans',
					'Helvetica Neue',
					'IBM Plex Sans Thai',
					'sans-serif'
				],
				serif: ['Georgia', 'Times New Roman', 'Times', 'serif'],
				thai: ['IBM Plex Sans Thai', 'Sarabun', '-apple-system', 'TH Sarabun new', 'sans-serif']
			}
		}
	},
	plugins: []
};
