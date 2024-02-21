import { useEnterAnimation } from '@/hooks/animation/useEnterAnimation';
import { WithClassName } from '@/types/props';
import { classNames } from '@/utils/style';
import type { FunctionComponent, PropsWithChildren } from 'react';

export interface FadeInContainerProps extends WithClassName {
  threshold?: number;
}

export const FadeInContainer: FunctionComponent<
  PropsWithChildren<FadeInContainerProps>
> = (props) => {
  const { className, children, threshold = 0.1 } = props;

  const { className: animationClassName, registerRef } = useEnterAnimation({
    initialClassName: 'opacity-0',
    enterClassName: 'opacity-100',
    intersectOptions: {
      threshold,
    },
  });

  return (
    <div
      className={classNames(
        'transition-opacity duration-1000',
        animationClassName,
        className,
      )}
      ref={registerRef}
    >
      {children}
    </div>
  );
};
