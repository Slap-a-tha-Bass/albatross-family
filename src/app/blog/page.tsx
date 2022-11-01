import GetPosts from '@utils/getPosts';
import BlogCard from '@components/cards/blogCard';

export default async function Page() {
  const data = await GetPosts();
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
            height={blog.posts.socialImageHeight}
            width={blog.posts.socialImageWidth}
          />
        ))}
    </div>
  );
}
