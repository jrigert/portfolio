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
        'flex flex-col justify-between font-semibold',
        className,
      )}
    >
      <div>
        <p className="mx-auto inline-block font-heading text-xl text-primary underline">
          {title}
        </p>
        <p className="mt-3">{description}</p>
      </div>
    </div>
  );
};
