import Image from 'next/image';
// import { Button } from 'atoms';

import {
    feedback,
    collaboration,
    learning,
    community,
} from "../assets/index"

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import communityImg from '@/public/community.png';

export default function IndexPage() {
  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-(70px))] px-16 py-8">
        <div className="hero-section flex w-full flex-col items-center justify-center border border-red-500 py-8 text-center">
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
        <section className="community-section mt-8">
          <div className="flex flex-col items-center">
            <span className="rounded-lg border border-blue-600 px-2 py-1 text-blue-600">
              Community
            </span>
            <p className="mt-4 max-w-lg text-xl font-semibold text-slate-700">
              BlogHive is more than just a platform for writers and bloggers -
              it's a <span className="text-blue-600">community</span>
            </p>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-12">
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
          <div className="grid grid-cols-2 gap-y-20 rounded-lg bg-card px-20 py-16 shadow">
            <div className="flex max-w-lg gap-8">
              <div>
                <Image src={feedback} alt="feeback" className='w-[40px]'/>
              </div>
              <div>
                <h3 className="mb-4 text-slate-100 text-xl font-bold capitalize">Feedback and critique</h3>
                <p>
                  Get constructive feedback and critiques from other writers and
                  experts in your niche to help you improve your skills and grow
                  as a blogger.
                </p>
              </div>
            </div>
            <div className="flex  max-w-lg  gap-8">
              <div>
                <Image src={collaboration} alt="feeback" className='w-[40px]'/>
              </div>
              <div>
                <h3 className="mb-4 text-slate-100 text-xl font-bold capitalize">Feedback and critique</h3>
                <p>
                  Get constructive feedback and critiques from other writers and
                  experts in your niche to help you improve your skills and grow
                  as a blogger.
                </p>
              </div>
            </div>
            <div className="flex  max-w-lg  gap-8">
              <div>
                <Image src={learning} alt="feeback" className='w-[40px]'/>
              </div>
              <div>
                <h3 className="mb-4 text-slate-100 text-xl font-bold capitalize">Feedback and critique</h3>
                <p>
                  Get constructive feedback and critiques from other writers and
                  experts in your niche to help you improve your skills and grow
                  as a blogger.
                </p>
              </div>
            </div>
            <div className="flex max-w-lg  gap-8">
              <div>
                <Image src={community} alt="feeback" className='w-[40px]'/>
              </div>
              <div>
                <h3 className="mb-4 text-slate-100 text-xl font-bold capitalize">Feedback and critique</h3>
                <p>
                  Get constructive feedback and critiques from other writers and
                  experts in your niche to help you improve your skills and grow
                  as a blogger.
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
            <div className="flex max-w-lg gap-8 border border-red-500">
              <div>Icon</div>
              <div>
                <h3 className="mb-4">Writing prompts and challenges</h3>
                <p>
                  Practice your writing skills and explore new topics and styles
                  with a variety of writing prompts and challenges.
                </p>
              </div>
            </div>
            <div className="flex max-w-lg gap-8 border border-red-500">
              <div>Icon</div>
              <div>
                <h3 className="mb-4">Writing critiques and editing services</h3>
                <p>
                  Get more in-depth feedback on your work with our writing
                  critique and editing services.
                </p>
              </div>
            </div>
            <div className="flex max-w-lg gap-8 border border-red-500">
              <div>Icon</div>
              <div>
                <h3 className="mb-4">Online workshops</h3>
                <p>
                  Learn more about writing, blogging, and online publishing with
                  our online courses and workshops.
                </p>
              </div>
            </div>
            <div className="flex max-w-lg gap-8 border border-red-500">
              <div>Icon</div>
              <div>
                <h3 className="mb-4">Collaboration tools</h3>
                <p>
                  Work together with other writers and share ideas and feedback
                  more easily with our collaboration tools.
                </p>
              </div>
            </div>
            {/* <div className="col-span-2 border border-red-500"> */}
            <div className="col-span-2 flex max-w-lg gap-8 border border-red-500">
              <div>Icon</div>
              <div>
                <h3 className="mb-4">Personalized writing plans</h3>
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
          <div className="flex max-w-3xl flex-col items-center justify-center gap-8 p-8">
            <h4 className="text-3xl font-bold text-slate-800">Ready to join the BlogHive community?</h4>
            <p className="text-center text-slate-900 text-md px-5">
              Sign up now and start improving your writing skills, connecting
              with other writers, and taking your blogging journey to the next
              level!
            </p>
                <div className='w-full flex lg:flex-row md:flex-row flex-col lg:justify-center justify-center items-center'>
                  <input type="text"
                        className='lg:w-[60%] h-[3rem] rounded-lg outline-none bg-slate-100 pl-4 w-[80%]'
                        required 
                        placeholder="your email address"
                  />
                  <div className="flex justify-center items-center">
                    <button className='bg-slate-900 lg:mt-0 mt-[1.5rem] text-slate-100 lg:relative lg:right-[7.5rem] placeholder:text-[#fff] py-2 px-5 font-bold rounded-lg z-50' type="submit">Subscribe</button>  
                  </div>
                </div> 
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
