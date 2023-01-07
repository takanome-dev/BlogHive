import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import logoTextBlack from '@/public/logo-text-black.png';

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
        <div className="link-container flex flex-col gap-3">
          <h6 className="text-slate-400 font-bold text-xl">Explore</h6>
          <Link href="/#" className='text-lg'>Feed</Link>
          <Link href="/#" className='text-lg'>Trending Blogs</Link>
          <Link href="/#" className='text-lg'>Tags</Link>
          <Link href="/#" className='text-lg'>Search</Link>
        </div>
        <div className="link-container flex flex-col gap-3">
          <h6 className="text-slate-400 font-bold text-xl">BlogHive</h6>
          <Link href="/#" className='text-lg'>About</Link>
          <Link href="/#" className='text-lg'>Contact</Link>
          <Link href="/#" className='text-lg'>Terms</Link>
          <Link href="/#" className='text-lg'>Privacy</Link>
        </div>
        <div className="link-container flex flex-col gap-3">
          <h6 className="text-slate-400 font-bold text-xl">Support</h6>
          <Link href="/#" className='text-lg'>Community</Link>
          <Link href="/#" className='text-lg'>Discussion</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
