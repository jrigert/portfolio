import { Heading } from '@/components/core/Heading';
import { PageSection } from '@/components/PageSection';
import { HomePageSectionProps } from '@/pages/home/index';
import type { FunctionComponent } from 'react';

export const HomeSkills: FunctionComponent<HomePageSectionProps> = (props) => {
  const { id } = props;

  return (
    <PageSection id={id}>
      <Heading tag="h1">Skills</Heading>
    </PageSection>
  );
};
