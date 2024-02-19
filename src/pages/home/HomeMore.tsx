'use client';

import { FadeInContainer } from '@/components/animation/FadeInContainer';
import { Badge } from '@/components/core/Badge';
import { Heading } from '@/components/core/Heading';
import { PageSection } from '@/components/PageSection';
import { PageSectionHeading } from '@/components/PageSectionHeading';
import { HomePageSectionProps } from '@/pages/home/index';
import {
  faBaby,
  faBook,
  faDog,
  faDumbbell,
  faGamepad,
} from '@fortawesome/free-solid-svg-icons';
import { FunctionComponent } from 'react';

export const HomeMore: FunctionComponent<HomePageSectionProps> = (props) => {
  const { id } = props;

  return (
    <PageSection id={id}>
      <PageSectionHeading title="More About Me" />

      <FadeInContainer>
        <Heading
          tag="h3"
          wrapperClassName="mb-12 mt-24 justify-center"
          underline
        >
          Personal Info
        </Heading>

        <ul className="flex flex-wrap justify-center gap-6">
          <Badge icon={faBaby} label="Father" />
          <Badge icon={faDog} label="Dog Dad" />
          <Badge icon={faGamepad} label="Gamer" />
          <Badge icon={faBook} label="Reader" />
          <Badge icon={faDumbbell} label="Fitness" />
        </ul>
      </FadeInContainer>

      <FadeInContainer>
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
