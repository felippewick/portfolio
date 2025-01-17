import Link from 'next/link';
import { allBlogs } from 'contentlayer/generated';
// import ViewCounter from './view-counter';

export const metadata = {
  title: 'Blog',
  description: 'Read my thoughts on software development, design, and more.',
};

// from PM to developer
// my struggles with programming in high school and university

export default async function BlogPage() {
  return (
    <section>
      <h1 className="font-bold text-2xl font-grotesk mb-5">Blog</h1>
      {allBlogs
        .sort((a, b) => {
          if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-col">
              <p>{post.title}</p>
              <p className="uppercase font-light text-neutral-500 text-xs">
                {post.publishedAt}
              </p>
              {/* <ViewCounter slug={post.slug} trackView={false} /> */}
            </div>
          </Link>
        ))}
    </section>
  );
}
