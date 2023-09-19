import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function HomePage() {
  const { data, error, isLoading } = useSWR("/api/random-character", fetcher);
  if (error) {
    return <h1>Something went wrong</h1>;
  }
  if (isLoading) {
    return <h1>Random character is loading ...</h1>;
  }
  if (!data) {
    return;
  }

  return (
    <main>
      <h1>{`Hello from ${data.name}`}</h1>
      <p>
        {`I am ${data.age} years old and i live in ${data.adress}, ${data.country}`}
      </p>
      <p>{`My gender is ${data.gender} and if you want to contact me you can via ${data.phone}`}</p>
    </main>
  );
}
