'use client';

import { FadeInContainer } from '@/components/animation/FadeInContainer';
import { Badge } from '@/components/core/Badge';
import { Heading } from '@/components/core/Heading';
import { PageSection } from '@/components/PageSection';
import { PageSectionHeading } from '@/components/PageSectionHeading';
import { HomePageSectionProps } from '@/components/pages/home/index';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faBaby,
  faBook,
  faDog,
  faDumbbell,
  faGamepad,
  faHiking,
  faCampground,
} from '@fortawesome/free-solid-svg-icons';
import { FunctionComponent } from 'react';

interface PersonalInfoItem {
  label: string;
  icon: IconDefinition;
}

const PERSONAL_INFO: PersonalInfoItem[] = [
  { icon: faBaby, label: 'Father' },
  { icon: faDog, label: 'Dog Dad' },
  { icon: faGamepad, label: 'Gamer' },
  { icon: faBook, label: 'Reader' },
  { icon: faDumbbell, label: 'Fitness' },
  { icon: faHiking, label: 'Hiking' },
  { icon: faCampground, label: 'Camping' },
];

export const HomeMore: FunctionComponent<HomePageSectionProps> = (props) => {
  const { id } = props;

  return (
    <PageSection id={id} className="pb-40">
      <PageSectionHeading title="More About Me" />

      <FadeInContainer>
        <Heading
          tag="h3"
          wrapperClassName="mb-12 mt-24 justify-center"
          underline
        >
          Personal Info
        </Heading>

        <ul className="mx-auto flex max-w-xl flex-wrap justify-center gap-6">
          {PERSONAL_INFO.map(({ label, icon }) => (
            <li key={label}>
              <Badge icon={icon} label={label} />
            </li>
          ))}
        </ul>

        <Heading
          tag="h3"
          wrapperClassName="mb-6 mt-40 justify-center"
          underline
        >
          Education
        </Heading>

        <div className="mx-auto mt-12 max-w-screen-lg">
          <Heading tag="h4">B.S. Game and Simulation Programming</Heading>
          <p className="text-primary">DeVry University</p>
          <p>2005 - 2009</p>
        </div>
      </FadeInContainer>
    </PageSection>
  );
};
