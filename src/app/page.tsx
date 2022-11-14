import Link from 'next/link';
import Image from 'next/image';

export default async function Page() {
  return (
    <div className="grid">
      <Image
        src="/galata.png"
        alt="Albatross family"
        priority
        width={400}
        height={320}
        placeholder="blur"
        quality={100}
        blurDataURL={`/galata.png`}
      />
      <div className="main text-center">
        <h1>albatross family</h1>
        <p>Travelling for family, food, friends, and wine</p>
        <Link className='btn-primary' href="/blog">View Blog</Link>
      </div>
    </div>
  );
}
