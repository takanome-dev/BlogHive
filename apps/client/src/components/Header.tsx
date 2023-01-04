import { Button } from 'atoms';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import logoTextBlack from '@/public/logo-text-black.png';

const Header = () => (
  <header className="sticky top-0 flex items-center justify-between bg-white bg-opacity-70 px-16 py-2 shadow-md backdrop-blur-md">
    <Link href="/">
      <Image src={logoTextBlack} width={200} height={200} alt="Logo" />
    </Link>
    <Button>Sign in</Button>
  </header>
);

export default Header;
