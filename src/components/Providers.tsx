'use client';

import { ThemeProvider } from 'next-themes';
import { FunctionComponent, PropsWithChildren } from 'react';

export const Providers: FunctionComponent<PropsWithChildren> = (props) => {
  const { children } = props;
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};
