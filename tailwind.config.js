/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
        './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      dropShadow: {
				'brutalist-lg': '4px 4px 0px rgba(0, 0, 0, 1)',
        'brutalist-md': '3px 3px 0px rgba(0, 0, 0, 1)'
				// name: 'x-offset y-offset blur color'
			},
      colors: {
        beige: "#F9F5F2",
        mainGrey: "#282825",
        mainGreen: "#009179"
      },
      fontFamily: {
        unigeo: ['Unigeo', 'sans-serif'],
        cabin: ['Cabin', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

