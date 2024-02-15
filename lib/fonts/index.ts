import {
  Inter,
  Roboto,
  Roboto_Mono,
  Poppins,
  Oswald,
  Syne,
  Work_Sans,
  Fira_Sans,
  Krona_One,
} from 'next/font/google';
import localFont from 'next/font/local';

export const bricolage = localFont({
  src: [
    {
      path: '../../public/fonts/BricolageGrotesque.ttf',
    },
  ],
  variable: '--font-bricolage',
});
export const bricolageSemi = localFont({
  src: [
    {
      path: '../../public/fonts/BricolageGrotesque_SemiCondensed-Regular.ttf',
    },
  ],
  variable: '--font-bricolage-semi',
});

export const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});
export const oswald = Oswald({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-oswald',
});
export const work_sans = Work_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-work-sans',
});
export const fira_sans = Fira_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fira-sans',
});
export const krona_one = Krona_One({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-krona-one',
});
export const syne = Syne({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-syne',
});

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

export const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
});

export const kaisei = localFont({
  src: '../../public/fonts/kaisei-tokumin-latin-700-normal.woff2',
  weight: '700',
  variable: '--font-kaisei',
  display: 'swap',
});

export const grotesk = localFont({
  src: [
    {
      path: '../../public/fonts/grotesk/CraftworkGrotesk-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/grotesk/CraftworkGrotesk-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/grotesk/CraftworkGrotesk-SemiBold.woff2',
      weight: '600  ',
      style: 'normal',
    },
    {
      path: '../../public/fonts/grotesk/CraftworkGrotesk-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-grotesk',
});
