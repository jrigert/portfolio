import { Underline, UnderlineVariant } from '@/components/core/Underline';
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
  underline?: boolean;
  underlineClassName?: string;
  wrapperClassName?: string;
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
    underline,
    underlineClassName,
    wrapperClassName,
    ...headingProps
  } = props;
  const tag = sanitizeHeadingLevel(tagProp);
  const tagStyle = sanitizeHeadingLevel(tagStyleProp, tagProp);

  const combinedClassNames = useMemo(() => {
    const headingClassNames = getHeadingClasses({ level: tagStyle });
    return classNames(headingClassNames, { 'mb-1': underline }, className);
  }, [className, tagStyle, underline]);

  const headingElement = React.createElement(
    tag,
    { className: combinedClassNames, ...headingProps },
    children,
  );

  if (!underline) {
    return headingElement;
  }

  const underlineVariant: UnderlineVariant = ['h1', 'h2'].includes(tagStyle)
    ? 'medium'
    : 'skinny';

  return (
    <div className={classNames('flex', wrapperClassName)}>
      <div>
        {headingElement}
        <Underline className={underlineClassName} variant={underlineVariant} />
      </div>
    </div>
  );
};
