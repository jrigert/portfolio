import { useCallback, useEffect, useState } from 'react';

export interface UseHoverAnimationProps {
  forceAnimate?: boolean;
  initialClassName?: string;
  hoverClassName?: string;
}

export interface UseHoverAnimationResult {
  animate: boolean;
  className: string | undefined;
  registerFunctions: {
    onMouseEnter: () => void;
    onAnimationEnd: () => void;
  };
}

export const useHoverAnimation = (
  props: UseHoverAnimationProps,
): UseHoverAnimationResult => {
  const { initialClassName, hoverClassName, forceAnimate = false } = props;
  const [animate, setAnimate] = useState(forceAnimate);

  useEffect(() => {
    if (forceAnimate) {
      setAnimate(true);
    }
  }, [forceAnimate]);

  const onMouseEnter = useCallback(() => {
    setAnimate(true);
  }, []);

  const onAnimationEnd = useCallback(() => {
    setAnimate(false);
  }, []);

  return {
    animate,
    className: animate ? hoverClassName : initialClassName,
    registerFunctions: {
      onAnimationEnd,
      onMouseEnter,
    },
  };
};
