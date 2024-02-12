import { Heading } from '@/components/core/Heading';
import { PageSection } from '@/components/PageSection';
import { HomePageSectionProps } from '@/pages/home/index';
import type { FunctionComponent } from 'react';

export const HomeExperience: FunctionComponent<HomePageSectionProps> = (
  props,
) => {
  const { id } = props;

  return (
    <PageSection id={id}>
      <Heading tag="h1">Experience</Heading>
    </PageSection>
  );
};
