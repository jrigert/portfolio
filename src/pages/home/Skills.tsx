'use client';

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
  faPaintbrush,
  faToolbox,
} from '@fortawesome/free-solid-svg-icons';
import { FunctionComponent, useMemo, useState } from 'react';

const SKILLS: SkillCardProps[] = [
  {
    title: 'Essentials',
    description: 'JavaScript, CSS, HTML, Accessibility',
    icon: faKey,
  },
  {
    title: 'React',
    description: 'NextJS, Functional Programming',
    icon: faReact,
  },
  {
    title: 'State Management',
    description: 'Redux, Zustand, Context API',
    icon: faDatabase,
  },
  {
    title: 'API Integration',
    description: 'Apollo, react-query',
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
    <PageSection id={id} fullHeight>
      <PageSectionHeading title="Skills" />

      <div ref={registerRef}>
        <ul className="mt-16 grid grid-cols-4 gap-10 text-center">
          {skills.map(({ containerClassName, ...props }) => (
            <li key={props.title} className={containerClassName}>
              <SkillCard {...props} />
            </li>
          ))}
        </ul>
      </div>
    </PageSection>
  );
};
