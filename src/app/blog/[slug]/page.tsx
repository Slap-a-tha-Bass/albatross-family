import fs from 'fs';
import matter from 'gray-matter';
import MarkdownIt from 'markdown-it';
import GetPosts from '@utils/getPosts';
import { use } from 'react';
import Image from 'next/image';

async function getOnePost({ slug }: any) {
  const files = fs.readdirSync(`src/posts`);
  const post = files.find((filename) => filename === `${slug}.md`);
  if (post) {
    const markdownWithMetadata = fs
      .readFileSync(`src/posts/${post}`)
      .toString();
    const { data: frontmatter, content } = matter(markdownWithMetadata);
    return { frontmatter, content };
  }
}

export async function generateStaticParams() {
  const posts = await GetPosts();
  return posts.map((blog) => ({
    slug: blog.posts.slug,
  }));
}

export default function Page({ params }: any) {
  const { slug } = params;
  const post: any = use(getOnePost({ slug: slug }));
  const md = new MarkdownIt();
  const result = md.render(post ? post.content : '');
  return (
    <div className="blog-content">
      <h1>{post?.frontmatter.title}</h1>
      {<div dangerouslySetInnerHTML={{ __html: result }} />}
      {post &&
        post.frontmatter.images &&
        post.frontmatter.images.map((image: any) => (
          <Image
            key={image}
            src={`/${image}`}
            alt={post?.frontmatter.title}
            height={post?.frontmatter.socialImageHeight}
            width={post?.frontmatter.socialImageWidth}
          />
        ))}
    </div>
  );
}
