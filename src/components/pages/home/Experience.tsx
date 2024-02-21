'use client';

import { FadeInContainer } from '@/components/animation/FadeInContainer';
import { HorizontalDivider } from '@/components/core/HorizontalDivider';
import {
  ExperienceCard,
  ExperienceCardData,
} from '@/components/ExperienceCard';
import { PageSection } from '@/components/PageSection';
import { PageSectionHeading } from '@/components/PageSectionHeading';
import { ResumePanel } from '@/components/ResumePanel';
import { HomePageSectionProps } from '@/components/pages/home/index';
import type { FunctionComponent } from 'react';

const CARDS: ExperienceCardData[] = [
  {
    company: 'Bounteous',
    title: 'Director, Web Application Development',
    startDate: 'July 2015',
    endDate: 'Present',
    description: [
      'Oversight and escalation point on multiple ongoing projects',
      'Leading initiative to establish practice-wide coding standards and best practices',
    ],
    previousPositions: [
      {
        title: 'Associate Principal Front-End Architect',
        startDate: 'July 2021',
        endDate: 'November 2021',
      },
      {
        title: 'Lead Front-End Developer',
        startDate: 'August 2020',
        endDate: 'July 2021',
      },
      {
        title: 'Senior Front-End Application Developer',
        startDate: 'July 2015',
        endDate: 'August 2020',
      },
    ],
  },
  {
    company: 'UnitedHealth Group / Optum',
    title: 'Senior Web Developer',
    startDate: 'April 2014',
    endDate: 'July 2015',
    description: [
      'Developed a large-scale digital health application in AngularJS, providing services to healthcare consumers and providers',
      'Senior member of the Core/Foundational team that built the application framework which is consumed by many different development teams',
    ],
  },
  {
    company: 'Command Transportation',
    title: 'Software Developer',
    startDate: 'October 2012',
    endDate: 'March 2014',
    description: [
      'Part of a small team developing the internal software system used by the sales and dispatch team, tracking and matching customer loads with carrier trucks',
      'Implemented new features and maintained existing platforms in WPF, C# and VB.NET',
    ],
  },
  {
    company: 'Applied Systems, Inc.',
    title: 'Software Developer',
    startDate: 'March 2010',
    endDate: 'September 2012',
    description: [
      'Responsible for maintaining and updating insurance agency automation software applications in VB6 and VB.NET',
      'Developed new features on existing applications, updated existing features, fixed defects and updated out-of-date assemblies and applications',
    ],
  },
];

export const HomeExperience: FunctionComponent<HomePageSectionProps> = (
  props,
) => {
  const { id } = props;

  return (
    <PageSection id={id} fullHeight variant="secondary" className="pb-20">
      <PageSectionHeading title="Experience" />

      <FadeInContainer>
        <div className="mx-auto max-w-screen-lg py-12 sm:py-20">
          {CARDS.map((card, index) => (
            <ExperienceCard
              key={card.company}
              {...card}
              showDivider={index < CARDS.length - 1}
            />
          ))}
        </div>

        <HorizontalDivider className="mb-20 max-w-screen-lg" />

        <div className="flex justify-center text-xl">
          <ResumePanel className="w-auto" iconClassName="text-5xl mt-4" />
        </div>
      </FadeInContainer>
    </PageSection>
  );
};
