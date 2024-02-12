import { classNames, getHeadingClasses } from '@/utils/style';
import React, { FunctionComponent, PropsWithChildren, useMemo } from 'react';

export const VALID_HEADINGS = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const;
export type HeadingLevel = (typeof VALID_HEADINGS)[number];

export interface HeadingProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  tag: HeadingLevel;
  tagStyle?: HeadingLevel;
}

const sanitizeHeadingLevel = (
  heading: HeadingLevel | undefined,
  fallback: HeadingLevel = 'h1',
): HeadingLevel => {
  if (!heading) {
    return fallback;
  }

  return VALID_HEADINGS.includes(heading) ? heading : fallback;
};

export const Heading: FunctionComponent<PropsWithChildren<HeadingProps>> = (
  props,
) => {
  const {
    children,
    className,
    tag: tagProp,
    tagStyle: tagStyleProp,
    ...headingProps
  } = props;
  const tag = sanitizeHeadingLevel(tagProp);
  const tagStyle = sanitizeHeadingLevel(tagStyleProp, tagProp);

  const combinedClassNames = useMemo(() => {
    const headingClassNames = getHeadingClasses({ level: tagStyle });
    return classNames(headingClassNames, className);
  }, [className, tagStyle]);

  return React.createElement(
    tag,
    { className: combinedClassNames, ...headingProps },
    children,
  );
};
