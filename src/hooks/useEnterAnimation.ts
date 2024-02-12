import {
  useOnEnterViewport,
  UseOnEnterViewportProps,
} from '@/hooks/useOnEnterViewport';
import { useMemo } from 'react';

export interface UseEnterAnimationProps extends UseOnEnterViewportProps {
  initialClassName?: string;
  enterClassName?: string;
}

export const useEnterAnimation = (props: UseEnterAnimationProps) => {
  const { initialClassName, enterClassName, ...onEnterProps } = props;
  const { hasEntered, registerRef } = useOnEnterViewport(onEnterProps);

  const className = useMemo(
    () => (hasEntered ? enterClassName : initialClassName),
    [hasEntered, initialClassName, enterClassName],
  );

  return {
    className,
    registerRef,
  };
};
