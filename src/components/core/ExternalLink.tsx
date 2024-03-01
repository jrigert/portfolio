import { HTMLAnchorProps } from '@/types/props';
import { classNames } from '@/utils/style';
import { cva, VariantProps } from 'class-variance-authority';
import { FunctionComponent, useMemo } from 'react';

export interface LinkProps
  extends Omit<HTMLAnchorProps, 'target' | 'rel'>,
    ExternalLinkVariantProps {
  /** open in a new tab safely - default to true */
  newTab?: boolean;
}

export const NEW_TAB_HEADS_UP = 'Opens in a new tab';

const externalLinkVariants = cva([], {
  variants: {
    variant: {
      default: [],
      primary: ['text-primary hover:opacity-90 underline'],
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export type ExternalLinkVariantProps = VariantProps<
  typeof externalLinkVariants
>;

export const ExternalLink: FunctionComponent<LinkProps> = (props) => {
  const {
    'aria-label': ariaLabel,
    children,
    newTab = true,
    className,
    variant,
    ...anchorProps
  } = props;

  const combinedClassNames = useMemo(() => {
    return classNames(externalLinkVariants({ variant }), className);
  }, [variant, className]);

  // if children is not a plain string, there's a risk of not having text content. require an aria-label
  const requireAriaLabel = typeof children !== 'string';
  if (requireAriaLabel && !ariaLabel) {
    console.error(
      'ExternalLink component is missing accessible text content. An aria-label must be provided if there children is not plain text',
    );
  }

  const targetProps: Partial<HTMLAnchorProps> | undefined = newTab
    ? {
        target: '_blank',
        rel: 'noopener noreferrer',
      }
    : undefined;

  const ariaHelper = newTab ? ` - ${NEW_TAB_HEADS_UP}` : '';
  const fullAriaLabel = ariaLabel ? `${ariaLabel}${ariaHelper}` : undefined;

  return (
    <a
      aria-label={fullAriaLabel}
      className={combinedClassNames}
      {...targetProps}
      {...anchorProps}
    >
      {children}
      {!ariaLabel && newTab ? (
        <span className="sr-only">{NEW_TAB_HEADS_UP}</span>
      ) : null}
    </a>
  );
};
