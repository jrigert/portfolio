import { classNames } from '@/utils/style';
import { cva, VariantProps } from 'class-variance-authority';
import {
  DetailedHTMLProps,
  FunctionComponent,
  HTMLAttributes,
  useMemo,
} from 'react';

export interface HorizontalDividerProps
  extends Omit<
      DetailedHTMLProps<HTMLAttributes<HTMLHRElement>, HTMLHRElement>,
      'color'
    >,
    HorizontalDividerVariantProps {}

export type HorizontalDividerVariantProps = VariantProps<
  typeof horizontalDividerVariants
>;

const horizontalDividerVariants = cva('border-x-0 mx-auto', {
  variants: {
    variant: {
      single: ['h-px', 'border-t'],
      double: ['h-1.5', 'border-y'],
    },
    size: {
      small: 'w-48',
      medium: 'w-80',
      full: 'w-full',
    },
    color: {
      foreground: 'border-y-foreground/30',
      primary: 'border-y-primary/60',
    },
  },
  defaultVariants: {
    variant: 'single',
    size: 'full',
    color: 'primary',
  },
});

export const HorizontalDivider: FunctionComponent<HorizontalDividerProps> = (
  props,
) => {
  const { className, color, size, variant, ...hrProps } = props;

  const hrClassNames = useMemo(() => {
    return classNames(
      horizontalDividerVariants({ color, size, variant }),
      className,
    );
  }, [color, size, variant, className]);

  return <hr {...hrProps} className={hrClassNames} />;
};
