import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'nexa-regular': ["'Nexaregular'", 'sans-serif'],
        'nexa-bold': ["'Nexabold'", 'sans-serif'],
        sans: ["'Nexaregular'", 'sans-serif'], // Set as default sans font
      },
    },
  },
  plugins: [],
}
export default config
