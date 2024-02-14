'use client';

import { FadeInContainer } from '@/components/animation/FadeInContainer';
import { Heading } from '@/components/core/Heading';
import { HorizontalDivider } from '@/components/core/HorizontalDivider';
import { PageSection } from '@/components/PageSection';
import { PageSectionHeading } from '@/components/PageSectionHeading';
import { SkillCard, SkillCardProps } from '@/components/SkillCard';
import { useInterval } from '@/hooks/useInterval';
import { useOnEnterViewport } from '@/hooks/useOnEnterViewport';
import { HomePageSectionProps } from '@/pages/home/index';
import { classNames } from '@/utils/style';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import {
  faDatabase,
  faKey,
  faNetworkWired,
  faPaintbrush,
  faToolbox,
} from '@fortawesome/free-solid-svg-icons';
import { FunctionComponent, useMemo, useState } from 'react';

const SKILLS: SkillCardProps[] = [
  {
    title: 'Fundamentals',
    description: 'JavaScript, CSS, HTML, Accessibility',
    icon: faKey,
  },
  {
    title: 'React',
    description: 'NextJS, Functional Programming, React Native',
    icon: faReact,
  },
  {
    title: 'State Management',
    description: 'Redux, Context API',
    icon: faDatabase,
  },
  {
    title: 'API Integration',
    description: 'Apollo Client, react-query',
    icon: faDatabase,
  },
  {
    title: 'Tools',
    description: 'TypeScript, TurboRepo',
    icon: faToolbox,
  },
  {
    title: 'Styling',
    description: 'CSS, SASS, Tailwind',
    icon: faPaintbrush,
  },
  {
    title: 'API Development',
    description: 'NodeJS, Apollo Server',
    icon: faNetworkWired,
  },
  {
    title: 'Databases',
    description: 'SQL, Mongo',
    icon: faDatabase,
  },
  {
    title: 'CMS',
    description: 'Drupal, Contentful, Builder.io',
    icon: faDatabase,
  },
  {
    title: 'CI/CD',
    description: 'GitHub Actions, Bitbucket Pipelines, Azure Dev Ops, Jenkins',
    icon: faDatabase,
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
];

// time between when each item animation triggers
const ANIMATION_INTERVAL_DURATION = 250;

interface SkillComponentData extends SkillCardProps {
  containerClassName?: string;
}

export const HomeSkills: FunctionComponent<HomePageSectionProps> = (props) => {
  const { id } = props;

  // the items animate in one by one, this is the index of the last item to animate in
  const [lastAnimatedIndex, setLastAnimatedIndex] = useState(-1);

  // entering the viewport starts the interval
  const { hasEntered, registerRef } = useOnEnterViewport({
    intersectOptions: { threshold: 0.1 },
  });

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
        containerClassName: classNames('transition duration-1000', {
          ['opacity-100 translate-y-0']: isVisible,
          ['opacity-0 translate-y-5']: !isVisible,
        }),
      } satisfies SkillComponentData;
    });
  }, [lastAnimatedIndex]);

  return (
    <PageSection id={id}>
      <PageSectionHeading title="Skills" />

      <div ref={registerRef}>
        <ul className="mx-auto mt-16 grid max-w-xs grid-cols-1 gap-10 text-center sm:max-w-screen-lg sm:grid-cols-2 md:grid-cols-3">
          {skills.map(({ containerClassName, ...props }) => (
            <li key={props.title} className={containerClassName}>
              <SkillCard {...props} className="h-full" />
            </li>
          ))}
        </ul>
      </div>

      <FadeInContainer>
        <HorizontalDivider className="mb-20 mt-32" />

        <Heading tag="h3" className="mt-24 text-center">
          Additional
        </Heading>

        <p className="mx-auto mt-8 max-w-3xl text-center">
          Here are some more areas I have dabbled in. I am probably rusty, or
          just not very experienced, so I did not want to list these as true
          skills:
        </p>

        <ul className="mt-8 flex flex-wrap justify-center">
          {ADDITIONAL_SKILLS.map((skill) => (
            <li
              key={skill}
              className="my-3 -ml-px border-collapse border-x border-x-primary px-8 text-lg"
            >
              {skill}
            </li>
          ))}
        </ul>
      </FadeInContainer>
    </PageSection>
  );
};
