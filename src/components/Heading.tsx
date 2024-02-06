import { WithClassName } from '@/types/props';
import { classNames } from '@/utils/style';
import { cva } from 'class-variance-authority';
import type { VariantProps } from 'class-variance-authority';
import React, { FunctionComponent, PropsWithChildren, useMemo } from 'react';

export const VALID_HEADINGS = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const;
export type HeadingLevel = (typeof VALID_HEADINGS)[number];

export interface HeadingProps extends WithClassName {
  tag: HeadingLevel;
  tagStyle?: HeadingLevel;
}

export type HeadingVariantProps = VariantProps<typeof headingVariants>;

const headingVariants = cva([], {
  variants: {
    level: {
      h1: ['text-5xl', 'mb-6'],
      h2: ['text-4xl', 'mb-4'],
      h3: ['text-3xl', 'mb-3'],
      h4: ['text-2xl', 'mb-2'],
      h5: ['text-xl', 'mb-2'],
      h6: ['text-lg', 'mb-2'],
    },
  },
  defaultVariants: {
    level: 'h1',
  },
});

const sanitizeHeadingLevel = (
  heading: HeadingLevel | undefined,
  fallback: HeadingLevel = 'h1',
): HeadingLevel => {
  if (!heading) {
    return fallback;
  }

  return VALID_HEADINGS.includes(heading) ? heading : fallback;
};

const Heading: FunctionComponent<PropsWithChildren<HeadingProps>> = (props) => {
  const { children, className, tag: tagProp, tagStyle: tagStyleProp } = props;
  const tag = sanitizeHeadingLevel(tagProp);
  const tagStyle = sanitizeHeadingLevel(tagStyleProp, tagProp);

  const combinedClassNames = useMemo(() => {
    const headingClassNames = headingVariants({ level: tagStyle });
    return classNames(headingClassNames, className);
  }, [className, tagStyle]);

  return React.createElement(tag, { className: combinedClassNames }, children);
};

export default Heading;
