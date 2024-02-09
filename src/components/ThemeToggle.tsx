'use client';

import { Button } from '@/components/core/Button';
import { useIsMounted } from '@/hooks/useIsMounted';
import { WithClassName } from '@/types/props';
import { faGrinWink, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from 'next-themes';
import { FunctionComponent, useMemo } from 'react';

export const ThemeToggle: FunctionComponent<WithClassName> = (props) => {
  const { className } = props;
  const { theme, setTheme } = useTheme();
  const isMounted = useIsMounted();

  const { icon, ariaLabel } = useMemo(() => {
    // this prevents a hydration error, see docs:
    // https://github.com/pacocoursey/next-themes?tab=readme-ov-file#avoid-hydration-mismatch
    if (!isMounted) {
      return {
        icon: faGrinWink,
        ariaLabel: undefined,
      };
    }

    return {
      icon: theme === 'dark' ? faMoon : faSun,
      ariaLabel: `Current theme: ${theme}. Click to toggle theme`,
    };
  }, [theme, isMounted]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Button
      variant="outline"
      color="loud"
      size="icon"
      onClick={toggleTheme}
      icon={icon}
      aria-label={ariaLabel}
      className={className}
    />
  );
};
