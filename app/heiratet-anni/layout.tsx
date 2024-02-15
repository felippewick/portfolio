import { cn } from '@/lib/utils';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body
      className={cn(
        'antialiased max-w-2xl flex flex-col mx-4 mt-6 sm:mt-12 lg:mx-auto',
        'text-orange-600 bg-orange-50'
      )}
    >
      <main className="flex-auto  min-w-0 mt-6 md:mt-0 flex flex-col px-2 md:px-0">
        {children}
      </main>
    </body>
  );
}
