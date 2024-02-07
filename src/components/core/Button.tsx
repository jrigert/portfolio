'use client';

import { classNames } from '@/utils/style';
import { cva, VariantProps } from 'class-variance-authority';
import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  FunctionComponent,
  PropsWithChildren,
  useMemo,
} from 'react';

export type ButtonVariantProps = VariantProps<typeof buttonVariants>;

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: ButtonVariantProps['variant'];
  size?: ButtonVariantProps['size'];
}

const buttonVariants = cva(['text-lg rounded-xl'], {
  variants: {
    variant: {
      primary: ['bg-primary text-primary-foreground'],
      outline: [
        'border-2 border-primary/90 text-primary rounded-full hover:bg-primary/20 hover:border-primary',
      ],
    },
    size: {
      medium: ['px-5 py-1'],
      icon: ['py-0.5 w-9  text-xl'],
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'medium',
  },
});

export const Button: FunctionComponent<PropsWithChildren<ButtonProps>> = (
  props,
) => {
  const { children, className, size, variant, ...buttonProps } = props;

  const combinedClassNames = useMemo(() => {
    const buttonClassNames = buttonVariants({ size, variant });
    return classNames(buttonClassNames, className);
  }, [className, size, variant]);

  return (
    <button className={combinedClassNames} {...buttonProps}>
      {children}
    </button>
  );
};
