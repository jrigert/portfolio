'use client';

import { FadeInContainer } from '@/components/animation/FadeInContainer';
import { ImageCircle } from '@/components/core/ImageCircle';
import { PageSection } from '@/components/PageSection';
import { PageSectionHeading } from '@/components/PageSectionHeading';
import { HomePageSectionProps } from '@/components/pages/home/index';
import type { FunctionComponent } from 'react';

export const HomeAbout: FunctionComponent<HomePageSectionProps> = (props) => {
  const { id } = props;

  return (
    <PageSection id={id} variant="secondary" wrapperClassName="pb-20">
      <PageSectionHeading title="About Me" />

      <FadeInContainer className="vertical-spacing highlight-strong mx-auto mt-16 max-w-screen-md text-xl sm:mt-20">
        <p className="mb-12 leading-8">
          Hi, I&#39;m <span className="font-bold text-primary">Jon</span> - a
          web developer with over a decade of experience. I&#39;m also a web
          architect, team lead, and Director, dedicated to creating
          user-friendly web applications with clean and scalable code.
        </p>

        <p className="mb-24 leading-8">
          I&#39;m well-versed in full stack development, but my specialty is in
          frontend development and architecture, with a focus on React. I have a
          passion for building clean, intuitive, and accessible user interfaces.
        </p>
      </FadeInContainer>

      <div className="flex justify-center">
        <ImageCircle src="/images/me.png" alt="A picture of me, Jon Rigert" />
      </div>
    </PageSection>
  );
};
