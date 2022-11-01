import Link from 'next/link';

export default async function Page() {
  return (
    <div className="container">
      <h1>albatross family</h1>
      <Link href="/blog">See our new blog!</Link>
    </div>
  );
}
