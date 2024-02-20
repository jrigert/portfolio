'use client';

import { Heading } from '@/components/core/Heading';
import { Underline } from '@/components/core/Underline';
import { useEnterAnimation } from '@/hooks/animation/useEnterAnimation';
import { classNames } from '@/utils/style';
import { FunctionComponent } from 'react';

export interface PageSectionHeadingProps {
  /** defaults to vertical */
  enterAnimation?: 'horizontal' | 'vertical';
  title: string;
  headingClassName?: string;
}

export const PageSectionHeading: FunctionComponent<PageSectionHeadingProps> = (
  props,
) => {
  const { enterAnimation = 'vertical', title, headingClassName } = props;

  const { className: animationClassName, registerRef } = useEnterAnimation({
    initialClassName: classNames('opacity-0', {
      '-translate-x-16': enterAnimation === 'horizontal',
      'translate-y-8': enterAnimation === 'vertical',
    }),
    enterClassName: 'opacity-100 translate-x-0 translate-y-0',
  });

  return (
    <div className="flex w-full flex-col items-center justify-center pt-12 sm:pt-16">
      <div
        ref={registerRef}
        className={classNames(
          'flex flex-col items-center justify-center transition duration-1000 ease-out',
          animationClassName,
        )}
      >
        <Heading tag="h2" className={headingClassName} underline>
          {title}
        </Heading>
      </div>
    </div>
  );
};
