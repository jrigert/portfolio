import { useOnClickOutside } from '@/hooks/useOnClickOutside';
import { useTimeout } from '@/hooks/useTimeout';
import { useEffect, useState } from 'react';

type AnimationState = 'closed' | 'opening' | 'open' | 'closing';

const SLIDE_DURATION = 250;

export interface UseMobileNavResult {
  shouldShowMobileNav: boolean;
  animationState: AnimationState;
  toggleMobileNav: () => void;
  openMobileNav: () => void;
  closeMobileNav: () => void;
  registerNavRef: (element: HTMLElement | null) => void;
}

export const useMobileNav = (): UseMobileNavResult => {
  const [shouldShowMobileNav, setShouldShowMobileNav] = useState(false);
  const toggleMobileNav = () => setShouldShowMobileNav((value) => !value);
  const openMobileNav = () => setShouldShowMobileNav(true);
  const closeMobileNav = () => setShouldShowMobileNav(false);

  const [animationState, setAnimationState] =
    useState<AnimationState>('closed');
  const { registerRef: registerNavRef } = useOnClickOutside(closeMobileNav);

  useEffect(() => {
    if (shouldShowMobileNav) {
      setAnimationState('opening');
    } else {
      setAnimationState((currentState) =>
        currentState === 'closed' ? 'closed' : 'closing',
      );
    }
  }, [shouldShowMobileNav]);

  useTimeout(
    () => {
      setAnimationState('closed');
    },
    SLIDE_DURATION,
    { begin: animationState === 'closing' },
  );

  useTimeout(
    () => {
      setAnimationState('open');
    },
    50,
    { begin: animationState === 'opening' },
  );

  return {
    shouldShowMobileNav,
    animationState,
    closeMobileNav,
    openMobileNav,
    toggleMobileNav,
    registerNavRef,
  };
};
