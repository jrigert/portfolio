import { Cabin, Source_Code_Pro } from 'next/font/google';

const cabin = Cabin({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cabin',
});

const sourceCode = Source_Code_Pro({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-source-code',
});

export const fonts = {
  cabin,
  sourceCode,
};
