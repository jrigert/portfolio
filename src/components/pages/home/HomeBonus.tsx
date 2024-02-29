'use client';

import { FadeInContainer } from '@/components/animation/FadeInContainer';
import { Badge } from '@/components/core/Badge';
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
import { FunctionComponent } from 'react';

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

export const HomeBonus: FunctionComponent<HomePageSectionProps> = (props) => {
  const { id } = props;

  return (
    <PageSection id={id} className="pb-40">
      <PageSectionHeading title="Bonus Content" />

      <FadeInContainer>
        <Heading
          tag="h3"
          wrapperClassName="mb-12 mt-32 justify-center"
          underline
        >
          Personal Info
        </Heading>

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
          wrapperClassName="mb-6 mt-40 justify-center"
          underline
        >
          About This Site
        </Heading>

        <p className="text-center">TODO: Details about this portfolio :)</p>
      </FadeInContainer>
    </PageSection>
  );
};
