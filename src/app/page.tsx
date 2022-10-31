import GetPosts from '@utils/getPosts';
import BlogCard from '@components/cards/blogCard';
import Link from 'next/link';

export default async function Page() {
  const data = await GetPosts();
  return (
    <div className="container-grid">
      {/* {data.map((blog) => (
        <BlogCard
          key={blog.posts.title}
          title={blog.posts.title}
          slug={blog.posts.slug}
          date={blog.posts.date}
          metaTitle={blog.posts.metaTitle}
          imageURL={blog.posts.socialImage}
          height={blog.posts.socialImageHeight}
          width={blog.posts.socialImageWidth}
        />
      ))} */}
      <h1>albatross family</h1>
      <Link href="/blog">See our new blog!</Link>
    </div>
  );
}
