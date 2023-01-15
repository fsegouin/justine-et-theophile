import * as React from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';

const links = [
  { href: '#programme', label: 'Programme' },
  { href: '#acces', label: 'Accès' },
  { href: '#logements', label: 'Logements' },
  { href: '#votre-presence', label: 'Votre Présence' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  return (
    <header className='top-0 z-50 bg-blue-400 text-white md:sticky'>
      <div className='layout flex flex-col items-center justify-between md:flex-row md:py-4'>
        <UnstyledLink
          href='/'
          className='py-4 font-bold hover:text-gray-600 md:py-0'
        >
          Justine et Théophile
        </UnstyledLink>
        <nav>
          <ul className='flex flex-col items-center justify-between space-y-4 pb-4 md:flex-row md:space-x-4 md:space-y-0 md:pb-0'>
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <UnstyledLink href={href} className='hover:text-gray-600'>
                  {label}
                </UnstyledLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
