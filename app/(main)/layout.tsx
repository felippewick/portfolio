import '../global.css';
import AnalyticsWrapper from '../../components/analytics';
import globalMetadata from '../metadata';
import Navbar from 'components/navbar';
import { cn } from '@/lib/utils';

export const metadata = globalMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body
      className={cn(
        'antialiased max-w-2xl mb-40 flex flex-col mx-4 mt-20 md:mt-20 lg:mt-32 lg:mx-auto',
        'text-black bg-white dark:text-white dark:bg-[#111010]'
      )}
    >
      {/* <Sidebar /> */}
      <main className="flex-auto  min-w-0 mt-6 md:mt-0 flex flex-col px-2 md:px-0">
        {children}
        <AnalyticsWrapper />
      </main>
      <Navbar />
    </body>
  );
}
