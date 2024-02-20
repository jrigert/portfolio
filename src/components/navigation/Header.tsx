'use client';

import { Button } from '@/components/core/Button';
import { Container } from '@/components/core/Container';
import { NavLink } from '@/components/navigation/NavLink';
import { ThemeToggle } from '@/components/ThemeToggle';
import { HOMEPAGE_CONFIG } from '@/config/homepage';
import { useMobileNav } from '@/hooks/useMobileNav';
import { classNames } from '@/utils/style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import { FunctionComponent } from 'react';
import { faBars, faXmark as faX } from '@fortawesome/free-solid-svg-icons';

const { sections } = HOMEPAGE_CONFIG;

export const Header: FunctionComponent = () => {
  const { animationState, registerNavRef, toggleMobileNav, closeMobileNav } =
    useMobileNav();

  return (
    <header
      className="fixed left-0 top-0 z-10 w-full bg-dark-blue text-white shadow-xl shadow-black/40"
      ref={registerNavRef}
    >
      <Container className={`flex h-14 items-center justify-between`}>
        <Link
          href={`/#${sections[0].id}`}
          className="font-heading text-2xl font-bold text-primary"
          onClick={closeMobileNav}
        >
          <Image
            src="/images/logo.svg"
            alt="JR: Click to return home"
            width={50}
            height={33}
            priority
          />
        </Link>

        <nav
          role="navigation"
          className={classNames(
            'duration-250 fixed right-0 top-14 min-w-60 bg-dark-blue p-10 text-xl shadow-lg shadow-black transition lg:relative lg:right-auto lg:top-auto lg:block lg:min-w-0 lg:translate-x-0 lg:p-0 lg:text-base lg:shadow-none',
            animationState === 'closed' && 'hidden translate-x-60',
            animationState === 'opening' && 'translate-x-60',
            animationState === 'open' && 'translate-x-0',
            animationState === 'closing' && 'translate-x-60',
          )}
        >
          <Button
            variant="naked"
            size="icon"
            className="absolute right-0 top-0 lg:hidden"
            onClick={closeMobileNav}
          >
            <FontAwesomeIcon icon={faX} />
          </Button>
          <ul className="flex flex-col gap-8 font-heading lg:flex-row lg:gap-0">
            {HOMEPAGE_CONFIG.sections.map(({ id, linkLabel }, index) => (
              <NavLink
                key={id}
                id={id}
                href={`/#${id}`}
                label={linkLabel}
                showDivider={index !== sections.length - 1}
                dividerClassName="hidden lg:inline-block"
                onClick={closeMobileNav}
              />
            ))}
          </ul>
        </nav>

        <div className="flex items-center">
          <ThemeToggle />

          <Button
            variant="naked"
            className="lg:hidden"
            size="icon"
            color="default-on-dark"
            onClick={toggleMobileNav}
          >
            <FontAwesomeIcon icon={faBars} />
          </Button>
        </div>
      </Container>
    </header>
  );
};
