'use client';

import { FadeInContainer } from '@/components/animation/FadeInContainer';
import { Badge } from '@/components/core/Badge';
import { ExternalLink } from '@/components/core/ExternalLink';
import { Heading } from '@/components/core/Heading';
import { PageSection } from '@/components/PageSection';
import { PageSectionHeading } from '@/components/PageSectionHeading';
import { HomePageSectionProps } from '@/components/pages/home/index';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faBaby,
  faBook,
  faDog,
  faDumbbell,
  faGamepad,
  faHiking,
  faCampground,
  faDiceD20,
  faPuzzlePiece,
  faChessBoard,
} from '@fortawesome/free-solid-svg-icons';
import { FunctionComponent, PropsWithChildren } from 'react';

interface PersonalInfoItem {
  label: string;
  icon: IconDefinition;
}

const PERSONAL_INFO: PersonalInfoItem[] = [
  { icon: faBaby, label: 'Father' },
  { icon: faDog, label: 'Dog Dad' },
  { icon: faGamepad, label: 'Games' },
  { icon: faBook, label: 'Reading' },
  { icon: faDumbbell, label: 'Fitness' },
  { icon: faHiking, label: 'Hiking' },
  { icon: faCampground, label: 'Camping' },
  { icon: faDiceD20, label: 'D&D' },
  { icon: faChessBoard, label: 'Board Games' },
  { icon: faPuzzlePiece, label: 'Puzzles' },
];

const TechStackListItem: FunctionComponent<PropsWithChildren> = (props) => {
  const { children } = props;

  return (
    <li className="my-8">
      <p className="text-lg">{children}</p>
    </li>
  );
};

export const HomeBonus: FunctionComponent<HomePageSectionProps> = (props) => {
  const { id } = props;

  return (
    <PageSection id={id} className="pb-20">
      <PageSectionHeading title="Bonus Content" />

      <FadeInContainer>
        <Heading
          tag="h3"
          wrapperClassName="mb-12 mt-32 justify-center"
          underline
        >
          Personal Info
        </Heading>

        <p className="mb-12 mt-12 text-center">
          Here&#39;s some not-so-technical information about me and my hobbies:
        </p>

        <ul className="mx-auto grid max-w-2xl grid-cols-2 gap-6 sm:flex sm:flex-wrap sm:justify-center">
          {PERSONAL_INFO.map(({ label, icon }) => (
            <li key={label}>
              <Badge
                className="h-full w-full text-center sm:h-auto sm:w-auto"
                icon={icon}
                label={label}
              />
            </li>
          ))}
        </ul>

        <Heading
          tag="h3"
          wrapperClassName="mb-6 mt-32 md:mt-40 justify-center"
          underline
        >
          About This Site
        </Heading>

        <div>
          <p className="mt-12 text-center">
            Curious how I created this portfolio? Check out the tech stack
            below!
          </p>
          <p className="mt-2 text-center">
            Also feel free to{' '}
            <ExternalLink href="https://github.com/jrigert/portfolio">
              take a look at the code
            </ExternalLink>
            .
          </p>

          <ul className="mx-auto mt-16 max-w-lg list-disc pl-4">
            <TechStackListItem>
              <ExternalLink href="https://react.dev/">React</ExternalLink> and{' '}
              <ExternalLink href="https://nextjs.org/">NextJS</ExternalLink> for
              the core framework
            </TechStackListItem>

            <TechStackListItem>
              <ExternalLink href="https://www.typescriptlang.org/docs/">
                Typescript
              </ExternalLink>{' '}
              for strict type safety
            </TechStackListItem>

            <TechStackListItem>
              <ExternalLink href="https://tailwindcss.com/">
                Tailwind
              </ExternalLink>{' '}
              for styling
            </TechStackListItem>

            <TechStackListItem>
              <ExternalLink href="https://www.radix-ui.com/primitives/">
                Radix Primitives
              </ExternalLink>{' '}
              for accessible popover and radio group components
            </TechStackListItem>

            <TechStackListItem>
              <ExternalLink href="https://fontawesome.com/">
                FontAwesome
              </ExternalLink>{' '}
              for various icons
            </TechStackListItem>

            <TechStackListItem>
              <ExternalLink href="https://fonts.google.com/">
                Google Fonts
              </ExternalLink>{' '}
              for typography
            </TechStackListItem>

            <TechStackListItem>
              Hosted on{' '}
              <ExternalLink href="https://vercel.com/">Vercel</ExternalLink>
            </TechStackListItem>
          </ul>
        </div>
      </FadeInContainer>
    </PageSection>
  );
};
