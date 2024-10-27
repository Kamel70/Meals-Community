import Link from 'next/link';
import Image from 'next/image';


export default function MealItem({ title, slug, image, summary, creator }) {
  return (
    <article>
      <header>
        <div>
          <Image src={image} alt={title} width={300} height={300} />
        </div>
        <div>
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>
      <div>
        <p>{summary}</p>
        <div>
          <Link href={`/meals/${slug}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
}
