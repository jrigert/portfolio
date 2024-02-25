'use client';

import { ScrollProvider } from '@/components/providers/ScrollProvider';
import { THEMES } from '@/config/global';
import { ThemeProvider } from 'next-themes';
import { FunctionComponent, PropsWithChildren } from 'react';

export const Providers: FunctionComponent<PropsWithChildren> = (props) => {
  const { children } = props;
  return (
    <ThemeProvider attribute="class" defaultTheme="system" themes={THEMES}>
      <ScrollProvider>{children}</ScrollProvider>
    </ThemeProvider>
  );
};
