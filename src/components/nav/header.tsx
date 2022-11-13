import Image from 'next/image';
import Link from 'next/link';
import BlogTitle from './blogTitle';

export default function Header() {
  return (
    <header>
      <BlogTitle />
      <Link href="/">
        <Image src="/logo.png" width={65} height={65} alt="Logo" />
      </Link>
    </header>
  );
}
