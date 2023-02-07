import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Button } from '@/components/ui/button';

import logoTextBlack from '@/public/logo-text-black.png';

const Header = () => (
  <header className="z-10 sticky top-0 bg-white bg-opacity-70 py-2 shadow-md backdrop-blur-md">
    <div className='container flex items-center justify-between mx-auto'>
    <Link href="/">
      <Image src={logoTextBlack} className="w-1/2" alt="Logo" />
    </Link>
    <Button variant="primary" className='border border-red-500'>Join now</Button>
    </div>
  </header>
);

export default Header;
