import { HomePageSectionProps } from '@/pages/home';
import { HomeAbout } from '@/pages/home/About';
import { HomeExperience } from '@/pages/home/Experience';
import { HomeMore } from '@/pages/home/HomeMore';
import { HomeSkills } from '@/pages/home/Skills';
import { HomeWelcome } from '@/pages/home/Welcome';
import { FunctionComponent } from 'react';

export interface HomepageSection {
  linkLabel: string;
  id: string;
  Component: FunctionComponent<HomePageSectionProps>;
}

export interface HomepageConfig {
  sections: HomepageSection[];
}

export const HOMEPAGE_CONFIG: HomepageConfig = {
  sections: [
    {
      linkLabel: 'Home',
      id: 'home',
      Component: HomeWelcome,
    },
    {
      linkLabel: 'About Me',
      id: 'about',
      Component: HomeAbout,
    },
    {
      linkLabel: 'Skills',
      id: 'skills',
      Component: HomeSkills,
    },
    {
      linkLabel: 'Experience',
      id: 'experience',
      Component: HomeExperience,
    },
    {
      linkLabel: 'More',
      id: 'more',
      Component: HomeMore,
    },
  ],
} as const;
