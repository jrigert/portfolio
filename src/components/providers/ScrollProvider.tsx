'use client';

import { FunctionComponent, PropsWithChildren, useMemo, useState } from 'react';

import { createContext } from 'react';

export interface ScrollContextValue {
  activeSection: string;
  setActiveSection: (value: string) => void;
}

export const ScrollContext = createContext<ScrollContextValue | undefined>(
  undefined,
);

export const ScrollProvider: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  const [activeSection, setActiveSection] = useState<string>('');

  const contextValue: ScrollContextValue = useMemo(
    () => ({ activeSection, setActiveSection }),
    [activeSection],
  );

  return (
    <ScrollContext.Provider value={contextValue}>
      {children}
    </ScrollContext.Provider>
  );
};
