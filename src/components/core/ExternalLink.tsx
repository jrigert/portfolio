import { HTMLAnchorProps } from '@/types/props';
import { classNames } from '@/utils/style';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { cva, VariantProps } from 'class-variance-authority';
import { FunctionComponent, useMemo } from 'react';

export interface LinkProps
  extends Omit<HTMLAnchorProps, 'target' | 'rel' | 'color'>,
    ExternalLinkVariantProps {
  icon?: IconDefinition;
  iconClassName?: string;
  /** open in a new tab safely - default to true */
  newTab?: boolean;
}

export const NEW_TAB_HEADS_UP = 'Opens in a new tab';

const sharedIconVariantClasses = [
  'duration-250',
  'cursor-pointer',
  'transition',
  'motion-reduce:transition-opacity',
  'motion-safe:hover:scale-110',
];

const externalLinkVariants = cva([], {
  variants: {
    variant: {
      default: ['underline', 'hover:opacity-90'],
      unstyled: [],
      icon: [...sharedIconVariantClasses],
      iconButton: [
        ...sharedIconVariantClasses,
        'rounded-lg',
        'flex',
        'items-center',
        'justify-center',
        'py-2',
        'px-3',
        'gap-2',
        'bg-primary',
        'font-bold',
        'shadow-md',
        'shadow-black/50',
      ],
    },
    color: {
      foreground: ['text-foreground'],
      primary: ['text-primary'],
      secondary: ['text-secondary'],
    },
  },
  compoundVariants: [
    {
      variant: 'iconButton',
      color: 'primary',
      className: ['text-primary-foreground'],
    },
    {
      variant: 'iconButton',
      color: 'secondary',
      className: ['text-secondary-foreground'],
    },
  ],
  defaultVariants: {
    variant: 'default',
    color: 'primary',
  },
});

const externalLinkIconVariants = cva([], {
  variants: {
    variant: {
      icon: ['text-4xl'],
      iconButton: ['text-2xl'],
    },
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
    color,
    icon,
    iconClassName,
    variant,
    ...anchorProps
  } = props;

  const combinedClassNames = useMemo(() => {
    return classNames(externalLinkVariants({ variant, color }), className);
  }, [variant, color, className]);

  const combinedIconClassNames = useMemo(() => {
    let iconVariantClasses: string | undefined;

    if (variant && (variant === 'icon' || variant === 'iconButton')) {
      iconVariantClasses = externalLinkIconVariants({ variant });
    }

    return classNames(iconVariantClasses, iconClassName);
  }, [variant, iconClassName]);

  // if children is not a plain string (or empty, in the case of an icon-only button),
  // there's a risk of not having text content. require an aria-label
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
      {icon ? (
        <FontAwesomeIcon
          icon={icon}
          aria-hidden
          className={combinedIconClassNames}
        />
      ) : null}
      {children}
      {!ariaLabel && newTab ? (
        <span className="sr-only">{NEW_TAB_HEADS_UP}</span>
      ) : null}
    </a>
  );
};
