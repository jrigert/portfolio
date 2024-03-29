'use client';

import { Button } from '@/components/core/Button';
import { Container } from '@/components/core/Container';
import { NavLink } from '@/components/navigation/NavLink';
import { ThemeToggle } from '@/components/ThemeToggle';
import { HOMEPAGE_CONFIG } from '@/config/homepage';
import { useMobileNav } from '@/hooks/useMobileNav';
import { classNames } from '@/utils/style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import { FunctionComponent } from 'react';
import { faBars, faXmark as faX } from '@fortawesome/free-solid-svg-icons';

const { sections } = HOMEPAGE_CONFIG;

export const Header: FunctionComponent = () => {
  const {
    animationState,
    registerNavRef,
    shouldShowMobileNav,
    toggleMobileNav,
    closeMobileNav,
  } = useMobileNav();
  const { theme } = useTheme();
  const menuToggleHelperText = `${shouldShowMobileNav ? 'Close' : 'Open'} Navigation Panel`;

  return (
    <header
      className="fixed left-0 top-0 z-10 w-full bg-dark-blue text-white shadow-xl shadow-black/40"
      ref={registerNavRef}
    >
      <Container className={`relative flex h-14 items-center justify-between`}>
        <a
          href={'/#main'}
          className="absolute top-14 bg-background px-2 text-foreground [&:not(:focus)]:sr-only"
        >
          Skip to main content
        </a>

        <Image
          src={
            theme === 'highContrast'
              ? '/images/logo-white.svg'
              : '/images/logo.svg'
          }
          alt="Image of the initials J.R."
          width={50}
          height={30}
          priority
        />

        <nav
          role="navigation"
          className={classNames(
            'duration-250 fixed right-0 top-14 min-w-60 bg-dark-blue p-10 text-xl shadow-lg shadow-black transition motion-reduce:transition-opacity lg:relative lg:right-auto lg:top-auto lg:block lg:min-w-0 lg:translate-x-0 lg:p-0 lg:text-base lg:shadow-none',
            animationState === 'closed' && 'hidden translate-x-60',
            animationState === 'opening' && 'translate-x-60',
            animationState === 'open' && 'translate-x-0',
            animationState === 'closing' && 'translate-x-60',
          )}
        >
          <Button
            variant="naked"
            size="icon"
            className="absolute right-0 top-0 text-dark-blue-foreground motion-safe:hover:scale-125 lg:hidden"
            aria-label="Close Navigation Panel"
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
            aria-label={menuToggleHelperText}
          >
            <FontAwesomeIcon icon={faBars} />
          </Button>
        </div>
      </Container>
    </header>
  );
};
