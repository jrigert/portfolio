import { WithClassName } from '@/types/props';
import { classNames } from '@/utils/style';
import type { FunctionComponent } from 'react';

export interface UnderlineProps extends WithClassName {
  fullWidth?: boolean;
}

export const Underline: FunctionComponent<UnderlineProps> = (props) => {
  const { className } = props;

  return (
    <div
      className={classNames('h-1.5 w-full rounded-b-xl bg-primary', className)}
    />
  );
};
