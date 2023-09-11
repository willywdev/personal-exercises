import Card from "@/components/Card";
import { useRouter } from "next/router";
import useSWR from "swr";
import Layout from "../../components/Layout";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Character() {
  const router = useRouter();
  const { id } = router.query;

  const { data, error, isLoading } = useSWR(
    id ? `https://swapi.dev/api/people/${id}` : null,
    fetcher
  );

  if (error) return <h1>failed to load: {error.message}</h1>;
  if (isLoading) return <h1>loading...</h1>;

  if (!data) {
    return null;
  }

  const { name, height, eye_color, birth_year } = data;

  return (
    <Layout>
      {data && (
        <Card
          id={id}
          name={name}
          height={height}
          eyeColor={eye_color}
          birthYear={birth_year}
        />
      )}
    </Layout>
  );
}
