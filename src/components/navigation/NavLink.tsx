'use client';

import { VerticalDivider } from '@/components/core/VerticalDivider';
import { useScrollContext } from '@/hooks/scroll/useScrollContext';
import { classNames } from '@/utils/style';
import Link from 'next/link';
import { FunctionComponent, useMemo } from 'react';

export interface NavLinkProps {
  href: string;
  id: string;
  label: string;
  dividerClassName?: string;
  linkClassName?: string;
  showDivider?: boolean;
}

export const NavLink: FunctionComponent<NavLinkProps> = (props) => {
  const { href, id, label, dividerClassName, linkClassName, showDivider } =
    props;

  const { activeSection } = useScrollContext();
  const isActive = activeSection === id;

  const linkClassNames = useMemo(
    () =>
      classNames(
        'relative opacity-80 hover:nav-link-underline hover:opacity-100 tracking-widest',
        {
          'nav-link-underline opacity-100': isActive,
        },
        linkClassName,
      ),
    [linkClassName, isActive],
  );

  return (
    <li className="flex items-center">
      <Link href={href} className={linkClassNames}>
        {label}
      </Link>
      {showDivider ? <VerticalDivider className={dividerClassName} /> : null}
    </li>
  );
};
