import { WithClassName } from '@/types/props';
import { classNames } from '@/utils/style';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { FunctionComponent } from 'react';

export interface BadgeProps extends WithClassName {
  label: string;
  icon?: IconDefinition;
}

export const Badge: FunctionComponent<BadgeProps> = (props) => {
  const { className, label, icon } = props;

  return (
    <span
      className={classNames(
        'inline-block rounded-lg border-2 border-secondary px-3 py-2 text-lg font-semibold',
        className,
      )}
    >
      {icon ? (
        <FontAwesomeIcon aria-hidden icon={icon} className="mr-2" />
      ) : null}
      {label}
    </span>
  );
};
