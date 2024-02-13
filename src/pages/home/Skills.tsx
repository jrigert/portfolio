'use client';

import { FadeInContainer } from '@/components/animation/FadeInContainer';
import { PageSection } from '@/components/PageSection';
import { PageSectionHeading } from '@/components/PageSectionHeading';
import { SkillCard, SkillCardProps } from '@/components/SkillCard';
import { HomePageSectionProps } from '@/pages/home/index';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import {
  faDatabase,
  faKey,
  faPaintbrush,
  faToolbox,
} from '@fortawesome/free-solid-svg-icons';
import type { FunctionComponent } from 'react';

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

export const HomeSkills: FunctionComponent<HomePageSectionProps> = (props) => {
  const { id } = props;

  return (
    <PageSection id={id} fullHeight>
      <PageSectionHeading title="Skills" />

      <FadeInContainer>
        <ul className="mt-16 grid grid-cols-4 gap-10 text-center">
          {SKILLS.map((props) => (
            <li key={props.title} className="">
              <SkillCard {...props} />
            </li>
          ))}
        </ul>
      </FadeInContainer>
    </PageSection>
  );
};
