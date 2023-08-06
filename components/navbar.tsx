'use client';

import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';

const navItems = {
  '/': {
    name: 'home',
    x: 0,
    y: 0,
    w: '64px',
  },
  '/about': {
    name: 'about',
    x: 64,
    y: 35,
    w: '65px',
  },
  '/blog': {
    name: 'blog',
    x: 127,
    y: 69,
    w: '56px',
  },
  // '/guestbook': {
  //   name: 'guestbook',
  //   x: 182,
  //   y: 104,
  //   w: '100px',
  // },
};



export default function Navbar() {
  let pathname = usePathname();
  if (pathname.includes('/blog/')) {
    pathname = '/blog';
  }

  return (
    <div className="fixed top-8 left-0 right-0 mx-auto w-fit md:flex-shrink-0">
      <nav
        className="flex flex-row md:flex-col items-center justify-center relative overflow-scroll px-2 pb-0 fade md:overflow-auto scroll-pr-6 md:relative border-gray-100/20 border-[0.5px] rounded-3xl bg-dark-1"
        id="nav"
      >
        <div className="flex flex-row space-x-0 my-2">


          {Object.entries(navItems).map(([path, { name }]) => {
            const isActive = path === pathname;

            return (
              <Link
                key={path}
                href={path}
                className={clsx(
                  'transition-all hover:text-neutral-800 dark:hover:text-neutral-200 py-[2px] px-[10px]',
                  {
                    'text-neutral-500': !isActive,
                    'font-bold': isActive,
                  }
                )}
              >
                {name}
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
