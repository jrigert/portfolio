'use client';

import { Button } from '@/components/core/Button';
import { Heading } from '@/components/core/Heading';
import { Popover } from '@/components/core/Popover';
import { RadioGroup, RadioGroupItem } from '@/components/core/RadioGroup';
import { useIsMounted } from '@/hooks/useIsMounted';
import { WithClassName } from '@/types/props';
import {
  faGrinWink,
  faMoon,
  faSun,
  faCircleHalfStroke,
} from '@fortawesome/free-solid-svg-icons';
import { useTheme } from 'next-themes';
import { FunctionComponent, useMemo } from 'react';

const RADIO_GROUP_ITEMS: RadioGroupItem[] = [
  {
    label: 'System',
    value: 'system',
  },
  {
    label: 'Light',
    value: 'light',
  },
  {
    label: 'Dark',
    value: 'dark',
  },
  {
    label: 'High Contrast',
    value: 'highContrast',
  },
];

const ICON_MAP = {
  dark: faMoon,
  light: faSun,
  highContrast: faCircleHalfStroke,
} as const;
type IconMapKey = keyof typeof ICON_MAP;

export const ThemeToggle: FunctionComponent<WithClassName> = (props) => {
  const { className } = props;
  const { theme, setTheme, resolvedTheme, themes } = useTheme();
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
      icon: resolvedTheme ? ICON_MAP[resolvedTheme as IconMapKey] : faGrinWink,
      ariaLabel: `Click to change theme. Current theme: ${theme}`,
    };
  }, [theme, isMounted]);

  const Trigger = (
    <Button
      variant="naked"
      size="icon"
      color="default-on-dark"
      icon={icon}
      aria-label={ariaLabel}
      className={className}
    />
  );

  return (
    <Popover trigger={Trigger}>
      <Heading tag="h2" tagStyle="h5">
        Theme
      </Heading>

      <form>
        <RadioGroup
          items={RADIO_GROUP_ITEMS}
          aria-label="Site Color Theme"
          value={theme ?? ''}
          onChange={setTheme}
        />
      </form>
    </Popover>
  );
};
