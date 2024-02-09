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
      },
      color: {
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
    ],
    defaultVariants: {
      variant: 'solid',
      color: 'primary',
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
