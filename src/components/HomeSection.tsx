import { Container, ContainerProps } from '@/components/core/Container';
import { classNames } from '@/utils/style';
import { FunctionComponent, useMemo } from 'react';

export interface HomeSectionProps extends ContainerProps {
  id: string;
  offsetScroll?: boolean;
}

export const HomeSection: FunctionComponent<HomeSectionProps> = (props) => {
  const {
    id,
    children,
    className,
    offsetScroll = true,
    ...containerProps
  } = props;

  const containerClassNames = useMemo(
    () => classNames({ 'scroll-mt-14': offsetScroll }, className),
    [className],
  );

  return (
    <Container
      fullHeight
      id={id}
      className={containerClassNames}
      {...containerProps}
    >
      {children}
    </Container>
  );
};
