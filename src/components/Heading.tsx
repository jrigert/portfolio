import { WithClassName } from '@/types/props';
import { classNames } from '@/utils/style';
import React, { FunctionComponent, PropsWithChildren, useMemo } from 'react';

export const VALID_HEADINGS = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const;
export type HeadingLevel = (typeof VALID_HEADINGS)[number];

export interface HeadingProps extends WithClassName {
  tag: HeadingLevel;
  tagStyle?: HeadingLevel;
}

const STYLE_MAP: Record<HeadingLevel, string> = {
  h1: 'text-5xl',
  h2: 'text-4xl',
  h3: 'text-3xl',
  h4: 'text-2xl',
  h5: 'text-xl',
  h6: 'text-lg',
} as const;

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
    const headingClassNames = STYLE_MAP[tagStyle];
    return classNames(headingClassNames, className);
  }, [className, tagStyle]);

  return React.createElement(tag, { className: combinedClassNames }, children);
};

export default Heading;
