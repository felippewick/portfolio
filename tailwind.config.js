/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.mdx',
  ],
  theme: {
    extend: {
      scale: {
        '-100': '-1',
      },
      fontFamily: {
        'bricolage-semi': ['var(--font-bricolage-semi)'],
        bricolage: ['var(--font-bricolage)'],
        serif: ['var(--font-kaisei)'],
        inter: ['var(--font-inter)'],
        oswald: ['var(--font-oswald)'],
        roboto: ['var(--font-roboto)'],
        syne: ['var(--font-syne)'],
        poppins: ['var(--font-font-poppins)'],
        mono: ['var(--font-roboto-mono)'],
        work: ['var(--font-work-sans)'],
        fira: ['var(--font-fira-sans)'],
        krona: ['var(--font-krona-one)'],
        grotesk: ['var(--font-grotesk)'],
      },
      typography: {
        quoteless: {
          css: {
            'blockquote p:first-of-type::before': { content: 'none' },
            'blockquote p:first-of-type::after': { content: 'none' },
          },
        },
      },
      backgroundColor: {
        'dark-1': '#111010',
      },
      color: {
        'dark-1': '#111010',
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [require('@tailwindcss/typography')],
};
