'use client';

import { classNames } from '@/utils/style';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
  extends Omit<
      DetailedHTMLProps<
        ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
      >,
      'color'
    >,
    ButtonVariantProps {
  icon?: IconDefinition;
}

const buttonVariants = cva(
  ['text-lg rounded-xl transition ease-in-out duration-300'],
  {
    variants: {
      variant: {
        solid: [],
        outline: ['border-2 rounded-xl'],
        naked: [],
      },
      color: {
        default: ['bg-foreground', 'text-background', 'hover:bg-foreground/80'],
        ['default-on-dark']: ['bg-white', 'text-black', 'hover:bg-white/80'],
        primary: ['bg-primary text-primary-foreground hover:bg-primary/80'],
        secondary: [
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ],
        loud: ['bg-loud text-loud-foreground hover:bg-loud/80'],
      },
      size: {
        medium: ['px-5 py-1'],
        icon: ['py-0.5 w-9', 'text-xl', 'rounded-full'],
      },
    },
    compoundVariants: [
      {
        variant: 'outline',
        color: 'default',
        className:
          'border-foreground/90 text-foreground hover:bg-foreground/10 hover:border-foreground bg-transparent',
      },
      {
        variant: 'outline',
        color: 'default-on-dark',
        className:
          'border-white/90 text-white hover:bg-white/10 hover:border-white bg-transparent',
      },
      {
        variant: 'outline',
        color: 'primary',
        className:
          'border-primary/90 text-primary hover:bg-primary/20 hover:border-primary bg-transparent',
      },
      {
        variant: 'outline',
        color: 'secondary',
        className:
          'border-secondary/90 text-secondary hover:bg-secondary/20 hover:border-secondary bg-transparent',
      },
      {
        variant: 'outline',
        color: 'loud',
        className:
          'border-loud/90 text-loud hover:bg-loud/20 hover:border-loud bg-transparent',
      },
      {
        variant: 'naked',
        color: 'default',
        className:
          'text-foreground hover:bg-foreground/10 hover:border-foreground bg-transparent',
      },
      {
        variant: 'naked',
        color: 'default-on-dark',
        className:
          'text-white hover:bg-white/10 hover:border-white bg-transparent',
      },
      {
        variant: 'naked',
        color: 'primary',
        className:
          'text-primary hover:bg-primary/10 hover:border-primary bg-transparent',
      },
      {
        variant: 'naked',
        color: 'secondary',
        className:
          'text-secondary hover:bg-secondary/10 hover:border-secondary bg-transparent',
      },
      {
        variant: 'naked',
        color: 'loud',
        className:
          'text-loud hover:bg-loud/10 hover:border-loud bg-transparent',
      },
      {
        variant: 'naked',
        size: 'icon',
        className: ['h-12', 'w-12', 'text-3xl', 'rounded-full'],
      },
    ],
    defaultVariants: {
      variant: 'solid',
      color: 'default',
      size: 'medium',
    },
  },
);

export const Button: FunctionComponent<PropsWithChildren<ButtonProps>> = (
  props,
) => {
  const { children, className, icon, size, variant, color, ...buttonProps } =
    props;

  const combinedClassNames = useMemo(() => {
    const variantClassNames = buttonVariants({ size, variant, color });
    return classNames(variantClassNames, className);
  }, [className, size, variant, color]);

  return (
    <button className={combinedClassNames} {...buttonProps}>
      {children}
      {icon ? (
        <FontAwesomeIcon
          icon={icon}
          className={classNames({ 'ml-3': size !== 'icon' })}
        />
      ) : null}
    </button>
  );
};
