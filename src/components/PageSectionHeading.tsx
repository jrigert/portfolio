'use client';

import { Heading } from '@/components/core/Heading';
import { useEnterAnimation } from '@/hooks/animation/useEnterAnimation';
import { classNames } from '@/utils/style';
import { FunctionComponent } from 'react';

export interface PageSectionHeadingProps {
  title: string;
}

export const PageSectionHeading: FunctionComponent<PageSectionHeadingProps> = (
  props,
) => {
  const { title } = props;

  const { className: animationClassName, registerRef } = useEnterAnimation({
    initialClassName: 'opacity-0 -translate-x-16',
    enterClassName: 'opacity-100 translate-x-0',
  });

  return (
    <div className="flex w-full flex-col items-center justify-center pt-16">
      <div
        ref={registerRef}
        className={classNames(
          'flex flex-col items-center justify-center transition duration-1000 ease-out',
          animationClassName,
        )}
      >
        <Heading tag="h2">{title}</Heading>
        <div className="h-2 w-[70%] bg-primary"></div>
      </div>
    </div>
  );
};
