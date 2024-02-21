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
          Hi! I&rsquo;m <strong>Jon</strong>. I am a web developer, architect,
          team lead and director. With <strong>over a decade</strong> of
          experience building web applications, I love creating usable web
          applications with clean and scalable code.
        </p>

        <p>
          I am passionate about inclusive and accessible web design and
          implementation.
        </p>
      </FadeInContainer>

      <div className="mt-16 flex justify-center">
        <ImageCircle src="/images/me.png" alt="A picture of me, Jon Rigert" />
      </div>
    </PageSection>
  );
};
