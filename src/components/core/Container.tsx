import { classNames } from '@/utils/style';
import {
  DetailedHTMLProps,
  FunctionComponent,
  HTMLAttributes,
  PropsWithChildren,
  useMemo,
} from 'react';

export interface ContainerProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
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
