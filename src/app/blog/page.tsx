import BlogCard from '@components/cards/blogCard';
import GetPosts from '@utils/getPosts';
import { use } from 'react';

export default function Page() {
  const data = use(GetPosts());
  return (
    <div className="container-grid">
      {data
        .sort((a, b) => {
          const dateA: any = new Date(a.posts.date);
          const dateB: any = new Date(b.posts.date);
          return dateB - dateA;
        })
        .map((blog) => (
          <BlogCard
            key={blog.posts.title}
            slug={blog.posts.slug}
            title={blog.posts.title}
            date={blog.posts.date}
            metaTitle={blog.posts.metaTitle}
            imageURL={blog.posts.socialImage}
          />
        ))}
    </div>
  );
}
