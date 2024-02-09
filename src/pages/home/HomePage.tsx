import { HomeAbout } from '@/pages/home/About';
import { HomeExperience } from '@/pages/home/Experience';
import { HomeSkills } from '@/pages/home/Skills';
import type { FunctionComponent } from 'react';

export const HomePage: FunctionComponent = () => {
  return (
    <main>
      <HomeAbout />
      <HomeSkills />
      <HomeExperience />
    </main>
  );
};
