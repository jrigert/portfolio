import { Container } from '@/components/core/Container';
import { NavLink } from '@/components/navigation/NavLink';
import { ThemeToggle } from '@/components/ThemeToggle';
import { HOMEPAGE_CONFIG } from '@/config/homepage';
import Image from 'next/image';
import Link from 'next/link';
import type { FunctionComponent } from 'react';

const { sections } = HOMEPAGE_CONFIG;

export const Header: FunctionComponent = () => {
  return (
    <>
      <header className="bg-dark-blue fixed left-0 top-0 z-10 w-full text-white shadow-xl shadow-black/40">
        <Container className={`flex h-14 items-center justify-between`}>
          <Link
            href={`/#${sections[0].id}`}
            className="font-heading text-2xl font-bold text-primary"
          >
            <Image
              src="/images/logo.svg"
              alt="JR: Click to return home"
              width={50}
              height={33}
            />
          </Link>

          <nav>
            <ul className="flex font-heading">
              {HOMEPAGE_CONFIG.sections.map(({ id, linkLabel }, index) => (
                <NavLink
                  key={id}
                  id={id}
                  href={`/#${id}`}
                  label={linkLabel}
                  showDivider={index !== sections.length - 1}
                />
              ))}
            </ul>
          </nav>

          <ThemeToggle className="ml-12" />
        </Container>
      </header>
    </>
  );
};
