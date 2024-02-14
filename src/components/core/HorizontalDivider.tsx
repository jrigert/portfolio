import { classNames } from '@/utils/style';
import { cva, VariantProps } from 'class-variance-authority';
import {
  DetailedHTMLProps,
  FunctionComponent,
  HTMLAttributes,
  useMemo,
} from 'react';

export interface HorizontalDividerProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLHRElement>, HTMLHRElement>,
    HorizontalDividerVariantProps {}

export type HorizontalDividerVariantProps = VariantProps<
  typeof horizontalDividerVariants
>;

const horizontalDividerVariants = cva(
  'border-x-0 border-y-foreground/30 mx-auto',
  {
    variants: {
      variant: {
        single: ['h-px', 'border-t-2'],
        double: ['h-1.5', 'border-y'],
      },
      size: {
        small: 'w-48',
        standard: 'w-80',
        full: 'w-full',
      },
    },
    defaultVariants: {
      variant: 'double',
      size: 'standard',
    },
  },
);

export const HorizontalDivider: FunctionComponent<HorizontalDividerProps> = (
  props,
) => {
  const { className, size, variant, ...hrProps } = props;

  const hrClassNames = useMemo(() => {
    return classNames(horizontalDividerVariants({ size, variant }), className);
  }, [className, size, variant]);

  return <hr {...hrProps} className={hrClassNames} />;
};
