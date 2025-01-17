import { cn } from '@/lib/utils';
// https://www.franciscomoretti.com/blog/setting-up-static-og-image-nextjs-app-router
export const metadata = {
  metadataBase: new URL("https://felippewick.com"),
  description: "Tinkering, building, exploring.",
  openGraph: {
    title: "Anni & Felippe",
    description: "Einladung zu unserer Hochzeit",
    url: "https://felippewick.com/heiratet-anni",
    siteName: "Anni & Felippe Wick",
    images: [
      {
        url: `https://www.felippewick.com/images/og-eng.jpg`, // Must be
        width: 250,
        height: 250,
      },
      {
        url: `https://www.felippewick.com/images/og-eng.jpg`, // Must be
        width: 800,
        height: 600,
      },
      {
        url: `https://www.felippewick.com/images/og-eng.jpg`, // Must be
        width: 1800,
        height: 1600,
        alt: "Anni & Felippe",
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
    locale: "en-US",
    type: "website",
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
        "antialiased max-w-2xl flex flex-col mx-4 mt-6 sm:mt-12 lg:mx-auto",
        "text-orange-600 bg-orange-50"
      )}
      suppressHydrationWarning={true}
    >
      <main className="flex-auto  min-w-0 mt-6 md:mt-0 flex flex-col px-2 md:px-0">
        {children}
      </main>
    </body>
  );
}
