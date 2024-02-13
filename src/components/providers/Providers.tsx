'use client';

import { ScrollProvider } from '@/components/providers/ScrollProvider';
import { ThemeProvider } from 'next-themes';
import { FunctionComponent, PropsWithChildren } from 'react';

export const Providers: FunctionComponent<PropsWithChildren> = (props) => {
  const { children } = props;
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <ScrollProvider>{children}</ScrollProvider>
    </ThemeProvider>
  );
};
