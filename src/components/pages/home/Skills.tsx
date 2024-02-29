'use client';

import { FadeInContainer } from '@/components/animation/FadeInContainer';
import { Heading } from '@/components/core/Heading';
import { PageSection } from '@/components/PageSection';
import { PageSectionHeading } from '@/components/PageSectionHeading';
import { SkillCard, SkillCardProps } from '@/components/SkillCard';
import { useInterval } from '@/hooks/useInterval';
import { useOnEnterViewport } from '@/hooks/useOnEnterViewport';
import { HomePageSectionProps } from '@/components/pages/home/index';
import { classNames } from '@/utils/style';
import { FunctionComponent, useMemo, useState } from 'react';

const SKILLS: SkillCardProps[] = [
  {
    title: 'Fundamentals',
    description: 'JavaScript, CSS, HTML, Accessibility',
  },
  {
    title: 'React',
    description: 'NextJS, Functional Programming, React Native',
  },
  {
    title: 'API Integration',
    description: 'Apollo Client, React Query, RTK Query, Axios',
  },
  {
    title: 'Tools',
    description: 'TypeScript, TurboRepo, Redux / Redux Saga',
  },
  {
    title: 'Unit Testing',
    description: 'jest, vitest, React Testing Library',
  },
  {
    title: 'Styling',
    description: 'Tailwind, CSS, SASS, CSS-in-JS, Storybook',
  },
  {
    title: 'API Development',
    description: 'NodeJS, Apollo Server',
  },
  {
    title: 'Databases',
    description: 'SQL, Mongo',
  },
  {
    title: 'CMS',
    description: 'Drupal, Contentful, Builder.io',
  },
  {
    title: 'CI/CD',
    description: 'GitHub Actions, Bitbucket Pipelines, Azure Dev Ops, Jenkins',
  },
  {
    title: 'Tooling',
    description: 'Vite, tsup',
  },
];

const ADDITIONAL_SKILLS = [
  'Angular',
  'AEM',
  'ThreeJS',
  'AWS',
  'Vercel Hosting',
  'Gatsby',
  'Zustand',
  'Fastlane',
  'Firebase',
  'Remix',
  'C#',
  '.NET',
];

// time between when each item animation triggers
const ANIMATION_INTERVAL_DURATION = 150;

interface SkillComponentData extends SkillCardProps {
  containerClassName?: string;
}

export const HomeSkills: FunctionComponent<HomePageSectionProps> = (props) => {
  const { id } = props;

  // the items animate in one by one, this is the index of the last item to animate in
  const [lastAnimatedIndex, setLastAnimatedIndex] = useState(-1);

  // entering the viewport starts the interval
  const { hasEntered, registerRef } = useOnEnterViewport();

  // interval to trigger animation on each list item, one at a time
  const { clear: clearInterval } = useInterval(
    () => {
      setLastAnimatedIndex((currentIndex) => {
        const newIndex = currentIndex + 1;

        // list is done animating
        if (newIndex >= SKILLS.length) {
          clearInterval();
          return SKILLS.length - 1;
        }

        return currentIndex + 1;
      });
    },
    { duration: ANIMATION_INTERVAL_DURATION, active: hasEntered },
  );

  // create a new list of skills with animation classes attached
  const skills: SkillComponentData[] = useMemo(() => {
    return SKILLS.map((skill, index) => {
      const isVisible = index <= lastAnimatedIndex;

      return {
        ...skill,
        containerClassName: classNames(
          'transition motion-reduce:transition-opacity duration-1000',
          {
            ['opacity-100 translate-y-0']: isVisible,
            ['opacity-0 motion-safe:translate-y-5']: !isVisible,
          },
        ),
      } satisfies SkillComponentData;
    });
  }, [lastAnimatedIndex]);

  return (
    <PageSection id={id} className="pb-20">
      <PageSectionHeading title="Skills" />

      <div ref={registerRef}>
        <ul className="mx-auto mt-20 grid max-w-xs grid-cols-1 gap-x-12 gap-y-16 text-center sm:max-w-screen-lg sm:grid-cols-2 md:grid-cols-3 lg:gap-x-16">
          {skills.map(({ containerClassName, ...props }) => (
            <li key={props.title} className={containerClassName}>
              <SkillCard {...props} className="h-full" />
            </li>
          ))}
        </ul>
      </div>

      <FadeInContainer>
        <div className="flex flex-col items-center justify-center">
          <Heading tag="h3" wrapperClassName="mt-36" underline>
            Additional
          </Heading>
        </div>

        <div>
          <p className="mx-auto mt-8 max-w-screen-lg sm:text-lg">
            Here are some additional technologies I&#39;ve explored. I&#39;m
            either a bit rusty or lack extensive experience in these areas, so I
            didn&#39;t list them as primary skills:
          </p>

          <ul className="mx-auto mt-16 flex max-w-screen-md flex-wrap justify-center">
            {ADDITIONAL_SKILLS.map((skill) => (
              <li
                key={skill}
                className="-mx-px my-3 border-collapse border-x-2 border-x-primary px-3 text-lg sm:px-8"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </FadeInContainer>
    </PageSection>
  );
};
