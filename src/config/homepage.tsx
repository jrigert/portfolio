import { HomePageSectionProps } from '@/components/pages/home';
import { HomeAbout } from '@/components/pages/home/About';
import { HomeExperience } from '@/components/pages/home/Experience';
import { HomeBonus } from '@/components/pages/home/HomeBonus';
import { HomeSkills } from '@/components/pages/home/Skills';
import { HomeWelcome } from '@/components/pages/home/Welcome';
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
      linkLabel: 'Bonus',
      id: 'bonus',
      Component: HomeBonus,
    },
  ],
} as const;
