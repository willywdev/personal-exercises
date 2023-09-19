import Link from "next/link";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function HomePage() {
  const { data, error, isLoading } = useSWR("/api/products", fetcher);
  if (!data) {
    return;
  }
  if (error) {
    return <h1>Something went wrong :(</h1>;
  }
  if (isLoading) {
    return <h1>Is loading ...</h1>;
  }

  return (
    <div>
      <h1>Welcome to the freshest Fish Store!</h1>
      <h2>All products:</h2>
      <ul>
        {data.map((fish) => (
          <Link key={fish.id} href={`/${fish.id}`}>
            <article>
              <li>
                <b>{fish.name}</b>
              </li>
              <p>
                {fish.description} - {fish.price} {fish.currency}
              </p>
            </article>
          </Link>
        ))}
      </ul>
    </div>
  );
}
