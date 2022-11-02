import DateChanger from '@utils/dateChanger';
import Image from 'next/image';
import Link from 'next/link';

interface IBlogCard {
  title: string;
  date: string;
  metaTitle: string;
  imageURL: string;
  slug: string;
}

export default function BlogCard({
  title,
  date,
  metaTitle,
  imageURL,
  slug,
}: IBlogCard) {
  return (
    <Link href={`/blog/${slug}`}>
      <div className="card-primary">
        <p style={{ textAlign: 'center' }}>
          <Image
            alt={metaTitle}
            src={`/${imageURL}`}
            fill
            priority
            sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
          />
        </p>
        <h3>{title}</h3>
        <h4>{DateChanger(date)}</h4>
      </div>
    </Link>
  );
}
