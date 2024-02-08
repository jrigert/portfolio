'use client';

import { Button } from '@/components/core/Button';
import { useIsMounted } from '@/hooks/useIsMounted';
import { faGrinWink, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTheme } from 'next-themes';
import { FunctionComponent, useMemo } from 'react';

export const ThemeToggle: FunctionComponent = () => {
  const { theme, setTheme } = useTheme();
  const isMounted = useIsMounted();

  const icon = useMemo(() => {
    // this prevents a hydration error, see docs:
    // https://github.com/pacocoursey/next-themes?tab=readme-ov-file#avoid-hydration-mismatch
    if (!isMounted) {
      // ;D
      return faGrinWink;
    }
    return theme === 'dark' ? faMoon : faSun;
  }, [theme, isMounted]);

  // if (!isMounted) {
  //   return null;
  // }

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Button variant="outline" color="loud" onClick={toggleTheme} icon={icon}>
      Toggle Theme
    </Button>
  );
};
