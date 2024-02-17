import { WithClassName } from '@/types/props';
import { classNames } from '@/utils/style';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { FunctionComponent } from 'react';

export interface SkillCardProps extends WithClassName {
  title: string;
  description: string;
  icon?: IconDefinition;
}

export const SkillCard: FunctionComponent<SkillCardProps> = (props) => {
  const { className, title, description, icon } = props;

  return (
    <div
      className={classNames(
        'flex flex-col justify-between rounded-md border border-secondary px-4 py-2 font-semibold transition duration-500 hover:scale-110 hover:bg-secondary/10',
        className,
      )}
    >
      <p className="font-heading text-xl text-primary">
        {icon ? <FontAwesomeIcon icon={icon} className="mr-3" /> : null}
        {title}
      </p>

      <p className="mt-3">{description}</p>
    </div>
  );
};
