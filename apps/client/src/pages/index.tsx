import Image from 'next/image';
// import { Button } from 'atoms';

import { feedback, collaboration, learning, community } from '@/assets/index';

import Header from '@/components/molecules/Header';
import Footer from '@/components/molecules/Footer';
import communityImg from '@/public/community.png';
import { Button } from '@/components/atoms/Button';

// advanced features section icons
import autographIcon from '@/public/icon-autograph.png';
import computerChatIcon from '@/public/icon-computerChat.png';
import goalIcon from '@/public/icon-goal.png';
import handWithPenIcon from '@/public/icon-handWithPen.png';
import photoCameraFrontIcon from '@/public/icon-photoCameraFront.png';

export default function IndexPage() {
  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-(70px))] px-5 py-8 lg:px-16">
        <div className="hero-section flex w-full flex-col items-center justify-center py-8 text-center">
          <h1 className="max-w-3xl text-3xl font-bold text-slate-900 md:text-5xl _2md:text-5xl lg:text-5xl ">
            The <span className="text-blue-600">Open Source</span> Blogging
            Platform
          </h1>
          <p className="text-md mt-8 max-w-2xl text-slate-500">
            BlogHive is a platform designed specifically for writers and
            bloggers to share their work, receive feedback, and collaborate with
            others on their blogging journey.
          </p>
        </div>
        <section className="community-section mt-8">
          <div className="flex flex-col items-center">
            <span className="rounded-lg border border-blue-600 px-2 py-1 text-blue-600">
              Community
            </span>
            <p className="mt-4 max-w-lg text-center text-xl font-semibold text-slate-700">
              BlogHive is more than just a platform for writers and bloggers -
              it's a <span className="text-blue-600">community</span>
            </p>
          </div>
          <div className="mt-8 grid grid-cols-1 justify-items-center gap-12 lg:grid-cols-2 lg:justify-items-start">
            <div className="flex max-w-xl flex-col justify-center gap-8 text-slate-600">
              <p>
                With BlogHive, you can share your work, get feedback, and
                collaborate with others on your blogging journey.{' '}
              </p>
              <p>
                And as an open source platform, BlogHive is built and maintained
                by a community of developers and users who are passionate about
                helping writers and bloggers succeed.
              </p>
            </div>
            <div>
              <Image src={communityImg} alt="Community Image" />
            </div>
          </div>
        </section>
        <section className="key-features-section my-8">
          <div className="my-4 flex justify-center">
            <span className="rounded-lg border border-blue-600 px-2 py-1 text-blue-600">
              Key features
            </span>
          </div>
          <div className="grid grid-cols-1 gap-y-20 rounded-lg bg-card px-10 py-16 shadow lg:grid-cols-2 lg:px-20 xl:grid-cols-2 xl:px-20">
            <div className="flex max-w-lg gap-8">
              <div>
                <Image
                  src={feedback}
                  alt="feedback and critique"
                  width={120}
                  height={120}
                />
              </div>
              <div>
                <h3 className="mb-4 text-xl font-bold capitalize text-slate-900">
                  Feedback and critique
                </h3>
                <p>
                  Get constructive feedback and critiques from other writers and
                  experts in your niche to help you improve your skills and grow
                  as a blogger.
                </p>
              </div>
            </div>
            <div className="flex  max-w-lg  gap-8">
              <div>
                <Image
                  src={collaboration}
                  alt="Collaboration and support"
                  width={120}
                  height={120}
                />
              </div>
              <div>
                <h3 className="mb-4 text-xl font-bold capitalize text-slate-900">
                  Collaboration and support
                </h3>
                <p>
                  Connect with other writers and bloggers to share ideas, offer
                  support, and collaborate on projects.
                </p>
              </div>
            </div>
            <div className="flex  max-w-lg  gap-8">
              <div>
                <Image
                  src={learning}
                  alt="Learning resources"
                  width={120}
                  height={120}
                />
              </div>
              <div>
                <h3 className="mb-4 text-xl font-bold capitalize text-slate-900">
                  Learning resources
                </h3>
                <p>
                  Access a wide range of resources and guides to help you learn
                  more about blogging, writing, and online publishing.
                </p>
              </div>
            </div>
            <div className="flex max-w-lg  gap-8">
              <div>
                <Image
                  src={community}
                  alt="community forums"
                  width={120}
                  height={120}
                />
              </div>
              <div>
                <h3 className="mb-4 text-xl font-bold capitalize text-slate-900">
                  Community forums
                </h3>
                <p>
                  Participate in forums and discussion groups to connect with
                  other writers and bloggers, share your work, and get feedback.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="advanced-features-section my-8">
          <div className="my-4 flex flex-col items-center">
            <span className="rounded-lg border border-blue-600 px-2 py-1 text-blue-600">
              Advanced features
            </span>
            <p className="mt-4 max-w-lg text-center text-xl font-semibold text-slate-700">
              Take your writing to the{' '}
              <span className="text-blue-600">next level</span> with BlogHive's
              advanced features
            </p>
          </div>
          <div className="grid grid-cols-2 place-items-center items-start gap-y-20 px-8 py-16">
            <div className="flex max-w-lg gap-8">
              <div className="flex h-[60px] w-[110px] items-center justify-around rounded bg-slate-1">
                <Image src={handWithPenIcon} alt="Hand With Pen Icon" />
              </div>
              <div>
                <h3 className="mb-4 text-2xl font-semibold not-italic">
                  Writing prompts and challenges
                </h3>
                <p className="text-base font-normal not-italic">
                  Practice your writing skills and explore new topics and styles
                  with a variety of writing prompts and challenges.
                </p>
              </div>
            </div>
            <div className="flex max-w-lg gap-8">
              <div className="flex h-[60px] w-[110px] items-center justify-around rounded bg-slate-1">
                <Image src={autographIcon} alt="Autpograph Icon" />
              </div>
              <div>
                <h3 className="mb-4 text-2xl font-semibold not-italic">
                  Writing critiques and editing services
                </h3>
                <p>
                  Get more in-depth feedback on your work with our writing
                  critique and editing services.
                </p>
              </div>
            </div>
            <div className="flex max-w-lg gap-8">
              <div className="flex h-[60px] w-[110px] items-center justify-around rounded bg-slate-1">
                <Image
                  src={photoCameraFrontIcon}
                  alt="Photo Camera Front Icon"
                />
              </div>
              <div>
                <h3 className="mb-4 text-2xl font-semibold not-italic">
                  Online workshops
                </h3>
                <p>
                  Learn more about writing, blogging, and online publishing with
                  our online courses and workshops.
                </p>
              </div>
            </div>
            <div className="flex max-w-lg gap-8">
              <div className="flex h-[60px] w-[110px] items-center justify-around rounded bg-slate-1">
                <Image src={computerChatIcon} alt="Computer Chat   Icon" />
              </div>
              <div>
                <h3 className="mb-4 text-2xl font-semibold not-italic">
                  Collaboration tools
                </h3>
                <p>
                  Work together with other writers and share ideas and feedback
                  more easily with our collaboration tools.
                </p>
              </div>
            </div>
            {/* <div className="col-span-2 border border-red-500"> */}
            <div className="col-span-2 flex max-w-lg gap-8">
              <div className="flex h-[60px] w-[110px] items-center justify-around rounded bg-slate-1">
                <Image src={goalIcon} alt="Goal Icon" />
              </div>
              <div>
                <h3 className="mb-4 text-2xl font-semibold not-italic">
                  Personalized writing plans
                </h3>
                <p>
                  Set writing goals, track your progress, and stay motivated
                  with our personalized writing plans.
                </p>
              </div>
            </div>
            {/* </div> */}
          </div>
        </section>
        <section className="subscribe-section flex justify-center rounded-xl bg-slate-300 p-8 shadow">
          <div className="flex max-w-3xl flex-col items-center justify-center gap-8 p-2 lg:p-8 xl:p-8">
            <h4 className="text-center text-xl font-bold text-slate-800 md:text-2xl lg:text-3xl xl:text-3xl">
              Ready to join the BlogHive community?
            </h4>
            <p className="text-md px-2 text-center text-slate-900 lg:px-5 xl:px-5">
              Sign up now and start improving your writing skills, connecting
              with other writers, and taking your blogging journey to the next
              level!
            </p>
            <div className="flex w-full flex-col items-center justify-center lg:flex-row lg:justify-center">
              <button
                className="z-50 mt-[1.5rem] rounded-lg bg-slate-900 py-2 px-5 font-bold text-slate-100 placeholder:text-[#fff] lg:relative lg:right-[7.5rem] lg:mt-0"
                type="submit"
              >
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
