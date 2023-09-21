import { useRouter } from "next/router";
import useSWR from "swr";
import { StyledLink } from "../Link/Link.styled";
import { ProductCard } from "./Product.styled";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useSWR(`/api/products/${id}`);
  console.log(data);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <ProductCard>
      <h2>{data.name}</h2>
      <p>Description: {data.description}</p>
      <p>
        Price: {data.price} {data.currency}
      </p>
      <h4>Reviews</h4>
      {data.reviews ? (
        data.reviews.map((review) => (
          <article key={review._id}>
            <p>
              <strong>{review.title}</strong>
            </p>
            <p>{review.rating} / 5 ⭐️</p>
            <p>{review.text}</p>
          </article>
        ))
      ) : (
        <p>No Reviews yet ...</p>
      )}
      <StyledLink href="/">Back to all</StyledLink>
    </ProductCard>
  );
}
