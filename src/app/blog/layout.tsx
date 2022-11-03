import GetPosts from '@utils/getPosts';
import Link from 'next/link';
import { use } from 'react';

export default function Layout({ children }: any) {
  const data = use(GetPosts());
  return (
    <div className="">
      <div className="container-sidebar">
        {data
          .sort((a, b) => {
            const dateA: any = new Date(a.posts.date);
            const dateB: any = new Date(b.posts.date);
            return dateB - dateA;
          })
          .map((blog) => (
            <ul key={blog.posts.title}>
              <li>
                <Link href={`/blog/${blog.posts.slug}`}>
                {blog.posts.date.slice(0, 4)} - {blog.posts.title}
                </Link>
              </li>
            </ul>
          ))}
      </div>
      <div className="container-content">{children}</div>
    </div>
  );
}
{
  /* <BlogCard
              key={blog.posts.title}
              slug={blog.posts.slug}
              title={blog.posts.title}
              date={blog.posts.date}
              metaTitle={blog.posts.metaTitle}
              imageURL={blog.posts.socialImage}
            /> */
}
