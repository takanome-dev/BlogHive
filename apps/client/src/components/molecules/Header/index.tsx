import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Button } from '@/components/atoms/Button';

import logoTextBlack from '@/public/logo-text-black.png';

const Header = () => (
  <header className="z-[999] sticky top-0 flex items-center justify-between bg-white bg-opacity-70 px-8 lg:px-16 py-2 shadow-md backdrop-blur-md">
    <Link href="/">
      <Image src={logoTextBlack} className="w-1/2" alt="Logo" />
    </Link>
    <Button color='primary'>Join now</Button>
  </header>
);

export default Header;
