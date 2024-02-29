'use client';

import { FadeInContainer } from '@/components/animation/FadeInContainer';
import { Heading } from '@/components/core/Heading';
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
      'Serves as the primary point of oversight and escalation on various projects, while leading initiatives to establish practice-wide coding standards and best practices',
      'Collaborates closely with clients, provides leadership to development teams, and directs various internal projects',
      'Works with a multitude of technologies, with a strong focus on React',
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
      'Contributed to the development of a large-scale digital health application in AngularJS, providing services to healthcare consumers and providers',
      'Senior member of the Core/Foundational team that constructed the application framework utilized by various development teams',
      'Assisted in leading and developing the “Toolkit”, a JavaScript/AngularJS library that facilitates sharing of critical components across multiple web applications',
    ],
  },
  {
    company: 'Command Transportation',
    title: 'Software Developer',
    startDate: 'October 2012',
    endDate: 'March 2014',
    description: [
      'Member of the development team responsible for building an internal software system designed to track and align customer loads with carrier trucks, utilized by the sales and dispatch unit',
      'Implemented new features and maintained existing platforms in WPF, C# and VB.NET',
      'Primarily responsible for most user interface development, collaborating closely with the design team to bring their concepts to life',
    ],
  },
  {
    company: 'Applied Systems, Inc.',
    title: 'Software Developer',
    startDate: 'March 2010',
    endDate: 'September 2012',
    description: [
      'Tasked with maintaining and updating insurance agency automation software in VB6 and VB.NET',
      'Developed new features for existing applications, updated existing functionalities, remediated defects, and rebuilt out-of-date assemblies and applications using more modern technologies',
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

      <FadeInContainer threshold={0.08}>
        <div className="mx-auto max-w-screen-lg py-12 sm:py-20">
          {CARDS.map((card, index) => (
            <ExperienceCard
              key={card.company}
              {...card}
              showDivider={index < CARDS.length - 1}
            />
          ))}
        </div>

        <HorizontalDivider />
        <Heading tag="h2" wrapperClassName="mt-24 justify-center" underline>
          Education
        </Heading>

        <div className="mx-auto mt-12 max-w-screen-lg text-center">
          <Heading tag="h3" tagStyle="h4">
            B.S. Game and Simulation Programming
          </Heading>
          <p className="mb-2 font-heading font-bold text-primary">
            DeVry University
          </p>
          <p>2005 - 2009</p>
        </div>

        <Heading
          tag="h2"
          wrapperClassName="mb-6 mt-32 justify-center"
          underline
        >
          Resume
        </Heading>

        <div className="flex justify-center">
          <ResumePanel
            className="w-auto"
            iconClassName="text-5xl mt-4"
            buttonsOnly
          />
        </div>
      </FadeInContainer>
    </PageSection>
  );
};
