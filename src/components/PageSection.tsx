'use client';

import { Container, ContainerProps } from '@/components/core/Container';
import { useOnScroll } from '@/hooks/scroll/useOnScroll';
import { useScrollContext } from '@/hooks/scroll/useScrollContext';
import { classNames } from '@/utils/style';
import { FunctionComponent, useMemo, useRef } from 'react';

// threshold for when section should be considered active (50% of screen)
const ACTIVE_SCROLL_THRESHOLD = 0.5;

export interface HomeSectionProps extends ContainerProps {
  id: string;
  offsetScroll?: boolean;
  wrapperClassName?: string;
}

export const PageSection: FunctionComponent<HomeSectionProps> = (props) => {
  const {
    id,
    children,
    className,
    offsetScroll = true,
    wrapperClassName,
    ...containerProps
  } = props;

  const containerRef = useRef<HTMLDivElement>(null);

  const containerClassNames = useMemo(
    () => classNames({ 'scroll-mt-14': offsetScroll }, className),
    [className, offsetScroll],
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
    <div className={wrapperClassName} ref={containerRef}>
      <Container id={id} className={containerClassNames} {...containerProps}>
        {children}
      </Container>
    </div>
  );
};
