import './global.css';
import clsx from 'clsx';
import localFont from '@next/font/local';
import Sidebar from '../components/sidebar';
import AnalyticsWrapper from '../components/analytics';
import globalMetadata from './metadata';
import Navbar from 'components/navbar';
import {
  kaisei,
  syne,
  grotesk
} from '@/lib/fonts';

export const metadata = globalMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'text-black bg-white dark:text-white dark:bg-[#111010]',
        kaisei.variable,
        grotesk.variable
      )}
    >
      <body className="antialiased max-w-2xl mb-40 flex flex-col mx-4 mt-8 md:mt-20 lg:mt-32 lg:mx-auto">
        {/* <Sidebar /> */}
        <main className="flex-auto  min-w-0 mt-6 md:mt-0 flex flex-col px-2 md:px-0">
          {children}
          <AnalyticsWrapper />
        </main>
        <Navbar />
      </body>
    </html>
  );
}
