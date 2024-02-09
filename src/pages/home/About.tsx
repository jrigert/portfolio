import { Heading } from '@/components/core/Heading';
import { HomeSection } from '@/components/HomeSection';
import type { FunctionComponent } from 'react';

export const HomeAbout: FunctionComponent = () => {
  return (
    <HomeSection
      className="flex flex-col items-start justify-center"
      id="about"
      offsetScroll={false}
    >
      <Heading tag="h1" className="text-center">
        Jon Rigert
      </Heading>

      <div className="text-center text-xl">
        <p>
          Hi, I&#39;m Jon! I am a web developer/architect, passionate about
          frontend development
        </p>
        <p className="my-4">
          <span className="text-primary">
            Director, Web Application Development
          </span>{' '}
          at{' '}
          <a
            href="https://www.bounteous.com"
            className="text-primary underline"
          >
            Bounteous
          </a>
        </p>
      </div>
    </HomeSection>
  );
};
