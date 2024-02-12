'use client';

import { Badge } from '@/components/core/Badge';
import { Heading } from '@/components/core/Heading';
import { PageSection } from '@/components/PageSection';
import { PageSectionHeading } from '@/components/PageSectionHeading';
import { useEnterAnimation } from '@/hooks/useEnterAnimation';
import { HomePageSectionProps } from '@/pages/home/index';
import { classNames } from '@/utils/style';
import {
  faDog,
  faBaby,
  faGamepad,
  faBook,
  faDumbbell,
} from '@fortawesome/free-solid-svg-icons';
import type { FunctionComponent } from 'react';

export const HomeAbout: FunctionComponent<HomePageSectionProps> = (props) => {
  const { id } = props;
  const { className: bodyAnimationClass, registerRef: registerBodyRef } =
    useEnterAnimation({
      initialClassName: 'translate-x-12 opacity-0',
      enterClassName: 'translate-x-0 opacity-100',
      intersectOptions: {
        threshold: 0.5,
      },
    });

  return (
    <PageSection id={id} wrapperClassName="bg-background-secondary pb-20">
      <PageSectionHeading title="About Me" />

      <div
        className={classNames(
          'vertical-spacing highlight-strong mt-12 text-center text-xl transition duration-1000',
          bodyAnimationClass,
        )}
        ref={registerBodyRef}
      >
        <p>
          Hi! I&rsquo;m <strong>Jon</strong>. I am a{' '}
          <strong>web developer, architect, team lead</strong> and{' '}
          <strong>director</strong>. With <strong>over a decade</strong> of
          experience building web applications, I love creating usable web
          applications with <strong>clean</strong> and
          <strong> scalable</strong> code.
        </p>

        <p>
          I am passionate about <strong>inclusive and accessible</strong> web
          design and implementation.
        </p>
      </div>

      <Heading tag="h3" className="mb-6 mt-20 text-center">
        Personal Info
      </Heading>

      <ul className="flex flex-wrap justify-center gap-6">
        <Badge icon={faBaby} label="Father" />
        <Badge icon={faDog} label="Dog Dad" />
        <Badge icon={faGamepad} label="Gamer" />
        <Badge icon={faBook} label="Reader" />
        <Badge icon={faDumbbell} label="Weightlifter" />
      </ul>
    </PageSection>
  );
};
