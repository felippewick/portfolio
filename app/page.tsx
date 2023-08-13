import Image from 'next/image';
// import { getBlogViews, getTweetCount, getCommitCount } from 'lib/metrics';
import {
  ArrowIcon,
} from 'components/icons';
import { cn } from '@/lib/utils';

export const revalidate = 60;

export const metadata = {
  description: 'Developer, writer, and creator.',
  openGraph: {
    title: 'Felippe Wick',
    description: 'Developer, writer, and creator.',
    url: 'https://felippewick.com',
    siteName: 'Felippe Wick',
    images: [
      {
        url: 'https://felippewick.com/og.jpg',
        width: 1920,
        height: 1080,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
}


export default async function HomePage() {
  // const [commitCount, views, tweetCount] = await Promise.all([
  //   getCommitCount(),
  //   getBlogViews(),
  //   getTweetCount(),
  // ]);

  return (
    <section className="">
      <h1 className={cn('font-bold text-2xl font-grotesk')}>
        Hey, I'm Felippe.
      </h1>
      <p className="my-5 max-w-[460px] text-neutral-800 dark:text-neutral-200">
        I'm a self-taught product engineer and former Product Manager based in
        Berlin, Germany. I'm the co-founder of{' '}
        <a
          className="hover:text-neutral-700 dark:hover:text-neutral-200 transition-all font-semibold"
          rel="noopener noreferrer"
          target="_blank"
          href="https://cliqe.de"
        >
          cliqe
        </a>{' '}
        & previously built{' '}
        <a
          className="hover:text-neutral-700 dark:hover:text-neutral-200 transition-all font-semibold"
          rel="noopener noreferrer"
          target="_blank"
          href="https://joinupto.com"
        >
          upto
        </a>
        .
      </p>
      <div className="flex items-start md:items-center my-8 flex-col md:flex-row">
        <Image
          alt={'Felippe Wick'}
          className="rounded-full w-32 h-32 object-cover"
          src={'/images/avatar.jpg'}
          // placeholder="blur"
          width={500}
          height={500}
          priority
        />
        {/* <div className="mt-8 md:mt-0 ml-0 md:ml-6 space-y-2 text-neutral-500 dark:text-neutral-400">
          <p className="flex items-center gap-2">
            <TwitterIcon />
            {`${tweetCount.toLocaleString()} tweets all time`}
          </p>
          <p className="flex items-center gap-2">
            <GitHubIcon />
            {`${commitCount.toLocaleString()} stars on this repo`}
          </p>
          <p className="flex items-center">
            <ViewsIcon />
            {`${views.toLocaleString()} blog views all time`}
          </p>
        </div> */}
      </div>
      <p className="my-5 max-w-[600px] text-neutral-800 dark:text-neutral-200">
        My passion for programming got started during my stints in Berlin-based
        startups in both Product and Solutions Engineering. I'm now focussing on
        becoming a full-fledged Product Engineer with a strong sense for Design turning ideas into businesses.
        <br></br>
        <br></br>
        This page is my personal playground for programming, design and writing.
      </p>
      <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-500 dark:text-neutral-400">
        <li>
          <a
            className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/felippewick"
          >
            <ArrowIcon />
            <p className="h-7">follow me on twitter</p>
          </a>
        </li>
        {/* <li>
          <a
            className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://felippewick.substack.com"
          >
            <ArrowIcon />
            <p className="h-7">get email updates</p>
          </a>
        </li> */}
      </ul>
    </section>
  );
}
