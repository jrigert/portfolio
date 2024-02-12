import { PageSection } from '@/components/PageSection';
import { PageSectionHeading } from '@/components/PageSectionHeading';
import { HomePageSectionProps } from '@/pages/home/index';
import type { FunctionComponent } from 'react';

export const HomeAbout: FunctionComponent<HomePageSectionProps> = (props) => {
  const { id } = props;

  return (
    <PageSection id={id} wrapperClassName="bg-background-secondary">
      <PageSectionHeading title="About Me" />
    </PageSection>
  );
};
