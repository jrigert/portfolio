import { Container } from '@/components/core/Container';
import { NavLink } from '@/components/navigation/NavLink';
import { ThemeToggle } from '@/components/ThemeToggle';
import Link from 'next/link';
import type { FunctionComponent } from 'react';

export const Header: FunctionComponent = () => {
  return (
    <>
      <header className="bg-gray dark:shadow-primary/20 fixed left-0 top-0 z-10 w-full text-white shadow-xl shadow-black/40">
        <Container className={`flex h-14 items-center justify-between`}>
          <Link
            href="#about"
            className="font-source-code text-2xl font-bold text-primary"
          >
            {'{jrigert}'}
          </Link>

          <div className="flex items-center">
            <nav>
              <ul className="font-source-code flex">
                <NavLink href="#about" label="About Me" showDivider isActive />
                <NavLink href="#skills" label="Skills" showDivider />
                <NavLink href="#experience" label="Experience" />
              </ul>
            </nav>

            <ThemeToggle className="ml-4" />
          </div>
        </Container>
      </header>
    </>
  );
};
