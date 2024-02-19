import { WithClassName } from '@/types/props';
import { classNames } from '@/utils/style';
import type { FunctionComponent } from 'react';

export type UnderlineVariant = 'skinny' | 'medium';

export interface UnderlineProps extends WithClassName {
  /** defaults to medium */
  variant?: UnderlineVariant;
}

export const Underline: FunctionComponent<UnderlineProps> = (props) => {
  const { className, variant = 'medium' } = props;

  const combinedClassNames = classNames(
    'h-1.5 w-full rounded-b-xl bg-primary',
    {
      'h-1.5': variant === 'medium',
      'h-1': variant === 'skinny',
    },
    className,
  );

  return <div className={combinedClassNames} />;
};
