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
        <p>
          Hi, I’m Jon! With over a decade of experience as a web developer,
          architect, team lead, and director, I&#39;m dedicated to creating
          user-friendly web applications with clean and scalable code.
        </p>

        <p>
          I have a passion for building clean, intuitive and accessible user
          interfaces.
        </p>

        <p>
          I&#39;m well-rounded when it comes to full stack development, but my
          real specialty is frontend development and architecture, with an
          emphasis on React.
        </p>
      </FadeInContainer>

      <div className="mt-16 flex justify-center">
        <ImageCircle src="/images/me.png" alt="A picture of me, Jon Rigert" />
      </div>
    </PageSection>
  );
};
