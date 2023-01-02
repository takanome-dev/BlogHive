import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import logoTextBlack from '@/public/logo-text-black-1.png';

const Footer = () => {
  return (
    <footer className="flex justify-between border-t border-slate-4 p-16 shadow">
      <div className="socials">
        <Link href="/">
          <Image src={logoTextBlack} width={200} height={200} alt="Logo" />
        </Link>
        <div className="socials-icons flex gap-4">
          <div className="social h-12 w-12 bg-blue-600"></div>
          <div className="social h-12 w-12 bg-blue-600"></div>
          <div className="social h-12 w-12 bg-blue-600"></div>
          <div className="social h-12 w-12 bg-blue-600"></div>
        </div>
        <p>Copyright © BlogHive 2022</p>
      </div>
      <div className="links flex gap-20">
        <div className="link-container flex flex-col">
          <h6>Explore</h6>
          <Link href="/#">Feed</Link>
          <Link href="/#">Trending Blogs</Link>
          <Link href="/#">Tags</Link>
          <Link href="/#">Search</Link>
        </div>
        <div className="link-container flex flex-col">
          <h6>BlogHive</h6>
          <Link href="/#">About</Link>
          <Link href="/#">Contact</Link>
          <Link href="/#">Terms</Link>
          <Link href="/#">Privacy</Link>
        </div>
        <div className="link-container flex flex-col">
          <h6>Support</h6>
          <Link href="/#">Community</Link>
          <Link href="/#">Discussion</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
