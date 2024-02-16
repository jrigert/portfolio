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
      <Heading tag="h3" className="">
        {company}
      </Heading>
      <div className="text-xl text-primary">{title}</div>
      <div className="mt-4">
        {startDate} - {endDate}
      </div>
      <p className="mt-6">{description.join('. ')}</p>

      {previousPositions ? (
        <div className="mt-12">
          <div className="font-bold">Previous Positions:</div>
          {previousPositions.map(({ title, startDate, endDate }) => (
            <div key={startDate} className="my-2 text-base">
              {title} ({startDate} - {endDate})
            </div>
          ))}
        </div>
      ) : null}

      {showDivider ? (
        <HorizontalDivider className="my-20 border-y-primary" />
      ) : null}
    </div>
  );
};
