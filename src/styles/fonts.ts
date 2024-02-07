import { Cabin, Oswald } from 'next/font/google';

const cabin = Cabin({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cabin',
});

const oswald = Oswald({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-oswald',
});

export const fonts = {
  cabin,
  oswald,
};
