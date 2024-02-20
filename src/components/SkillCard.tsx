import { WithClassName } from '@/types/props';
import { classNames } from '@/utils/style';
import type { FunctionComponent } from 'react';

export interface SkillCardProps extends WithClassName {
  title: string;
  description: string;
}

export const SkillCard: FunctionComponent<SkillCardProps> = (props) => {
  const { className, title, description } = props;

  return (
    <div
      className={classNames(
        'flex flex-col justify-between rounded-md border-2 border-secondary px-4 py-2 font-semibold transition duration-500 hover:bg-secondary/10 motion-safe:hover:scale-110 motion-reduce:transition-opacity',
        className,
      )}
    >
      <p className="font-heading text-xl text-primary">{title}</p>
      <p className="mt-3">{description}</p>
    </div>
  );
};
