import { WithClassName } from '@/types/props';
import { classNames } from '@/utils/style';
import type { FunctionComponent } from 'react';

export interface VerticalDividerProps extends WithClassName {}

export const VerticalDivider: FunctionComponent<VerticalDividerProps> = (
  props,
) => {
  const { className } = props;

  return (
    <span
      className={classNames(
        'mx-4 inline-block h-4 w-1 border-r border-r-gray-400',
        className,
      )}
    ></span>
  );
};
