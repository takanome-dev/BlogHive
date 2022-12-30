import Image from 'next/image';
import Link from 'next/link';
import { Button } from 'ui';
import logoTextBlack from '../../public/logo-text-black-1.png';

export default function IndexPage() {
  return (
    <>
      <header className="sticky top-0 flex items-center justify-between px-16 py-2 shadow-md">
        <Link href="/">
          <Image src={logoTextBlack} width={200} height={200} alt="Logo" />
        </Link>
        <Button />
      </header>
      <main className="min-h-[calc(100vh-(70px))] px-16 py-8">
        <div className="flex w-full flex-col items-center justify-center border border-red-500 py-8 text-center">
          <h1 className="max-w-3xl text-5xl font-bold text-slate-900 ">
            The <span className="text-blue-600">Open Source</span> Blogging
            Platform
          </h1>
          <p className="text-md mt-8 max-w-2xl text-slate-500">
            BlogHive is a platform designed specifically for writers and
            bloggers to share their work, receive feedback, and collaborate with
            others on their blogging journey.
          </p>
        </div>
        <div className="mt-8 flex flex-col items-center">
          <span className="rounded-lg border border-blue-600 px-2 py-1 text-blue-600">
            Community
          </span>
          <p className="mt-4 max-w-lg text-xl font-semibold text-slate-700">
            BlogHive is more than just a platform for writers and bloggers -
            it's a <span className="text-blue-600">community</span>
          </p>
        </div>
      </main>
    </>
  );
}
