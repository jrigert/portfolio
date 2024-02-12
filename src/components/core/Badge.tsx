import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { FunctionComponent } from 'react';

export interface BadgeProps {
  label: string;
  icon?: IconDefinition;
}

export const Badge: FunctionComponent<BadgeProps> = (props) => {
  const { label, icon } = props;

  return (
    <span className="inline-block rounded-lg border-2 border-loud px-3 py-2 text-lg font-semibold">
      {icon ? (
        <FontAwesomeIcon aria-hidden icon={icon} className="mr-2" />
      ) : null}
      {label}
    </span>
  );
};
