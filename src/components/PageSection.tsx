import { Container, ContainerProps } from '@/components/core/Container';
import { classNames } from '@/utils/style';
import { FunctionComponent, useMemo } from 'react';

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

  const containerClassNames = useMemo(
    () => classNames({ 'scroll-mt-14': offsetScroll }, className),
    [className],
  );

  return (
    <div className={wrapperClassName}>
      <Container
        fullHeight
        id={id}
        className={containerClassNames}
        {...containerProps}
      >
        {children}
      </Container>
    </div>
  );
};
