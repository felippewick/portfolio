import { cn } from '@/lib/utils';

export const metadata = {
  description: 'Tinkering, building, exploring.',
  openGraph: {
    title: 'Anni &#x2665; Felippe',
    description: 'Invite to our special day',
    url: 'https://felippewick.com/heiratet-anni',
    siteName: 'Felippe Wick',
    images: [
      {
        url: 'https://felippewick.com/engagement-2.jpg',
        width: 1920,
        height: 1080,
      },
    ],
    // openGraph: {
    //   images: [
    //     `/api/og?title=${recipe.name}&image_url=${recipe.thumbnail_url}&avatar_url=${recipe.creators.avatar_url}`,
    //     ...previousImages,
    //   ],
    //   description: recipe.description,
    //   type: 'article',
    //   publishedTime: recipe.inserted_at,
    //   authors: [recipe.creators.username],
    // },
    locale: 'en-US',
    type: 'website',
  },
};

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
