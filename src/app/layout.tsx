import { Header } from '@/components/navigation/Header';
import { Providers } from '@/components/providers/Providers';
import { BASE_URL } from '@/config/global';
import { fonts } from '@/styles/fonts';
import { classNames } from '@/utils/style';
import type { Metadata } from 'next';

import '@/styles/globals.css';
import { ReactNode } from 'react';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

// see docs: https://fontawesome.com/docs/web/use-with/react/use-with
config.autoAddCss = false;

const titleDescriptionMetadata = {
  title: 'Jon Rigert',
  description:
    'Professional portfolio for Jon Rigert - Web Developer, Architect and Director',
} as const;

export const metadata: Metadata = {
  ...titleDescriptionMetadata,
  metadataBase: new URL(BASE_URL),
  openGraph: {
    ...titleDescriptionMetadata,
    type: 'profile',
    url: BASE_URL,
    firstName: 'Jon',
    lastName: 'Rigert',
    gender: 'male',
    images: [`${BASE_URL}/images/logo.svg`],
  },
};

const fontVariableClassNames = `${fonts.body.variable} ${fonts.heading.variable}`;

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={classNames('scroll-smooth', fontVariableClassNames)}
    >
      <body
        suppressHydrationWarning
        className="bg-background font-body text-base text-foreground"
      >
        <Providers>
          <div className="min-h-screen">
            <Header />
            <main id="main">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
