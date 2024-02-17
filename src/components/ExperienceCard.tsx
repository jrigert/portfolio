import { Heading } from '@/components/core/Heading';
import { HorizontalDivider } from '@/components/core/HorizontalDivider';
import type { FunctionComponent } from 'react';

export interface ExperienceCardData {
  company: string;
  startDate: string;
  endDate: string;
  title: string;
  description: string[];
  previousPositions?: {
    title: string;
    startDate: string;
    endDate: string;
  }[];
}

export interface ExperienceCardProps extends ExperienceCardData {
  showDivider?: boolean;
}

export const ExperienceCard: FunctionComponent<ExperienceCardProps> = (
  props,
) => {
  const {
    company,
    startDate,
    endDate,
    title,
    description,
    previousPositions,
    showDivider,
  } = props;

  return (
    <div className="px-6 text-lg">
      <Heading tag="h3" className="mb-2">
        {company}
      </Heading>
      <div className="mb-2 font-heading text-xl font-bold text-primary">
        {title}
      </div>
      <div className="font-heading">
        {startDate} - {endDate}
      </div>
      <p className="mt-12 text-xl">{description.join('. ')}</p>

      {previousPositions ? (
        <div className="mt-12 text-sm">
          <div className="font-heading font-bold">Previous Positions:</div>

          <ul className="max-w-screen-md">
            {previousPositions.map(({ title, startDate, endDate }) => (
              <li key={startDate} className="my-2 grid grid-cols-2 gap-10">
                <span className="text-primary">{title}</span>
                {startDate} - {endDate}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {showDivider ? <HorizontalDivider className="my-20" /> : null}
    </div>
  );
};
