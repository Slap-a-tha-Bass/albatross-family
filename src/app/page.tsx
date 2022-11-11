import Link from 'next/link';
import Image from 'next/image';

export default async function Page() {
  return (
    <div>
      <div className='home-image'>
        <Image
          src="/galata.png"
          alt="Albatross family"
          priority
          fill
          placeholder="blur"
          quality={100}
          blurDataURL={`/galata.png`}
        />
      </div>
      <div className='main'>
        <h1>albatross family</h1>
        <p>Travelling for family, food, friends, and wine</p>
        <Link href="/blog">View Blog</Link>
      </div>
    </div>
  );
}
