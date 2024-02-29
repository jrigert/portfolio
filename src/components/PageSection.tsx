'use client';

import { Container, ContainerProps } from '@/components/core/Container';
import { useOnScroll } from '@/hooks/scroll/useOnScroll';
import { useScrollContext } from '@/hooks/scroll/useScrollContext';
import { classNames } from '@/utils/style';
import { FunctionComponent, useMemo, useRef } from 'react';

// threshold for when section should be considered active and highlight in the navigation (50% of screen)
const ACTIVE_SCROLL_THRESHOLD = 0.5;

export interface PageSectionProps extends ContainerProps {
  id: string;
  offsetScroll?: boolean;
  variant?: 'standard' | 'secondary';
  wrapperClassName?: string;
}

export const PageSection: FunctionComponent<PageSectionProps> = (props) => {
  const {
    id,
    children,
    className,
    offsetScroll = true,
    variant,
    wrapperClassName,
    ...containerProps
  } = props;

  const containerRef = useRef<HTMLDivElement>(null);

  const containerClassNames = useMemo(
    () => classNames({ 'scroll-mt-14': offsetScroll }, className),
    [className, offsetScroll],
  );

  const wrapperClassNames = useMemo(
    () =>
      classNames(
        variant === 'secondary' && [
          'bg-background-secondary',
          'light:[--primary:--cyan-dark]',
        ],
        wrapperClassName,
      ),
    [variant, wrapperClassName],
  );

  const { setActiveSection } = useScrollContext();

  // fired when scrolling, tracks the active page section
  // to highlight the appropriate nav link
  useOnScroll(() => {
    const { current } = containerRef;
    if (!current) {
      return;
    }

    const { top, bottom } = current.getBoundingClientRect();
    const threshold = window.innerHeight * ACTIVE_SCROLL_THRESHOLD;

    // active if the top is above (or equal to) the threshold point
    // and the bottom is below it (to prevent more than one being active at a time)
    const isActive = top <= threshold && bottom > threshold;

    if (isActive) {
      // notify the provider
      setActiveSection(id);
    }
  });

  return (
    <div className={wrapperClassNames} ref={containerRef}>
      <Container id={id} className={containerClassNames} {...containerProps}>
        {children}
      </Container>
    </div>
  );
};
