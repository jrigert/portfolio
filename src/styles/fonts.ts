import { Space_Grotesk, Oswald } from 'next/font/google';

const body = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

const heading = Oswald({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
});

export const fonts = {
  body,
  heading,
};
