import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary':'#41A0E4',
        'persian-plum': {
          50: '#fef2f3',
          100: '#fde3e5',
          200: '#fdcbd0',
          300: '#faa7af',
          400: '#f6737f',
          500: '#ec4756',
          600: '#d92939',
          700: '#b61f2d',
          800: '#971d28',
          900: '#721c24',
        },
        'grey' :'#597393',
        'low-grey': '#F9F9F9',
       
      },
    },
  },
  plugins: []
}
export default config
