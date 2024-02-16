import { Space_Grotesk, Noto_Sans as HeadingFont } from 'next/font/google';

const body = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

const heading = HeadingFont({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
});

export const fonts = {
  body,
  heading,
};
