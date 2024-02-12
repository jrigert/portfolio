import { Heading } from '@/components/core/Heading';
import type { FunctionComponent } from 'react';

export interface PageSectionHeadingProps {
  title: string;
}

export const PageSectionHeading: FunctionComponent<PageSectionHeadingProps> = (
  props,
) => {
  const { title } = props;

  return (
    <div className="flex w-full flex-col items-center justify-center pt-16">
      <div className="flex flex-col items-center justify-center">
        <Heading tag="h2">{title}</Heading>
        <div className="h-2 w-[70%] bg-primary"></div>
      </div>
    </div>
  );
};
