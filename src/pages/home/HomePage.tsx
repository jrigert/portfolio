import { HOMEPAGE_CONFIG } from '@/config/homepage';
import type { FunctionComponent } from 'react';

const { sections } = HOMEPAGE_CONFIG;

export const HomePage: FunctionComponent = () => {
  return (
    <main>
      {sections.map(({ id, Component }) => (
        <section key={id}>
          <Component id={id} />
        </section>
      ))}
    </main>
  );
};
