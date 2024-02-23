import { HTMLDivProps } from '@/types/props';
import { classNames } from '@/utils/style';
import { FunctionComponent, PropsWithChildren, useMemo } from 'react';

export interface ContainerProps extends HTMLDivProps {
  center?: boolean;
  fullHeight?: boolean;
}

export const Container: FunctionComponent<PropsWithChildren<ContainerProps>> = (
  props,
) => {
  const { children, className, center = true, fullHeight, ...divProps } = props;

  const combinedClassNames = useMemo(
    () =>
      classNames(
        'container',
        { 'mx-auto': center, 'min-h-screen': fullHeight },
        className,
      ),
    [className, center, fullHeight],
  );

  return (
    <div className={combinedClassNames} {...divProps}>
      {children}
    </div>
  );
};
