import { Container } from '@/components/core/Container';
import { NavLink } from '@/components/navigation/NavLink';
import { ThemeToggle } from '@/components/ThemeToggle';
import Image from 'next/image';
import Link from 'next/link';
import type { FunctionComponent } from 'react';

export const Header: FunctionComponent = () => {
  return (
    <>
      <header className="bg-gray fixed left-0 top-0 z-10 w-full text-white shadow-xl shadow-black/40 dark:shadow-lg dark:shadow-white/30">
        <Container className={`flex h-14 items-center justify-between`}>
          <Link
            href="#about"
            className="font-heading text-2xl font-bold text-primary"
          >
            <Image src="/images/logo.svg" alt="JR" width={70} height={33} />
          </Link>

          <nav>
            <ul className="font-heading flex">
              <NavLink href="#about" label="About Me" showDivider isActive />
              <NavLink href="#skills" label="Skills" showDivider />
              <NavLink href="#experience" label="Experience" />
            </ul>
          </nav>

          <ThemeToggle className="ml-12" />
        </Container>
      </header>
    </>
  );
};
