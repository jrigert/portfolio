import { PageSection } from '@/components/PageSection';
import { PageSectionHeading } from '@/components/PageSectionHeading';
import { HomePageSectionProps } from '@/pages/home/index';
import type { FunctionComponent } from 'react';

export const HomeExperience: FunctionComponent<HomePageSectionProps> = (
  props,
) => {
  const { id } = props;

  return (
    <PageSection id={id} fullHeight variant="secondary">
      <PageSectionHeading title="Experience" />
    </PageSection>
  );
};
