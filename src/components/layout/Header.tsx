import * as React from 'react';

import { Link } from 'react-scroll';

const links = [
  { href: 'programme', label: 'Programme' },
  { href: 'acces', label: 'Accès' },
  { href: 'logements', label: 'Logements' },
  { href: 'votre-presence', label: 'Votre Présence' },
  { href: 'contact', label: 'Contact' },
];

export default function Header() {
  return (
    <header className='top-0 z-50 w-full bg-darkGreen/70 font-albatros text-white md:sticky'>
      <div className='layout flex flex-col items-center justify-between md:flex-row md:py-4'>
        <Link
          to='hero'
          className='cursor-pointer py-4 font-bold uppercase hover:text-darkGreen md:py-0'
        >
          Justine <span className='font-albatrosItalic'>&</span> Théophile
        </Link>
        <nav className='hidden md:block'>
          <ul className='flex flex-col items-center justify-between space-y-4 pb-4 md:flex-row md:space-x-4 md:space-y-0 md:pb-0'>
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <Link
                  to={href}
                  offset={-28}
                  duration={500}
                  className='cursor-pointer hover:text-darkGreen'
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
