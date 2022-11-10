import Link from 'next/link';
import Image from 'next/image';

export default async function Page() {
  return (
    <div>
      <div className="container-center">
        <Image
          src="/ceren-seaside.png"
          alt="Albatross family"
          priority
          fill
          placeholder="blur"
          quality={100}
          blurDataURL={`/ceren-seaside.png`}
        />
      </div>
      <div className="container-bottom">
        <h1>albatross family</h1>
        <p>Travelling for family, food, friends, and wine</p>
        <Link href="/blog">View Blog</Link>
      </div>
    </div>
  );
}
