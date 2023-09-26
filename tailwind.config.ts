import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: ' #0085c9',
        secondary: ' #ffffff',
        text1: ' #d9d9d9',
        text2: ' #b0abab',
        decoration: ' #022d43',
        colorbtn: ' #0000FF',
        bg1: ' #1b1b1b',
        bg2: ' #272727',
        bg3: ' #000000',
        bgaboutme: ' #1f1f1f',
        bgcapacities1: ' #292929',
        bgcapacities2: '#1d1d1d',
        detailscapacities: ' #322f2f',
      },
      fontFamily: {
        sans: ['Questrial', 'sans-serif'],
        serif: ['Cinzel', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
